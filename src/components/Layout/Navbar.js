import React from "react";
import { Link } from "gatsby";
import { Typography } from "@mui/joy";
import Tabs from "@mui/joy/Tabs";
import Tab from "@mui/joy/Tab";
import TabList from "@mui/joy/TabList";

const Navbar = () => {
  return (
    <Tabs
      defaultValue={0}
      tabFlex="auto"
      flex="initial"
      component="nav"
      sx={{
        my: 2,
      }}
    >
      <TabList>
        <Tab>
          <Link to="/">
            <Typography level="h4" variant="soft" align="left">
              Home
            </Typography>
          </Link>
        </Tab>
        <Tab>
          <Link to="/archive/2024-05/4.5">Newest Edition</Link>
        </Tab>
        <Tab>
          <Link to="/archive">Archive</Link>
        </Tab>
        <Tab>
          <Link to="/about">About</Link>
        </Tab>
        <Tab>
          <Link to="/settings">Settings</Link>
        </Tab>
      </TabList>
    </Tabs>
  );
};

export default Navbar;
