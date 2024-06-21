import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Box, Typography } from "@mui/joy";

export const Header = ({ title }) => {
  return (
    <Box
      justifyContent="space-between"
      component="header"
      display="flex"
      sx={{
        py: 2,
        flexBasis: "5rem",
      }}
    >
      <StaticImage src="../../images/renci-logo.png" alt="RENCI Logo" />
      <Typography
        level="h1"
        sx={{
          mt: 4,
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};
