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
import { useWindowWidth } from "../../hooks/useWindowWidth";

export const TableOfContents = ({ headers }) => {
  const [open, setOpen] = useState(false);
  const { isCompact } = useWindowWidth();
  console.log(isCompact);

  const responsiveStyle = {
    ".MuiList-root": isCompact
      ? {
          height: "100%",
          ".toc-toggler": {
            justifyContent: "flex-start",
          },
          ".section-btn": {
            justifyContent: "flex-start",
          },
        }
      : {
          height: "100vh",
          ".toc-toggler": {
            justifyContent: "flex-end",
          },
          ".section-btn": {
            justifyContent: "flex-end",
          },
        },
  };

  return (
    <Sheet
      sx={{
        position: isCompact ? "static" : "sticky",
        backgroundColor: "transparent",
        top: "2%",
        ...responsiveStyle,
      }}
    >
      <List size="sm">
        <Stack className="toc-toggler" direction="row">
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
                    className="section-btn"
                    key={slug}
                    size="sm"
                    variant="plain"
                    onClick={() => {
                      const element = document.querySelector(`#${slug}`);
                      element?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                    sx={{ ...responsiveStyle }}
                  >
                    {header}
                  </ListItemButton>
                );
              })}
            </List>
          )}
        </ListItem>
        {open && !isCompact && (
          <Stack
            direction="row"
            justifyContent={isCompact ? "flex-start" : "flex-end"}
          >
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
};
