import React from "react";
import { Box } from "@mui/joy";

export const Container = ({ children }) => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        margin: "0 auto",
        width: "800px",
      }}
    >
      {children}
    </Box>
  );
};
