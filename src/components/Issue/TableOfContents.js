import React from "react";
import PropTypes from "prop-types";
import { toc } from "./newsletters.module.css";
import { createSlug } from "../../util/createSlug";
import { Button, Typography } from "@mui/joy";
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
        const slug = createSlug(header);
        return (
          <div key={slug}>
            <Button
              variant="soft"
              color="neutral"
              size="md"
              sx={{
                mx: "auto",
                my: 0.5,
                gap: 1,
                borderRadius: "sm",
                boxShadow: "md",
              }}
              onClick={() => {
                const element = document.querySelector(`#${slug}`);
                element?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              {header}
            </Button>
          </div>
        );
      })}
    </div>
  );
};

TableOfContents.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string),
};

export default TableOfContents;
