import React from "react";
import { Link } from "../Link";
import { Stack, Divider, Typography } from "@mui/joy";
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
      sx={{
        px: 1.5,
        py: 1,
        textDecoration: "none",
        "&:hover": {
          textDecoration: "underline",
          textDecorationColor: "#000000",
          backgroundColor: "#ececec",
          borderRadius: 4,
        },
      }}
    >
      <Typography level="h4" startDecorator={<Icon />} sx={{ fontSize: 17 }}>
        {label}
      </Typography>
    </Link>
  );
};

export const Navbar = () => {
  return (
    <Stack
      role="navigation"
      direction="row"
      divider={<Divider orientation="vertical" />}
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
