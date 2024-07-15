import React, { useState } from "react";
import PropTypes from "prop-types";
import { createSlug } from "../../util/createSlug";
import {
  List,
  Stack,
  ListItem,
  Typography,
  ListItemButton,
  Button,
  Sheet,
} from "@mui/joy";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { BackToTopButton } from "../BackToTopButton";
import { useWindowWidth } from "../../hooks/useWindowWidth";

export const TableOfContents = ({ headers }) => {
  const [open, setOpen] = useState(true);
  const { isCompact } = useWindowWidth();

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
          <Button
            variant="plain"
            size="sm"
            color="primary"
            onClick={() => setOpen(!open)}
          >
            {open && (
              <Typography
                level="h5"
                sx={{
                  fontWeight: "bold",
                  mr: 1,
                }}
              >
                Table of Contents
              </Typography>
            )}
            <FormatListBulletedIcon />
          </Button>
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
                  >
                    {header}
                  </ListItemButton>
                );
              })}
            </List>
          )}
        </ListItem>
        {open && !isCompact && <BackToTopButton>Back to top</BackToTopButton>}
      </List>
    </Sheet>
  );
};

TableOfContents.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string),
};
