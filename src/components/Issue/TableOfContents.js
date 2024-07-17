import React, { useState, useEffect } from "react";
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
import { useScrollPosition } from "../../hooks/useScrollPosition";

export const TableOfContents = ({ headers }) => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(headers[0]);
  const { scrollPosition } = useScrollPosition();
  const { isCompact } = useWindowWidth();

  // this hook watches the scrollPosition for any changes, then sets the active section accordingly
  useEffect(() => {
    const headingTops = headers.map((header) => {
      const slug = createSlug(header);
      const el = document.querySelector(`#${slug}`);
      const { top } = el.getBoundingClientRect();
      return { slug, top };
    });

    const activeHeading = headingTops
      .reverse()
      .find((header) => header.top === 0);

    if (activeHeading) setActiveSection(activeHeading);
  }, [headers, scrollPosition]);

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
                      const headingSibling = document.querySelector(
                        `#${slug} + *`
                      );
                      const scrollTop =
                        headingSibling.getBoundingClientRect().top +
                        window.scrollY;
                      window.scrollTo({
                        top: scrollTop - 92,
                        behavior: "smooth",
                      });
                    }}
                    sx={{
                      borderRight:
                        slug === activeSection?.slug
                          ? "4px solid var(--joy-palette-primary-main)"
                          : "4px solid #0001",
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
