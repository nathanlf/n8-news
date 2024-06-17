import * as React from "react";
import Layout from "../components/Layout/Layout";

const SettingsPage = () => {
  return (
    <Layout pageTitle="Settings">
      <p>Settings navigation sidebar/tabs</p>
      <p>Account Settings</p>
      <p>...</p>
    </Layout>
  );
};

export const Head = () => (
  <>
    <title>Settings</title>
  </>
);

export default SettingsPage;
