import React from "react";
import PropTypes from "prop-types";
import { StaticImage } from "gatsby-plugin-image";
import { Box, Stack, Typography } from "@mui/joy";
import { Link } from "../Link";
import { Navbar } from "./Navbar";

export const Header = ({ title }) => {
  return (
    <Box
      justifyContent="space-between"
      component="header"
      display="flex"
      sx={{
        flexBasis: "5rem",
      }}
    >
      <Link to="/" alt="Newest Edition">
        <StaticImage
          src="../../images/renci-logo-simple.png"
          alt="RENCI Logo"
          width={200}
          placeholder="blurred"
        />
      </Link>
      <Stack direction="column" alignItems="flex-end">
        <Typography
          level="h1"
          sx={{
            mt: 4,
          }}
        >
          {title}
        </Typography>
        <Navbar />
      </Stack>
    </Box>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
