import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Navbar from "./Navbar";
import PropTypes from "prop-types";
import { container } from "./layout.module.css";
import "/src/styles/global.css";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Box } from "@mui/joy";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  // todo: use mui components in here

  return (
    <>
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <Header title={data.site.siteMetadata.title} />
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        {children}
      </Box>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
