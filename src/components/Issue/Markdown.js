import React from "react";
import ReactMarkdown from "react-markdown";
import SectionHeader from "./SectionHeader";

export const Markdown = ({ src }) => {
  return (
    <ReactMarkdown
      children={src}
      components={{
        h1: ({ children }) => <SectionHeader title={children} />,
      }}
    />
  );
};
