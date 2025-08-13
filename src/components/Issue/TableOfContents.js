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
  Box,
} from "@mui/joy";
import MenuIcon from "@mui/icons-material/Menu";
import { BackToTopButton } from "../BackToTopButton";
import logo from "../../images/n8_logo2.png";
import { useActiveSection } from "./Issue";

const DynamicMiniLogo = ({ visible }) => {
  const dynamicStyles = visible
    ? {
        minHeight: "100px",
        filter: "opacity(1.0)",
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
        background: `url(${logo})`,
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
        filter: "opacity(1.0)",
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

const handleMenuItemClick = (slug = "") => {
  const headingSibling = document.querySelector(`#${slug} + *`);
  const scrollTop =
    headingSibling.getBoundingClientRect().top + window.scrollY - 70;
  window.scrollTo({
    top: scrollTop,
    behavior: "smooth",
  });
};

export const TableOfContents = ({ headers }) => {
  const [open, setOpen] = useState(true);
  const { activeSection, showOnScroll } = useActiveSection();

  // units are in ms, as seen in the reducer below
  const cascadeDuration = "250";
  const cascadeDelay = "25";
  const cascadeAnimation = {
    "@keyframes slide-in": {
      from: {
        filter: "opacity(0.0)",
        transform: "translateX(40px)",
      },
      to: {
        filter: "opacity(1.0)",
        transform: "translateX(0px)",
      },
    },
    ".section-btn": {
      filter: "opacity(0.0)",
    },
  };

  const cascadeStyles = [...Array(headers.length).keys()].reduce((acc, i) => {
    acc[`.section-btn:nth-of-type(${i + 1})`] = {
      animation: `slide-in ${cascadeDuration}ms ${cascadeDelay * i}ms ease`,
      animationFillMode: "forwards",
    };

    return acc;
  }, {});

  return (
    <Sheet
      sx={{
        backgroundColor: "transparent",
        mr: "1.5rem",
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
            sx={{
              transition: "background-color 250ms",
            }}
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
            <MenuIcon sx={{ fontSize: 24, mx: -0.5 }} />
          </Button>
        </Stack>
        <ListItem nested>
          {open && (
            <List
              sx={{
                alignItems: "flex-end",
                mt: 1,
                ...cascadeAnimation,
                ...cascadeStyles,
              }}
            >
              {headers.map((header) => {
                const slug = createSlug(header);
                return (
                  <ListItemButton
                    className="section-btn"
                    key={slug}
                    size="sm"
                    variant="plain"
                    onClick={() => handleMenuItemClick(slug)}
                    sx={{
                      mr: 1,
                      borderRight:
                        slug === activeSection?.slug
                          ? "4px solid var(--joy-palette-primary-main)"
                          : "4px solid #0001",
                      transition: "border-color 250ms, background-color 250ms",
                    }}
                  >
                    <Typography
                      color={
                        slug === activeSection?.slug ? "primary" : "secondary"
                      }
                      sx={{
                        fontWeight: 550,
                        fontSize: 13,
                        transition: "color 250ms",
                      }}
                    >
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
