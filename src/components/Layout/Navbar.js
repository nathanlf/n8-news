import React from "react";
import { Link } from "gatsby";
import Stack from "@mui/joy/Stack";
import Divider from "@mui/material/Divider";
import { navLinks } from "./layout.module.css";

const Navbar = () => {
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
        backgroundColor: "#fafafa",
        py: 2,
      }}
    >
      <Link to="/" className={navLinks}>
        Home
      </Link>
      <Link to="/archive/2024-05/4.5" className={navLinks}>
        Newest Edition
      </Link>
      <Link to="/archive" className={navLinks}>
        Archive
      </Link>
      <Link to="/about" className={navLinks}>
        About
      </Link>
      <Link to="/settings" className={navLinks}>
        Settings
      </Link>
    </Stack>
  );
};

export default Navbar;
