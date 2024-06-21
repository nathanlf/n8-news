import React from "react";
import Layout from "./src/components/Layout/Layout.js";
import { theme } from "./src/styles/theme";
import { CssVarsProvider } from "@mui/joy";

export const wrapPageElement = ({ element, props }) => {
  return (
    <CssVarsProvider theme={theme}>
      <Layout {...props}>{element}</Layout>
    </CssVarsProvider>
  );
};
