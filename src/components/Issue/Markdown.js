import React from "react";
import ReactMarkdown from "react-markdown";
import PropTypes from "prop-types";
import SectionHeader from "./SectionHeader";
import { Typography } from "@mui/joy";
import { Link } from "../Link";

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
        a: ({ href, children }) => <Link to={href}>{children}</Link>,
      }}
    />
  );
};

Markdown.propTypes = {
  src: PropTypes.node.isRequired,
};
