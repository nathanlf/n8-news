import React from "react";
import PropTypes from "prop-types";
import { StaticImage } from "gatsby-plugin-image";
import { Box, Typography } from "@mui/joy";
import { Link } from "../Link";

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
      <Link to="/" alt="Newest Edition">
        <StaticImage src="../../images/renci-logo.png" alt="RENCI Logo" />
      </Link>
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

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
