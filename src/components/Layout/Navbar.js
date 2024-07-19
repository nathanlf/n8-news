import React from "react";
import { Link } from "../Link";
import {
  Stack,
  Divider,
  Typography,
} from "@mui/joy";
import {
  Info as AboutIcon,
  LibraryBooks as ArchiveIcon,
  Article as NewestEditionIcon,
  Event as InitiativesIcon,
} from "@mui/icons-material";

const menuItems = [
  {
    to: "/",
    Icon: NewestEditionIcon,
    label: "Newest Edition",
  },
  {
    to: "/archive",
    Icon: ArchiveIcon,
    label: "Archive",
  },
  {
    to: "/initiatives",
    Icon: InitiativesIcon,
    label: "Initiatives",
  },
  {
    to: "/about",
    Icon: AboutIcon,
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
