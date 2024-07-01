import React from "react";
import { Typography, Box, Grid } from "@mui/joy";
import { Link } from "../Link";

export const Footer = () => {
  return (
    <Box
      component="footer"
      justifyContent="center"
      display="flex"
      sx={{
        flexBasis: "5rem",
        alignContent: "center",
        backgroundColor: "#fafafa33",
        py: 3,
        backdropFilter: "blur(4px)",
        borderTop: "1px solid var(--joy-palette-divider)",
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        spacing={4}
        sx={{
          maxWidth: "800px",
        }}
      >
        <Grid item={true ? 1 : undefined} xs={12} sm={6} md={4}>
          <Typography level="title-lg" align="center">
            RENCI Info
          </Typography>
          <Typography level="body-sm" align="center" gutterBottom>
            RENCI (Renaissance Computing Institute) develops and deploys
            advanced technologies \ to enable research discoveries and practical
            innovations. Lorem ipsum ...
          </Typography>
          <Typography level="body-md" align="center">
            <Link to="https://renci.org/">Learn More</Link>
          </Typography>
        </Grid>
        <Grid item={true ? 1 : undefined} xs={12} sm={6} md={4}>
          <Typography
            level="body-md"
            align="center"
            sx={{
              py: 6,
            }}
          >
            © 2024 RENCI
          </Typography>
        </Grid>
        <Grid item={true ? 1 : undefined} xs={12} sm={6} md={4}>
          <Typography level="title-lg" align="center">
            Get Connected
          </Typography>
          <Typography level="body-md" align="center">
            <Link to="https://renci.org/">Example 1</Link>
          </Typography>
          <Typography level="body-md" align="center">
            <Link to="https://renci.org/">Example 2</Link>
          </Typography>
          <Typography level="body-md" align="center">
            <Link to="https://renci.org/">Example 3</Link>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
