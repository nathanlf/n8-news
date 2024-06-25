import React from "react";
import Typography from "@mui/joy/Typography";
import PropTypes from "prop-types";

export const PageTitle = ({ title }) => {
  return (
    <Typography color="neutral" level="h2" variant="plain" gutterBottom>
      {title}
    </Typography>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
