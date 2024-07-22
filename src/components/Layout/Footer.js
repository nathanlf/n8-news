import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Typography, Box, Grid, Stack } from "@mui/joy";
import { Link } from "../Link";
import InfoIcon from "@mui/icons-material/Info";

export const Footer = () => {
  return (
    <Box
      component="footer"
      justifyContent="center"
      display="flex"
      sx={{
        flexBasis: "5rem",
        alignContent: "center",
        backgroundColor: "#fafafa33",
        py: 3,
        backdropFilter: "blur(4px)",
        borderTop: "1px solid var(--joy-palette-divider)",
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{
          maxWidth: "800px",
        }}
      >
        <Grid xs={12} sm={12} md={4}>
          <Stack alignItems="center">
            <Stack direction="row" justifyContent="center">
              <InfoIcon
                sx={{ fontSize: 22, px: 0.4, mt: 0.1, filter: "opacity(0.8)" }}
              />
              <Typography level="title-lg" align="center" gutterBottom>
                About
              </Typography>
            </Stack>

            <Typography level="body-sm" align="center" gutterBottom>
              This web application was built to serve as a new home for RENCI's
              internal newsletter. Feel free to view past newsletters in the
              archive or check out this month's edition anytime!
            </Typography>
          </Stack>
        </Grid>
        <Grid
          xs={4}
          sm={6}
          md={4}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Stack direction="column" alignItems="center">
            <Link to="https://renci.org/">
              <StaticImage
                src="../../images/renci-logo-gray-simple.png"
                width={80}
                alt="RENCI Simple Gray Logo"
              />
            </Link>
            <Typography level="body-md" align="center" sx={{ mt: 2 }}>
              © 2024
            </Typography>
          </Stack>
        </Grid>
        <Grid
          xs={8}
          sm={6}
          md={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography level="title-lg" align="center">
            Get Connected
          </Typography>
          <Stack alignItems="center">
            <Link to="https://renci.org/">Example 1</Link>
            <Link to="https://renci.org/">Example 2</Link>
            <Link to="https://renci.org/">Example 3</Link>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};
