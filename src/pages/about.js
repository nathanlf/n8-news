import * as React from "react";
import { PageTitle } from "../components/Layout/PageTitle";

const AboutPage = () => {
  return (
    <>
      <PageTitle title="About" />
      <p>
        This web application was built to serve as a new home for RENCI's
        internal newsletter.
      </p>
      <p>
        Feel free to view newsletters from the past, search for keywords, or
        check out this month's edition!
      </p>
    </>
  );
};

export const Head = () => (
  <>
    <title>About</title>
  </>
);

export default AboutPage;
