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
import { StaticImage } from "gatsby-plugin-image";

export const TableOfContents = ({ headers }) => {
  const [open, setOpen] = useState(true);
  const { isCompact } = useWindowWidth();
  const { scrollPosition } = useScrollPosition();

  useEffect(() => {
    // update scroll position
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

  const animatedLogoStyle = {
    "@keyframes slide-in": {
      from: {
        transform: "translateY(-4rem)",
      },
      to: {
        transform: "translateY(0px)",
      },
    },
    // "@keyframes slide-out": {
    //   from: {
    //     transform: "translateY(0)",
    //   },
    //   to: {
    //     transform: "translateY(-2rem)",
    //   },
    // },
    animation:
      // !isCompact && scrollPosition > 120 ?
      "slide-in 1s ease",
    // : "slide-out 1st ease",
  };

  return (
    <Sheet
      sx={{
        position: isCompact ? "static" : "sticky",
        backgroundColor: "transparent",
        top: "1rem",
        ...responsiveStyle,
      }}
    >
      {!isCompact && scrollPosition > 120 && (
        <Sheet
          className="mini-logo"
          sx={{
            backgroundColor: "#ffffff",
            my: 2,
            ...animatedLogoStyle,
          }}
        >
          <StaticImage
            width={75}
            src="../../images/renci-logo.png"
            alt="RENCI Logo"
          />
        </Sheet>
      )}

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
