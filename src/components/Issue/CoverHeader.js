import React from "react";
import PropTypes from "prop-types";
import { Stack, Typography, Box, Divider } from "@mui/joy";
import { StaticImage } from "gatsby-plugin-image";

export const CoverHeader = ({ vol, iss, month, year }) => {
  const title = `Internal
    Newsletter`;
  const date = `${month}, ${year}`;
  const edition = `Volume ${vol}
    Issue ${iss}`;

  return (
    <Box
      justifyContent="space-between"
      alignItems="center"
      sx={{
        display: "flex",
        flexGrow: 1,
        backgroundColor: "#02aac6",
      }}
    >
      <Stack direction="row" gap={1}>
        <Box sx={{ pl: 6, pr: 3, pt: 4, pb: 2 }}>
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
          sx={{
            fontSize: "x-large",
            textShadow: "1px 1px 1px #00000066",
            color: "#ffffff",
            py: 4,
            pl: 2,
          }}
        >
          {title}
        </Typography>
      </Stack>
      <Stack direction="column" gap={1}>
        <Typography
          level="h2"
          textAlign="right"
          sx={{
            fontSize: 22,
            textShadow: "1px 1px 1px #00000066",
            color: "#ffffff",
            pr: 6,
          }}
        >
          {date}
        </Typography>
        <Typography
          level="h2"
          style={{ whiteSpace: "pre-line" }}
          textAlign="right"
          sx={{
            fontSize: 18,
            textShadow: "1px 1px 1px #00000066",
            color: "#ffffff",
            pr: 6,
          }}
        >
          {edition}
        </Typography>
      </Stack>
    </Box>
  );
};

CoverHeader.propTypes = {
  vol: PropTypes.number.isRequired,
  iss: PropTypes.number.isRequired,
};
