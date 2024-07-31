import * as React from "react";
import { PageTitle } from "../components/Layout/PageTitle";
import { ArchiveFolders } from "../components/ArchiveFolders";

const ArchivePage = () => {
  return (
    <>
      <PageTitle title="Archive" />
      <ArchiveFolders />
    </>
  );
};

export const Head = () => (
  <>
    <html lang="en" />
    <title>Newsletter Archive</title>
  </>
);

export default ArchivePage;
