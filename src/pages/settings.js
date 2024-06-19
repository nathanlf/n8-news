import * as React from "react";
import { PageTitle } from "../components/Layout/PageTitle";

const SettingsPage = () => {
  return (
    <>
      <PageTitle title="Settings" />
      <p>Settings navigation sidebar/tabs</p>
      <p>Account Settings</p>
      <p>...</p>
    </>
  );
};

export const Head = () => (
  <>
    <title>Settings</title>
  </>
);

export default SettingsPage;
