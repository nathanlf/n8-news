import React from "react";
import ReactMarkdown from "react-markdown";
import PropTypes from "prop-types";
import { SectionHeader } from "./Issue/SectionHeader";
import { List, ListItem, Typography } from "@mui/joy";
import { Link } from "./Link";

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
          <Typography component="strong" level="title-lg">
            {children}
          </Typography>
        ),
        li: ({ children }) => <ListItem>{children}</ListItem>,
        ul: ({ children }) => <List marker="disc">{children}</List>,
        a: ({ href, children }) => <Link to={href}>{children}</Link>,
      }}
    />
  );
};

Markdown.propTypes = {
  src: PropTypes.node.isRequired,
};
