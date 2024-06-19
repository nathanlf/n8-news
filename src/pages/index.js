import * as React from "react";
import Typography from "@mui/joy/Typography";
import Seo from "../components/Layout/Seo";
import { Link } from "gatsby";

const IndexPage = () => {
  return (
    <>
      <Typography color="neutral" level="h2" variant="plain">
        Home
      </Typography>
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
