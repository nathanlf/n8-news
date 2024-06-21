import React from "react";
import Link from "@mui/joy/Link";
import { toc } from "./newsletters.module.css";
import { createSlug } from "../../util/createSlug";
import { Typography } from "@mui/joy";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

const TableOfContents = ({ headers }) => {
  return (
    <div className={toc}>
      <Typography
        level="h3"
        align="left"
        fontWeight="bold"
        gutterBottom
        startDecorator={<FormatListBulletedIcon />}
      >
        Table of Contents
      </Typography>
      {headers.map((header) => {
        return (
          <div>
            <Link
              href={`#${createSlug(header)}`}
              variant="soft"
              underline="hover"
              color="neutral"
              level="h4"
              startDecorator=""
              sx={{
                mx: "auto",
                my: 0.5,
                gap: 1,
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
