import * as React from "react";
import { Issue } from "../components/Issue/Issue";

const IndexPage = () => {
  // as of now, the `vol` and `iss` props for this landing page are set manually

  return (
    <>
      <Issue vol={4} iss={5} />
    </>
  );
};

export default IndexPage;
