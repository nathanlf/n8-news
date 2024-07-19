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
  Box,
} from "@mui/joy";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { BackToTopButton } from "../BackToTopButton";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import renciLogo from "../../images/renci-logo.png";

const DynamicMiniLogo = ({ visible }) => {
  const dynamicStyles = visible
    ? {
        minHeight: "100px",
        filter: "opactiy(1.0)",
        transition: "min-height 250ms, filter 500ms",
        mb: 2,
      }
    : {
        minHeight: 0,
        filter: "opacity(0)",
        transition: "min-height 250ms 100ms, filter 250ms",
      };

  return (
    <Box
      sx={{
        overflow: "hidden",
        background: `url(${renciLogo})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "100% 50%",
        borderBottom: "1px solid var(--joy-palette-divider)",
        backgroundSize: "60%",
        mr: 0.75,
        ...dynamicStyles,
      }}
    />
  );
};

const DynamicBackToTop = ({ visible, children }) => {
  const dynamicStyles = visible
    ? {
        minHeight: "500px",
        filter: "opactiy(1.0)",
        transition: "min-height 250ms, filter 500ms",
      }
    : {
        minHeight: "400px",
        filter: "opacity(0)",
        transition: "min-height 250ms 100ms, filter 250ms",
      };

  return (
    <Box
      sx={{
        alignSelf: "flex-end",
        ...dynamicStyles,
      }}
    >
      <BackToTopButton>{children}</BackToTopButton>
    </Box>
  );
};

export const TableOfContents = ({ headers }) => {
  const [open, setOpen] = useState(true);
  const [activeSection, setActiveSection] = useState(headers[0]);
  const { scrollPosition } = useScrollPosition();

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

  const showOnScroll = scrollPosition > 120;

  return (
    <Sheet
      sx={{
        position: "sticky",
        backgroundColor: "transparent",
        top: "1rem",
        ".toc-toggler": {
          justifyContent: "flex-end",
        },
        ".section-btn": {
          justifyContent: "flex-end",
        },
      }}
    >
      <DynamicMiniLogo visible={showOnScroll} />
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
                  fontSize: 16,
                  ml: -0.5,
                  mr: 1.5,
                }}
              >
                Table of Contents
              </Typography>
            )}
            <FormatListBulletedIcon sx={{ fontSize: 20, mx: -0.5 }} />
          </Button>
        </Stack>
        <ListItem nested>
          {open && (
            <List sx={{ alignItems: "flex-end", mt: 1 }}>
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
                    sx={{
                      mr: 1,
                      borderRight:
                        slug === activeSection?.slug
                          ? "4px solid var(--joy-palette-primary-main)"
                          : "4px solid #0001",
                      transition: "border-color 250ms",
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
        <DynamicBackToTop visible={open && showOnScroll}>
          Back to top
        </DynamicBackToTop>
      </List>
    </Sheet>
  );
};

TableOfContents.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string),
};
