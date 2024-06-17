import React from "react";
import { toc } from "./newsletters.module.css";
import { createSlug } from "../../util/createSlug";

const TableOfContents = ({ headers }) => {
  return (
    <div className={toc}>
      {headers.map((header) => {
        return (
          <div>
            <a href={`#${createSlug(header)}`}>{header}</a>
          </div>
        );
      })}
    </div>
  );
};

export default TableOfContents;
