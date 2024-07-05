import React from "react";
import PropTypes from "prop-types";
import { toc } from "./issue.module.css";
import { createSlug } from "../../util/createSlug";
import { Button, Sheet, Typography } from "@mui/joy";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

export const TableOfContents = ({ headers }) => {
  return (
    <Sheet
      sx={{
        position: "fixed",
        backgroundColor: "transparent",
        // alignSelf: "start",
        // position: "-webkit-sticky"
      }}
    >
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
              size="sm"
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
    </Sheet>
  );
};

TableOfContents.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string),
};
