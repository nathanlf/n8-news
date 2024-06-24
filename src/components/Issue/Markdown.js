import React from "react";
import ReactMarkdown from "react-markdown";
import PropTypes from "prop-types";
import SectionHeader from "./SectionHeader";
import { Typography } from "@mui/joy";

export const Markdown = ({ src }) => {
  return (
    <ReactMarkdown
      children={src}
      components={{
        h1: ({ children }) => <SectionHeader title={children} />,
        p: ({ children }) => (
          <Typography level="body-md">{children}</Typography>
        ),
        strong: ({ children }) => (
          <Typography level="title-lg">{children}</Typography>
        ),
        li: ({ children }) => (
          <li>
            <Typography level="body-md">{children}</Typography>
          </li>
        ),
      }}
    />
  );
};

Markdown.propTypes = {
  src: PropTypes.node.isRequired,
};
