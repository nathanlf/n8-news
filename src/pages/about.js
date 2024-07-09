import * as React from "react";
import { PageTitle } from "../components/Layout/PageTitle";
import { Typography } from "@mui/joy";

const AboutPage = () => {
  return (
    <>
      <PageTitle title="About" />
      <Typography level="body-lg">
        This web application was built to serve as a new home for RENCI's
        internal newsletter.
      </Typography>
      <Typography level="body-lg">
        Feel free to view past newsletters in the archive, search for keywords,
        or check out this month's edition anytime!
      </Typography>
    </>
  );
};

export const Head = () => (
  <>
    <title>About</title>
  </>
);

export default AboutPage;
