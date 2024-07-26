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

export const CompactTableOfContents = ({ headers }) => {
  const [open, setOpen] = useState(true);

  return (
    <Sheet
      sx={{
        position: "static",
        backgroundColor: "transparent",
        pt: 2,
        ".toc-toggler": {
          justifyContent: "flex-start",
        },
        ".section-btn": {
          justifyContent: "flex-start",
        },
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
            <FormatListBulletedIcon sx={{ fontSize: 20, mx: -0.5 }} />
            {open && (
              <Typography
                level="h5"
                sx={{
                  fontWeight: "bold",
                  fontSize: 16,
                  ml: 1.25,
                }}
              >
                Table of Contents
              </Typography>
            )}
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
                      // scroll to heading's immediate sibling, since heading is sticky
                      const headingSibling = document.querySelector(
                        `#${slug} + *`
                      );
                      // calculate where to scroll,
                      // offset of -70 chosen to maintain active section state
                      // & to uncover the start of section
                      const scrollTop =
                        headingSibling.getBoundingClientRect().top +
                        window.scrollY -
                        70;
                      window.scrollTo({
                        top: scrollTop,
                        behavior: "smooth",
                      });
                    }}
                  >
                    <Typography sx={{ fontWeight: 550, fontSize: 13 }}>
                      {header}
                    </Typography>
                  </ListItemButton>
                );
              })}
            </List>
          )}
        </ListItem>
      </List>
    </Sheet>
  );
};

CompactTableOfContents.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string),
};
