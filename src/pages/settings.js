import * as React from "react";
import Typography from "@mui/joy/Typography";

const SettingsPage = () => {
  return (
    <>
      <Typography color="neutral" level="h2" variant="plain">
        Settings
      </Typography>
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
