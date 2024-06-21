import React from "react";
import { Typography, Box } from "@mui/joy";

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#ffffff",
        flexBasis: "5rem",
        alignContent: "center",
        backgroundColor: "#fafafa",
      }}
    >
      <Typography level="body-lg" align="center" variant="subtitle1">
        Copyright 2024 RENCI
      </Typography>
    </Box>
  );
};
