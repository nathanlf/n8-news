import React from "react";
import { Typography, Box } from "@mui/joy";

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        flexBasis: "5rem",
        alignContent: "center",
        backgroundColor: "#fafafa33",
        py: 6,
        backdropFilter: 'blur(4px)',
        borderTop: '1px solid var(--joy-palette-divider)',
      }}
    >
      <Typography level="body-lg" align="center" variant="subtitle1">
        Copyright 2024 RENCI
      </Typography>
    </Box>
  );
};
