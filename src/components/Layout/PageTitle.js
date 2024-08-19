import React from "react";
import Typography from "@mui/joy/Typography";
import PropTypes from "prop-types";

export const PageTitle = ({ title }) => {
  return (
    <Typography level="h2" sx={{ px: 1 }}>
      {title}
    </Typography>
  );
};

PageTitle.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
