import * as React from "react";
import { Link } from "gatsby";
import { PageTitle } from "../components/Layout/PageTitle";
import Seo from "../components/Layout/Seo";

const IndexPage = () => {
  return (
    <>
      <PageTitle title="Home" />
      <p>Welcome to the RENCI Internal Newsletter Web Application!</p>
      <div>
        <span>Check out our newest edition here! </span>
        <Link to="/archive/2024-05/4.5">Visit</Link>
      </div>
    </>
  );
};

export const Head = () => <Seo title="Home Page" />;

export default IndexPage;
