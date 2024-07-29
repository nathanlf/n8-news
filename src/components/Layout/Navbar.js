import React from "react";
import { Link } from "../Link";
import { Stack } from "@mui/joy";
import {
  LibraryBooks as ArchiveIcon,
  Article as NewestEditionIcon,
  // Event as InitiativesIcon,
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
  // hide Initiatives page while under construction
  // {
  //   to: "/initiatives",
  //   Icon: InitiativesIcon,
  //   label: "Initiatives",
  // },
];

const NavLink = ({ Icon, label, to }) => {
  return (
    <Link
      to={to}
      color="primary"
      sx={{
        px: 1.5,
        py: 1,
        textDecoration: "none",
        "&:hover": {
          textDecoration: "underline",
          backgroundColor: "#ececec",
          borderRadius: 4,
        },
        '&[aria-current="page"]': {
          backgroundColor: "var(--joy-palette-primary-100)",
        },
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
        border: "1px",
        borderRadius: "sm",
        fontWeight: 600,
      }}
    >
      {menuItems.map((item) => (
        <NavLink key={item.to} {...item} />
      ))}
    </Stack>
  );
};
