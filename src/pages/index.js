import * as React from "react";
import Layout from "../components/Layout/Layout";
import Seo from "../components/Layout/Seo";
import { Link } from "gatsby";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Welcome to the RENCI Internal Newsletter Web Application!</p>
      <div>
        <span>Check out our newest edition here! </span>
        <Link to="/archive/2024-05/4.5">Visit</Link>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="Home Page" />;

export default IndexPage;
