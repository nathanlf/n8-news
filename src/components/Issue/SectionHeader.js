import React from "react";
import Typography from "@mui/joy/Typography";
import { createSlug } from "../../util/createSlug";
import { BackToTopButton } from "../BackToTopButton";

const SectionHeader = ({ title }) => {
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
        backgroundColor: "rgb(29, 167, 205)",
        fontSize: "large",
        color: "#ffffff",
        borderRadius: 8,
      }}
    >
      {title}
    </Typography>
  );
};

export default SectionHeader;
