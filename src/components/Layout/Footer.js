import React from "react";
import { Typography, Box } from "@mui/joy";

export const Footer = () => {
  return (
    <Box
      component="footer"
      square
      sx={{
        backgroundColor: "#ffffff",
        bottom: 0,
      }}
    >
      <Typography
        level="body-lg"
        align="center"
        variant="subtitle1"
        sx={{
          backgroundColor: "#fafafa",
          py: 8,
          my: 12,
        }}
      >
        Copyright 2024 RENCI
      </Typography>
    </Box>
  );
};
