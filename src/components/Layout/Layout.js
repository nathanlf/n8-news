import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Navbar } from "./Navbar";
import PropTypes from "prop-types";
import "/src/styles/global.css";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Box } from "@mui/joy";
import { Container } from "./Container";

export const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query Title {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <Container>
        <Header title={data.site.siteMetadata.title} />
        <Navbar />
        {children}
      </Container>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};
