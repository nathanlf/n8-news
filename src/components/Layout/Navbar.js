import React from "react";
import { Link } from "../Link";
import Stack from "@mui/joy/Stack";
import Divider from "@mui/material/Divider";
import InfoIcon from "@mui/icons-material/Info";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import ArticleIcon from "@mui/icons-material/Article";
import EventIcon from "@mui/icons-material/Event";
import { Typography } from "@mui/joy";

export const Navbar = () => {
  return (
    <Stack
      role="navigation"
      direction="row"
      divider={<Divider orientation="vertical" flexItem />}
      alignItems="center"
      justifyContent="right"
      sx={{
        border: "1px",
        borderRadius: "sm",
        fontWeight: 600,
        ".nav-link": {
          px: 1.5,
          py: 1,
          textDecoration: "none",
          "&:hover": {
            textDecoration: "underline",
            textDecorationColor: "#000000",
            backgroundColor: "#ececec",
            borderRadius: 4,
          },
        },
      }}
    >
      <Link to="/" className="nav-link">
        <Typography
          level="h4"
          startDecorator={<ArticleIcon />}
          sx={{ fontSize: 17 }}
        >
          Newest Edition
        </Typography>
      </Link>
      <Link to="/archive" className="nav-link">
        <Typography
          level="h4"
          startDecorator={<LibraryBooksIcon />}
          sx={{ fontSize: 17 }}
        >
          Archive
        </Typography>
      </Link>
      <Link to="/initiatives" className="nav-link">
        <Typography
          level="h4"
          startDecorator={<EventIcon />}
          sx={{ fontSize: 17 }}
        >
          Initiatives
        </Typography>
      </Link>
      <Link to="/about" className="nav-link">
        <Typography
          level="h4"
          startDecorator={<InfoIcon />}
          sx={{ fontSize: 17 }}
        >
          About
        </Typography>
      </Link>
    </Stack>
  );
};
