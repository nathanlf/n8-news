import React from "react";
import { Link } from "../Link";
import Stack from "@mui/joy/Stack";
import Divider from "@mui/material/Divider";
import InfoIcon from "@mui/icons-material/Info";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import { Typography } from "@mui/joy";

export const Navbar = () => {
  return (
    <Stack
      role="navigation"
      direction="row"
      divider={<Divider orientation="vertical" flexItem size={10} />}
      alignItems="center"
      justifyContent="right"
      spacing={2}
      sx={{
        my: 2,
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
      <Link to="/archive" className="nav-link">
        <Typography level="h4" startDecorator={<LibraryBooksIcon />}>
          Archive
        </Typography>
      </Link>
      <Link to="/about" className="nav-link">
        <Typography level="h4" startDecorator={<InfoIcon />}>
          About
        </Typography>
      </Link>
    </Stack>
  );
};
