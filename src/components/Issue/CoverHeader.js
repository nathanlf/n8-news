import React from "react";
import PropTypes from "prop-types";
import { Stack, Typography, Box, Divider } from "@mui/joy";
import { StaticImage } from "gatsby-plugin-image";

export const CoverHeader = ({ vol, iss, month, year }) => {
  const title = `Internal
    Newsletter`;
  const date = `${month} ${year}`;
  const edition = `Volume ${vol}
    Issue ${iss}`;

  return (
    <Box
      justifyContent="space-between"
      alignItems="center"
      sx={{
        display: "flex",
        flexGrow: 1,
        border: "2px solid var(--joy-palette-secondary-main)",
        borderWidth: "0 1px 1px 1px",
        background:
          "linear-gradient(90deg, rgba(2,120,141,1) 33%, rgba(2,162,189,1) 85%, rgba(2,170,192,1) 100%)",
      }}
    >
      <Stack direction="row" gap={1}>
        <Box sx={{ pl: 4, pr: 2, pt: 4, pb: 2 }}>
          <StaticImage
            width={110}
            src="../../images/renci-logo-white-simple.png"
            alt="RENCI Logo"
            placeholder="blurred"
          />
        </Box>
        <Divider orientation="vertical" sx={{ pr: "1px" }} />
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
