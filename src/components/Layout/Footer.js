import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Typography, Box, Grid, Stack, IconButton } from "@mui/joy";
import { Link } from "../Link";
import {
  Info as AboutIcon,
  LinkedIn as LinkedInIcon,
  YouTube as YouTubeIcon,
  Instagram as InstagramIcon,
  GitHub as GitHubIcon,
  Hub as HubIcon,
} from "@mui/icons-material";

const socialLinks = [
  {
    name: "LinkedIn",
    to: "http://linkedin.com/in/nathanflinchum/",
    label: "Navigate to Nathan's LinkedIn page",
    icon: <LinkedInIcon />,
  },
  {
    name: "YouTube",
    to: "https://www.youtube.com/@n8h44n",
    label: "Navigate to Nathan's YouTube Channel",
    icon: <YouTubeIcon />,
  },
  {
    name: "Instagram",
    to: "https://www.instagram.com/n8th44n/",
    label: "Navigate to the Nathan's Instagram page",
    icon: <InstagramIcon />,
  },
  {
    name: "GitHub",
    to: "https://github.com/nathanlf",
    label: "Navigate to Nathan's GitHub page",
    icon: <GitHubIcon />,
  },
];

export const Footer = () => {
  return (
    <Box
      component="footer"
      justifyContent="center"
      display="flex"
      sx={{
        flexBasis: "5rem",
        alignContent: "center",
        backgroundColor: "#fafafa11",
        py: 3,
        backdropFilter: "blur(4px)",
        borderTop: "1px solid var(--joy-palette-divider)",
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        sx={{
          maxWidth: "800px",
        }}
      >
        <Grid xs={12} sm={12} md={4}>
          <Stack alignItems="center" sx={{ py: 1 }}>
            <Stack direction="row" justifyContent="center">
              <AboutIcon
                sx={{ fontSize: 22, mr: 0.5, filter: "opacity(0.9)" }}
              />
              <Typography
                level="title-lg"
                align="center"
                sx={{ fontWeight: 700 }}
                gutterBottom
              >
                About
              </Typography>
            </Stack>
            <Typography level="body-sm" align="center" gutterBottom>
              I, Nathan Flinchum, originally built this web application to serve
              as a new home for a company's internal newsletter. After
              continuing development on my own, this was created to serve as a
              log for life and learning. Keep being you!
            </Typography>
          </Stack>
        </Grid>
        <Grid
          xs={12}
          sm={6}
          md={4}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Stack direction="column" alignItems="center" sx={{ my: 1 }}>
            <Link to="https://soundcloud.com/n8th44n" sx={{}}>
              <StaticImage
                src="../../images/n8.png"
                width={122}
                alt="N8's Logo"
                placeholder="blurred"
              />
            </Link>
            <Typography level="body-md" align="center" sx={{ mt: 2 }}>
              © 2024
            </Typography>
          </Stack>
        </Grid>
        <Grid
          xs={12}
          sm={6}
          md={4}
          gap={2.5}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Stack direction="row" justifyContent="center" sx={{ pt: 1 }}>
            <HubIcon sx={{ fontSize: 22, mr: 0.8 }} />
            <Typography
              level="title-lg"
              align="center"
              sx={{ fontWeight: 700 }}
            >
              Get #Connected
            </Typography>
          </Stack>
          <Stack
            alignItems="center"
            justifyContent="center"
            spacing={2}
            direction="row"
            padding={1.5}
          >
            {socialLinks.map((item) => (
              <IconButton
                component={Link}
                to={item.to}
                key={item.name}
                aria-label={item.label}
                color="primary"
                size="lg"
                sx={{ transition: "background-color 250ms" }}
              >
                {item.icon}
              </IconButton>
            ))}
          </Stack>
          <Link to="mailto:nathan@flinchum.net">Contact (say Hi)</Link>
        </Grid>
      </Grid>
    </Box>
  );
};
