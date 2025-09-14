import React from "react";
import { Link } from "../Link";
import { Stack, Box } from "@mui/joy";
import {
  LibraryBooks as ArchiveIcon,
  Article as NewestEditionIcon,
  // Event as InitiativesIcon,
  Chat as ContactIcon,
} from "@mui/icons-material";
import { useLocation } from "@reach/router";
import { DarkModeToggle } from "./DarkModeToggle";

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
  // hide Initiatives page while under construction
  // {
  //   to: "/initiatives",
  //   Icon: InitiativesIcon,
  //   label: "Initiatives",
  // },
  {
    to: "/contact",
    Icon: ContactIcon,
    label: "Contact",
  },
];

const NavLink = ({ Icon, label, to }) => {
  const location = useLocation();
  let isActive = location.pathname.includes(to);

  // ensures that the "Newest Edition" tab does not always appear active
  if (to === "/") isActive = location.pathname === to;

  return (
    <Box
      component={Link}
      to={to}
      color="var(--joy-palette-primary-700)"
      width={{ xs: "100%", sm: "auto" }}
      sx={{
        px: 1.5,
        py: 1,
        whiteSpace: "nowrap",
        "&:hover": {
          textDecoration: "none",
          backgroundColor: "var(--joy-palette-primary-50)",
        },
        transition: "background-color 250ms",
        ...(isActive
          ? { backgroundColor: "var(--joy-palette-primary-50)" }
          : {}),
      }}
      startDecorator={<Icon />}
    >
      {label}
    </Box>
  );
};

export const Navbar = () => {
  return (
    <Stack
      role="navigation"
      direction={{ xs: "column", sm: "row" }}
      width={{ xs: "100%", sm: "auto" }}
      alignItems="center"
      justifyContent="right"
      sx={{
        fontWeight: 600,
      }}
    >
      {menuItems.map((item) => (
        <NavLink key={item.to} {...item} />
      ))}
      <DarkModeToggle />
    </Stack>
  );
};
