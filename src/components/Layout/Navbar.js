import React from "react";
import { Link } from "../Link";
import Stack from "@mui/joy/Stack";
import Divider from "@mui/material/Divider";

export const Navbar = () => {
  return (
    <Stack
      role="navigation"
      direction="row"
      divider={<Divider orientation="vertical" flexItem size="lg" />}
      alignItems="center"
      justifyContent="center"
      spacing={4}
      sx={{
        my: 2,
        border: "1px",
        borderRadius: "sm",
        boxShadow: "md",
        fontWeight: 600,
        backgroundColor: "#fafafa",
        py: 2,
        ".nav-link": {
          px: 2,
          py: 1,
          textDecoration: "none",
          "&:hover": {
            textDecoration: "underline",
            backgroundColor: "#ececec",
            borderRadius: 4,
          },
        },
      }}
    >
      <Link to="/archive" className="nav-link">
        Archive
      </Link>
      <Link to="/about" className="nav-link">
        About
      </Link>
      <Link to="/initiatives" className="nav-link">
        Initiatives
      </Link>
    </Stack>
  );
};
