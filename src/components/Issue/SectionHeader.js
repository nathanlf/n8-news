import React from "react";
import Typography from "@mui/joy/Typography";
import PropTypes from "prop-types";
import { createSlug } from "../../util/createSlug";
import { BackToTopButton } from "../BackToTopButton";

export const SectionHeader = ({ title }) => {
  return (
    <Typography
      level="h1"
      id={createSlug(title)}
      endDecorator={<BackToTopButton />}
      justifyContent="space-between"
      sx={{
        my: 5,
        px: 1.5,
        py: 1,
        backgroundColor: "#02aac6",
        fontSize: "large",
        color: "#ffffff",
        borderRadius: 8,
      }}
    >
      {title}
    </Typography>
  );
};

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
