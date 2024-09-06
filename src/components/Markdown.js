import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import PropTypes from "prop-types";
import { SectionHeader } from "./Issue/SectionHeader";
import { List, ListItem, Typography, Table } from "@mui/joy";
import { Link } from "./Link";

export const Markdown = ({ src, vol, iss }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      children={src}
      components={{
        h1: ({ children }) => (
          <SectionHeader title={children} vol={vol} iss={iss} />
        ),
        p: ({ children }) => (
          <Typography level="body-md">{children}</Typography>
        ),
        strong: ({ children }) => (
          <Typography component="strong" level="title-md" fontWeight="lg">
            {children}
          </Typography>
        ),
        table: ({ children }) => (
          <Table
            variant="outlined"
            size="md"
            borderAxis="bothBetween"
            sx={{
              my: 2,
              "& thead th": { whiteSpace: "normal", wordWrap: "break-word" },
              "& thead th:nth-of-type(1)": { width: "25%" },
              "& tbody": { fontSize: 16 },
            }}
          >
            {children}
          </Table>
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
