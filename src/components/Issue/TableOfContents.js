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
  const [activeSection, setActiveSection] = useState(null);
  const { scrollPosition } = useScrollPosition();
  const { isCompact } = useWindowWidth();

  // this hook watches the scrollPosition for any changes, then sets the active section accordingly
  useEffect(() => {
    const headingTops = headers.map((header) => {
      const slug = createSlug(header);
      const el = document.querySelector(`#${slug}`);
      const { top, bottom } = el.getBoundingClientRect();
      return { slug, top, bottom };
    });

    // console.table({ scrollPosition });
    // console.table(headingTops);
    // console.log("vh," + window.innerHeight);

    let activeHeading = headingTops.find(
      (header) =>
        header.top > 0 ||
        headingTops[headingTops.indexOf(header) + 1]?.top >
          window.innerHeight + 100
    );

    // console.log(activeHeading?.slug, activeHeading?.top);

    if (activeHeading) setActiveSection(activeHeading);

    // console.log("active: ", activeSection);

    // console.log(nextHeading?.slug, nextHeading?.top);
    // console.log(activeSection);

    // what if the active section is taller than the viewport?
    // - look at nextTop? and see when that gets within a certain distance of our scroll position
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
                // is this section ACTIVE? (id/slug/ref === activeSection)
                // if so, style it as active (change/extend the responsiveStyling's style for :.section-btn)

                const slug = createSlug(header);
                console.log("active section: ", activeSection);
                console.log("current slug: ", slug);
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
                    sx={{
                      borderRight:
                        slug === activeSection
                          ? "4px solid red"
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
