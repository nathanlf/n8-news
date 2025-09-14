import React from "react";
import { Layout } from "./src/components/Layout/Layout";
import { theme } from "./src/styles/theme";
import { CssVarsProvider } from "@mui/joy";

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    <script
      key="set-initial-color-scheme"
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            try {
              var storedMode = localStorage.getItem('mui-mode');
              if (storedMode) {
                document.documentElement.setAttribute('data-mui-color-scheme', storedMode);
              } else {
                var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                document.documentElement.setAttribute(
                  'data-mui-color-scheme',
                  prefersDark ? 'dark' : 'light'
                );
              }
            } catch (e) {}
          })();
        `,
      }}
    />,
  ]);
};

export const wrapPageElement = ({ element, props }) => {
  return (
    <CssVarsProvider theme={theme}>
      <Layout {...props}>{element}</Layout>
    </CssVarsProvider>
  );
};
