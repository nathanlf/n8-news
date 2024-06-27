import * as React from "react";
import { Newsletter } from "../components/Newsletter";

const IndexPage = () => {
  // as of now, the `vol` and `iss` props for this landing page are set manually

  return (
    <>
      <Newsletter vol={4} iss={5} />
    </>
  );
};

export default IndexPage;
