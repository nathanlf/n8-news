import React from "react";
import PropTypes from "prop-types";
import { Stack, Typography, Box, Divider } from "@mui/joy";
import { StaticImage } from "gatsby-plugin-image";

export const CoverHeader = ({ vol, iss }) => {
  const title = `Internal
    Newsletter`;
  const edition = `Volume ${vol}
    Issue ${iss}`;

  return (
    <Box
      justifyContent="space-between"
      alignItems="center"
      sx={{
        mb: 2,
        display: "flex",
        flexGrow: 1,
        borderRadius: 8,
        backgroundColor: "#02aac6",
      }}
    >
      <Stack direction="row" gap={1}>
        <Box sx={{ px: 6, pt: 4, pb: 2 }}>
          <StaticImage
            width={110}
            src="../../images/renci-logo-white-simple.png"
            alt="RENCI Logo"
          />
        </Box>
        <Divider orientation="vertical" />
        <Typography
          level="h2"
          style={{ whiteSpace: "pre-line" }}
          sx={{ fontSize: "x-large", color: "#ffffff", py: 4, pl: 4 }}
        >
          {title}
        </Typography>
      </Stack>
      <Typography
        level="h2"
        style={{ whiteSpace: "pre-line" }}
        textAlign="right"
        sx={{ fontSize: "large", color: "#ffffff", pr: 6 }}
      >
        {edition}
      </Typography>
    </Box>
  );
};

CoverHeader.propTypes = {
  vol: PropTypes.number.isRequired,
  iss: PropTypes.number.isRequired,
};
