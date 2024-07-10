import React, { useState } from "react";
import PropTypes from "prop-types";
import { createSlug } from "../../util/createSlug";
import {
  List,
  Stack,
  ListItem,
  Typography,
  ListItemButton,
  IconButton,
  Sheet,
} from "@mui/joy";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { BackToTopButton } from "../BackToTopButton";

export const TableOfContents = ({ headers, compact }) => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet
      sx={{
        position: compact ? "static" : "sticky",
        backgroundColor: "transparent",
        top: "2%",
        height: "100vh",
      }}
    >
      <List size="sm">
        <Stack
          direction="row"
          startDecorator={<BackToTopButton />}
          justifyContent={compact ? "flex-start" : "flex-end"}
        >
          <IconButton
            variant="plain"
            size="sm"
            color="neutral"
            spacing={2}
            onClick={() => setOpen(!open)}
          >
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              sx={{ mx: 1 }}
            >
              {open && (
                <Typography
                  level="h5"
                  sx={{
                    fontWeight: open ? "bold" : undefined,
                    color: open ? "#000000" : "secondary",
                  }}
                >
                  Table of Contents
                </Typography>
              )}
              <FormatListBulletedIcon
                sx={{ color: open ? "#000000" : "secondary" }}
              />
            </Stack>
          </IconButton>
        </Stack>
        <ListItem nested>
          {open && (
            <List sx={{ alignItems: "flex-end" }}>
              {headers.map((header) => {
                const slug = createSlug(header);
                return (
                  <ListItemButton
                    key={slug}
                    size="sm"
                    variant="plain"
                    sx={{
                      justifyContent: "flex-end",
                    }}
                    onClick={() => {
                      const element = document.querySelector(`#${slug}`);
                      element?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                  >
                    {header}
                  </ListItemButton>
                );
              })}
            </List>
          )}
        </ListItem>
        {open && (
          <Stack direction="row" justifyContent="flex-end" sx={{ mx: 1 }}>
            <BackToTopButton>
              <Typography level="title-sm" sx={{ px: 0.25 }}>
                Back to top
              </Typography>
            </BackToTopButton>
          </Stack>
        )}
      </List>
    </Sheet>
  );
};

TableOfContents.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string),
  compact: PropTypes.bool,
};
