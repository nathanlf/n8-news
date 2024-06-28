import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Navbar } from "./Navbar";
import PropTypes from "prop-types";
import "/src/styles/global.css";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Box } from "@mui/joy";
import { styled } from "@mui/joy/styles";
import { Container } from "./Container";
import renciLinesSvg from '../../images/renci-lines.svg'

const FancyBackground = styled('div')(() => ({
  background: `linear-gradient(#ffffffee 75%, #ffffff66 100%), url(${ renciLinesSvg })`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '0 0',
  backgroundSize: 'contain',
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
}));


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
    <FancyBackground>
      <Container>
        <Header title={data.site.siteMetadata.title} />
        <Navbar />
        {children}
      </Container>
      <Footer />
    </FancyBackground>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};
