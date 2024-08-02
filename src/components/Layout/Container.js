import React from "react";
import { Box } from "@mui/joy";

export const Container = ({ children }) => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        margin: "0 auto",
        maxWidth: "1050px", // 800 px for main content, 250 for side-toc
        width: "100%",
        position: "relative",
      }}
    >
      {children}
    </Box>
  );
};
