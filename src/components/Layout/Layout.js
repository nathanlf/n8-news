import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Navbar from "./Navbar";
import { container } from "./layout.module.css";
import { Header } from "./Header";
import { Footer } from "./Footer";

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
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <Header title={data.site.siteMetadata.title} />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
