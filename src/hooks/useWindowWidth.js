import { useState, useEffect } from "react";

let defaultWidth;

// If Node has no window object, we check here to see if it exists
if (typeof window !== "undefined") {
  defaultWidth = window.innerWidth;
}

const COMPACT_THRESHOLD = 1200;

export const useWindowWidth = (initialWidth = defaultWidth) => {
  const [width, setWidth] = useState(initialWidth);
  const [isCompact, setIsCompact] = useState(null);

  useEffect(() => {
    const determineCompactness = () => width < COMPACT_THRESHOLD;
    setIsCompact(determineCompactness());
  }, [width]);

  useEffect(() => {
    setWidth(typeof window !== "undefined" ? window.innerWidth : 0);
  }, []);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { width, isCompact };
};
