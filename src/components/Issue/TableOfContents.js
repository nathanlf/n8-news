import React from "react";
import Link from "@mui/joy/Link";
import { toc } from "./newsletters.module.css";
import { createSlug } from "../../util/createSlug";

const TableOfContents = ({ headers }) => {
  return (
    <div className={toc}>
      {headers.map((header) => {
        return (
          <div>
            <Link
              href={`#${createSlug(header)}`}
              variant="soft"
              underline="hover"
              color="neutral"
              level="h4"
            >
              {header}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default TableOfContents;
