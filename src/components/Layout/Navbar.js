import React from "react";
import { Link } from "../Link";
import { Stack } from "@mui/joy";
import {
  LibraryBooks as ArchiveIcon,
  Article as NewestEditionIcon,
  // Event as InitiativesIcon,
  Chat as ContactIcon,
} from "@mui/icons-material";
import { useLocation } from "@reach/router";

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
    <Link
      to={to}
      color="primary"
      sx={{
        px: 1.5,
        py: 1,
        "&:hover": {
          textDecoration: "none",
          backgroundColor: "var(--joy-palette-primary-100)",
          transition: "background-color 250ms",
          border: "1px",
        },

        ...(isActive
          ? { backgroundColor: "var(--joy-palette-primary-100)" }
          : {}),
      }}
      startDecorator={<Icon />}
    >
      {label}
    </Link>
  );
};

export const Navbar = () => {
  return (
    <Stack
      role="navigation"
      direction="row"
      alignItems="center"
      justifyContent="right"
      sx={{
        fontWeight: 600,
      }}
    >
      {menuItems.map((item) => (
        <NavLink key={item.to} {...item} />
      ))}
    </Stack>
  );
};
