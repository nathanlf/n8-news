import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Navbar from "./Navbar";
import { container, footer } from "./layout.module.css";

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

  return (
    <div className={container}>
      <Navbar title={data.site.siteMetadata.title} />
      <main>{children}</main>
      <footer className={footer}>
        <p>Copyright 2024 RENCI</p>
      </footer>
    </div>
  );
};

export default Layout;
