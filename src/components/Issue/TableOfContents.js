import React from "react";
import Link from "@mui/joy/Link";
import { toc } from "./newsletters.module.css";
import { createSlug } from "../../util/createSlug";

const TableOfContents = ({ headers }) => {
  return (
    <div className={toc}>
      <h2>Table of Contents</h2>
      {headers.map((header) => {
        return (
          <div>
            <Link
              href={`#${createSlug(header)}`}
              variant="soft"
              underline="hover"
              color="neutral"
              level="h4"
              sx={{
                mx: "auto",
                my: 0.7,
                gap: 2,
                borderRadius: "sm",
                boxShadow: "md",
              }}
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
