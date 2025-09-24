import * as React from "react";
import { Box, Typography } from "@mui/joy";
import * as THREE from "three";

const ShapesPage = () => {
  // Ref to attach the Three.js canvas to the DOM
  const mountRef = React.useRef(null);

  // State to track drag interactions
  const [isDragging, setIsDragging] = React.useState(false);
  const [draggedShape, setDraggedShape] = React.useState(null);

  React.useEffect(() => {
    // Get the container element
    const mount = mountRef.current;
    if (!mount) return;

    // Scene setup - this is like the stage where everything happens
    const scene = new THREE.Scene();
    // Transparent background - no background color set

    // Camera setup - this is our viewpoint into the 3D world
    const camera = new THREE.PerspectiveCamera(
      75, // Field of view (how wide the camera sees)
      mount.clientWidth / mount.clientHeight, // Aspect ratio
      0.1, // Near clipping plane
      1000 // Far clipping plane
    );

    // Renderer setup - this draws the 3D scene onto a 2D canvas
    const renderer = new THREE.WebGLRenderer({
      antialias: false, // Disable antialiasing for pixelated look
      alpha: true, // Enable transparency
    });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(0.7); // Lower pixel ratio for more pixelated effect
    mount.appendChild(renderer.domElement);

    // Create geometries for different shapes with lower polygon counts for more pixelated look
    const cubeGeometry = new THREE.BoxGeometry(1, 1, 1, 1, 1, 1); // Minimal subdivisions
    const pyramidGeometry = new THREE.ConeGeometry(0.7, 1.2, 4, 1); // 4 sides, no subdivisions
    const hexGeometry = new THREE.CylinderGeometry(0.8, 0.8, 0.3, 6, 1); // 6 sides, no height subdivisions
    const octahedronGeometry = new THREE.OctahedronGeometry(0.8, 0); // No subdivisions

    // Create custom pixelated edges with thick tube geometry for reliable thickness
    const createPixelatedEdges = (geometry, color) => {
      const edges = new THREE.EdgesGeometry(geometry, 40); // High threshold angle for cleaner edges
      const positions = edges.attributes.position.array;

      // Create a group to hold all the thick lines
      const linesGroup = new THREE.Group();

      // Process edges in pairs (each line has 2 vertices)
      for (let i = 0; i < positions.length; i += 6) {
        const start = new THREE.Vector3(
          positions[i],
          positions[i + 1],
          positions[i + 2]
        );
        const end = new THREE.Vector3(
          positions[i + 3],
          positions[i + 4],
          positions[i + 5]
        );

        // Calculate line direction and length
        const direction = new THREE.Vector3().subVectors(end, start);
        const length = direction.length();

        // Create tube geometry for thick line
        const tubeGeometry = new THREE.CylinderGeometry(0.02, 0.02, length, 6); // Thick tubes with 6 sides
        const tubeMaterial = new THREE.MeshBasicMaterial({ color: color });
        const tube = new THREE.Mesh(tubeGeometry, tubeMaterial);

        // Position and orient the tube
        tube.position.copy(start.clone().add(end).multiplyScalar(0.5)); // Center between start and end
        tube.lookAt(end); // Orient toward end point
        tube.rotateX(Math.PI / 2); // Correct orientation for cylinder

        linesGroup.add(tube);
      }

      return linesGroup;
    };

    // Create pixelated wireframe shapes using thick tube edges
    const cube = createPixelatedEdges(cubeGeometry, 0xff6b6b); // Red
    const pyramid = createPixelatedEdges(pyramidGeometry, 0x4ecdc4); // Cyan
    const hexagon = createPixelatedEdges(hexGeometry, 0x45b7d1); // Blue
    const octahedron = createPixelatedEdges(octahedronGeometry, 0x96ceb4); // Green

    // Position the shapes in a row
    cube.position.x = -2.5;
    pyramid.position.x = -0.8;
    hexagon.position.x = 0.8;
    octahedron.position.x = 2.5;

    // Add all shapes to the scene
    scene.add(cube);
    scene.add(pyramid);
    scene.add(hexagon);
    scene.add(octahedron);

    // Store shapes in an array for easier interaction handling
    const shapes = [cube, pyramid, hexagon, octahedron];

    // Raycaster for mouse picking - detects which object the mouse is over
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    // Variables to track dragging state
    let selectedShape = null;
    let dragPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0); // Plane for dragging
    let dragOffset = new THREE.Vector3();

    // Convert mouse position to normalized device coordinates (-1 to +1)
    const getMousePosition = (event) => {
      const rect = mount.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    };

    // Mouse down event - start dragging
    const onMouseDown = (event) => {
      getMousePosition(event);
      raycaster.setFromCamera(mouse, camera);

      const intersects = raycaster.intersectObjects(shapes);
      if (intersects.length > 0) {
        selectedShape = intersects[0].object;
        setIsDragging(true);
        setDraggedShape(selectedShape);

        // Calculate drag plane and offset
        dragPlane.setFromNormalAndCoplanarPoint(
          camera.getWorldDirection(new THREE.Vector3()).normalize(),
          selectedShape.position
        );

        const intersection = new THREE.Vector3();
        raycaster.ray.intersectPlane(dragPlane, intersection);
        dragOffset.subVectors(selectedShape.position, intersection);

        // Change cursor to indicate dragging
        mount.style.cursor = "grabbing";
      }
    };

    // Mouse move event - update shape position while dragging
    const onMouseMove = (event) => {
      if (!selectedShape) return;

      getMousePosition(event);
      raycaster.setFromCamera(mouse, camera);

      const intersection = new THREE.Vector3();
      if (raycaster.ray.intersectPlane(dragPlane, intersection)) {
        selectedShape.position.copy(intersection.add(dragOffset));

        // Constrain movement to container bounds (approximate)
        selectedShape.position.x = Math.max(
          -3.5,
          Math.min(3.5, selectedShape.position.x)
        );
        selectedShape.position.y = Math.max(
          -2,
          Math.min(2, selectedShape.position.y)
        );
      }
    };

    // Mouse up event - stop dragging
    const onMouseUp = () => {
      if (selectedShape) {
        selectedShape = null;
        setIsDragging(false);
        setDraggedShape(null);
        mount.style.cursor = "default";
      }
    };

    // Mouse hover effects - change cursor when hovering over shapes
    const onMouseHover = (event) => {
      if (selectedShape) return; // Don't change cursor while dragging

      getMousePosition(event);
      raycaster.setFromCamera(mouse, camera);

      const intersects = raycaster.intersectObjects(shapes);
      mount.style.cursor = intersects.length > 0 ? "grab" : "default";
    };

    // Add mouse event listeners
    mount.addEventListener("mousedown", onMouseDown);
    mount.addEventListener("mousemove", onMouseMove);
    mount.addEventListener("mouseup", onMouseUp);
    mount.addEventListener("mousemove", onMouseHover);

    // Position the camera further back to see all shapes
    camera.position.z = 5;

    // Animation loop - this runs ~60 times per second
    const animate = () => {
      requestAnimationFrame(animate);

      // Only rotate shapes if they're not being dragged (much slower rotation)
      if (selectedShape !== cube) {
        cube.rotation.x += 0.001;
        cube.rotation.y += 0.002;
      }

      if (selectedShape !== pyramid) {
        pyramid.rotation.x += 0.0015;
        pyramid.rotation.z += 0.0025;
      }

      if (selectedShape !== hexagon) {
        hexagon.rotation.y += 0.003;
        hexagon.rotation.x += 0.0006;
      }

      if (selectedShape !== octahedron) {
        octahedron.rotation.x += 0.002;
        octahedron.rotation.y += 0.0015;
        octahedron.rotation.z += 0.001;
      }

      // Render the scene from the camera's perspective
      renderer.render(scene, camera);
    };

    // Start the animation
    animate();

    // Handle window resize
    const handleResize = () => {
      const width = mount.clientWidth;
      const height = mount.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function - runs when component unmounts
    return () => {
      // Remove event listeners
      window.removeEventListener("resize", handleResize);
      mount.removeEventListener("mousedown", onMouseDown);
      mount.removeEventListener("mousemove", onMouseMove);
      mount.removeEventListener("mouseup", onMouseUp);

      mount.removeChild(renderer.domElement);

      // Dispose of all geometries and materials
      cubeGeometry.dispose();
      pyramidGeometry.dispose();
      hexGeometry.dispose();
      octahedronGeometry.dispose();

      // Dispose of tube materials and geometries from the thick edges
      const disposeGroup = (group) => {
        group.children.forEach((child) => {
          if (child.geometry) child.geometry.dispose();
          if (child.material) child.material.dispose();
        });
      };

      disposeGroup(cube);
      disposeGroup(pyramid);
      disposeGroup(hexagon);
      disposeGroup(octahedron);

      renderer.dispose();
    };
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "transparent", // Transparent background
        color: "white",
      }}
    >
      <Typography
        level="h1"
        fontFamily="monospace"
        sx={{
          fontSize: 48,
          mb: 2,
          color: "#4ecdc4", // Bright cyan color
        }}
      >
        3D Wireframe Shapes
      </Typography>

      {/* Container for the 3D scene */}
      <Box
        ref={mountRef}
        sx={{
          flexGrow: 1, // Take up all available space
          minHeight: "400px", // Minimum height for usability
          width: "100%", // Full width
          border: "2px solid #4ecdc4",
          borderRadius: "8px",
          mb: 3,
          // Fallback in case Three.js fails to load
          backgroundColor: "transparent",
        }}
      />

      <Typography
        level="body-lg"
        sx={{
          maxWidth: "100%", // Full width to match flexible container
          lineHeight: 1.6,
          color: "#b8b8d1", // Light purple-gray
          px: 2, // Add some padding for readability
          pb: 4,
        }}
      >
        These pixelated wireframe shapes rotate with a retro 8/16-bit aesthetic.
        From left to right: Cube (red), Pyramid (cyan), Hexagonal Prism (blue),
        and Octahedron (green).
      </Typography>

      {/* {isDragging && draggedShape && (
        <Typography
          level="body-sm"
          sx={{
            mt: 2,
            color: "#4ecdc4",
            fontWeight: "bold",
          }}
        >
          Dragging shape... Release to drop!
        </Typography>
      )} */}
    </Box>
  );
};

export default ShapesPage;

export const Head = () => (
  <>
    <html lang="en" />
    <title>3D Cube Demo</title>
    <meta
      name="description"
      content="Interactive 3D pixelated model demonstration"
    />
  </>
);
