import React from "react";
import { Link } from "../Link";
import Stack from "@mui/joy/Stack";
import Divider from "@mui/material/Divider";
import InfoIcon from "@mui/icons-material/Info";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import ArticleIcon from "@mui/icons-material/Article";
import EventIcon from "@mui/icons-material/Event";
import { Typography } from "@mui/joy";

const menuItems = [
  {
    to: "/",
    Icon: ArticleIcon,
    label: "Newest Edition",
  },
  {
    to: "/archive",
    Icon: LibraryBooksIcon,
    label: "Archive",
  },
  {
    to: "/initiatives",
    Icon: EventIcon,
    label: "Initiatives",
  },
  {
    to: "/about",
    Icon: InfoIcon,
    label: "About",
  },
]

const NavLink = ({ Icon, label, to }) => {
  return (
    <Link to={ to } className="nav-link">
      <Typography
        level="h4"
        startDecorator={<Icon />}
        sx={{ fontSize: 17 }}
      >{ label }</Typography>
    </Link>
  )
}

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
      {menuItems.map(item => <NavLink key={ item.to } { ...item } />)}
    </Stack>
  );
};
