import React from "react";
import PropTypes from "prop-types";
import { StaticImage } from "gatsby-plugin-image";
import { Box, Stack, Typography, Grid } from "@mui/joy";
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
        pl: 1,
      }}
    >
      <Grid container alignItems="flex-end" width="100%">
        <Grid xs={12} sm={4} md={6} sx={{ py: 1 }}>
          <Link to="/" alt="Newest Edition">
            <StaticImage
              src="../../images/renci-logo.png"
              alt="RENCI Logo"
              width={200}
              placeholder="blurred"
              layout="fixed"
            />
          </Link>
        </Grid>
        <Grid xs={12} sm={8} md={6}>
          <Stack
            direction="column"
            alignItems={{ xs: "flex-start", sm: "flex-end" }}
            justifyContent={{ xs: "center", sm: "flex-end" }}
          >
            <Typography
              level="h1"
              sx={{
                textAlign: { xs: "left", sm: "right" },
                mr: 1.5,
              }}
            >
              {title}
            </Typography>
            <Navbar />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
