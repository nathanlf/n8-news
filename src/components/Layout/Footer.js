import React from "react";
import { Typography, Box, Grid, Stack } from "@mui/joy";
import { Link } from "../Link";

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
        <Grid item xs={12} sm={12} md={4}>
          <Stack alignItems="center">
            <Typography level="title-lg" align="center">
              RENCI Info
            </Typography>
            <Typography level="body-sm" align="center" gutterBottom>
              RENCI (Renaissance Computing Institute) develops and deploys
              advanced technologies to enable research discoveries and practical
              innovations. Lorem ipsum ...
            </Typography>
            <Link to="https://renci.org/">Learn More</Link>
          </Stack>
        </Grid>
        <Grid
          item
          xs={4}
          sm={6}
          md={4}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography level="body-md" align="center">
            © 2024 RENCI
          </Typography>
        </Grid>
        <Grid
          item
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
