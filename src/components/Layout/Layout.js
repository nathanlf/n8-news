import * as React from "react";
import PropTypes from "prop-types";
import "/src/styles/global.css";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { styled } from "@mui/joy/styles";
import { Container } from "./Container";
import renciLinesSvg from "../../images/renci-lines-sideways.svg";
import { Divider } from "@mui/joy";

const FancyBackground = styled("div")(() => ({
  background: `linear-gradient(#ffffffee 75%, #ffffff66 100%), url(${renciLinesSvg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "0 0",
  backgroundSize: "contain",
  backgroundAttachment: "fixed",
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
}));

export const Layout = ({ children }) => {
  return (
    <FancyBackground>
      <Container>
        <Header title="Internal Newsletter" />
        <Divider
          orientation="horizontal"
          role="presentation"
          sx={{ marginBottom: 2 }}
        />
        {children}
      </Container>
      <Footer />
    </FancyBackground>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};
