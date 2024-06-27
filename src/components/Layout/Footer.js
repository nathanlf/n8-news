import React from "react";
import { Typography, Box } from "@mui/joy";

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        alignContent: "center",
        backgroundColor: "#fafafa",
        width: "100vw",
        py: 6,
      }}
    >
      <Typography level="body-lg" align="center" variant="subtitle1">
        Copyright 2024 RENCI
      </Typography>
    </Box>
  );
};
