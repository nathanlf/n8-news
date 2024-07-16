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

  // to get an html element and store it in a variable, element = document.getElementById('yourElementId');
  // then you can define const { height } = element.getBoundingClientRect();
  // with these lines, we can get all the h1 elements and all their heights to be compared to scrollPosition
  //  and their ids to be compared to each header being mapped over in headers in the list

  // this hook watches the scrollPosition for any changes, then sets the active section accordingly
  useEffect(() => {
    // determine which section is active
    //    - if scroll position is above the first section, either change activeSection to it
    //      OR change activeSection to "intro" or "cover" or something, and add a corresponding item in toc
    //      -- maybe do this by including the site title h1 in this with document.querySelectorAll('h1');
    //    - use getBoundingClientRect() on h1 elements to get access to their `height`
    //    - if scrollPosition passes a height threshold, then setActivesection = currentElement's slug/id/ref
    const headingTops = headers.map((header) => {
      const slug = createSlug(header);
      const el = document.querySelector(`#${slug}`);
      const { top, bottom } = el.getBoundingClientRect();
      return { slug, top, bottom };
    });

    console.table({ scrollPosition });
    console.table(headingTops);
    console.log("vh," + window.innerHeight);
    let activeHeading = headingTops.find(
      (header) =>
        header.top > 0 ||
        (header.top < 0 &&
          headingTops[headingTops.indexOf(header) + 1]?.top >
            window.innerHeight)
    );
    // let nextHeading = headingTops.find(
    //   (header) => header.top > activeHeading?.top
    // );
    // let nextHeading = headingTops[headingTops.indexOf(activeHeading) + 1];

    // if (nextHeading.top < )

    // // check if active section is taller than viewport
    // if (nextHeading.top - activeHeading.top > viewportHeight) {
    //   // determine when to switch active section
    //   nextHeading.top < 600 && activeHeading.top
    //     ? setActiveSection(nextHeading.slug)
    //     : setActiveSection(activeHeading.slug);
    // } else {
    //   setActiveSection(activeHeading.slug);
    // }

    console.log(activeHeading?.slug, activeHeading?.top);

    if (activeHeading) setActiveSection(activeHeading);

    console.log("active: ", activeSection);

    // console.log(nextHeading?.slug, nextHeading?.top);
    // console.log(activeSection);

    // what if the active section is taller than the viewport?
    // - look at nextTop? and see when that gets within a certain distance of our scroll position
  }, [scrollPosition]);

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
