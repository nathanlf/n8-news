import React from "react";
import Typography from "@mui/joy/Typography";

export const PageTitle = ({ title }) => {
  return (
    <Typography color="neutral" level="h2" variant="plain">
      {title}
    </Typography>
  );
};
