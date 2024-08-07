import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Typography, Box, Grid, Stack, IconButton } from "@mui/joy";
import { Link } from "../Link";
import {
  Info as AboutIcon,
  LinkedIn as LinkedInIcon,
  YouTube as YouTubeIcon,
  Facebook as FacebookIcon,
  X as XIcon,
  Hub as HubIcon,
} from "@mui/icons-material";

const socialLinks = [
  {
    name: "LinkedIn",
    to: "https://www.linkedin.com/company/renaissance-computing-institute/",
    label: "Navigate to the RENCI LinkedIn page",
    icon: <LinkedInIcon />,
  },
  {
    name: "YouTube",
    to: "https://www.youtube.com/channel/UCSOkatGqnWS_o1rU1mYgxrA",
    label: "Navigate to the RENCI YouTube Channel",
    icon: <YouTubeIcon />,
  },
  {
    name: "Meta",
    to: "https://www.facebook.com/renci.org",
    label: "Navigate to the RENCI Meta (Facebook) page",
    icon: <FacebookIcon />,
  },
  {
    name: "X",
    to: "https://x.com/renci",
    label: "Navigate to the RENCI X (Twitter) page",
    icon: <XIcon />,
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
              This web application was built to serve as a new home for RENCI's
              internal newsletter. Feel free to view past newsletters in the
              archive or check out this month's edition anytime!
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
          <Stack direction="column" alignItems="center" sx={{ my: 4 }}>
            <Link to="https://renci.org/">
              <StaticImage
                src="../../images/renci-logo-gray-simple.png"
                width={80}
                alt="RENCI Simple Gray Logo"
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
              Get Connected
            </Typography>
          </Stack>
          <Stack
            alignItems="center"
            justifyContent="center"
            spacing={2}
            direction="row"
          >
            {socialLinks.map((item) => (
              <Link to={item.to}>
                <IconButton
                  key={item.name}
                  aria-label={item.label}
                  color="primary"
                  size="lg"
                  sx={{ transition: "background-color 250ms" }}
                >
                  {item.icon}
                </IconButton>
              </Link>
            ))}
          </Stack>
          <Link to="/contact">Contact Us</Link>
        </Grid>
      </Grid>
    </Box>
  );
};
