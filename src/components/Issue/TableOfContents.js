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
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import renciLogo from "../../images/renci-logo.png";

const DynamicMiniLogo = ({ visible }) => {
  const dynamicStyles = visible
    ? {
        minHeight: "100px",
        filter: "opactiy(1.0)",
        transition: "min-height 250ms, filter 500ms",
        mb: 0.5,
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

  const showMiniLogo = scrollPosition > 120;

  return (
    <Sheet
      sx={{
        position: isCompact ? "static" : "sticky",
        backgroundColor: "transparent",
        top: "1rem",
        ...responsiveStyle,
      }}
    >
      {!isCompact && <DynamicMiniLogo visible={showMiniLogo} />}
      <List size="sm">
        <Stack className="toc-toggler" direction="row">
          <Button
            variant="plain"
            size="sm"
            color="primary"
            onClick={() => setOpen(!open)}
          >
            {isCompact && (
              <FormatListBulletedIcon sx={{ fontSize: 20, mx: -0.5 }} />
            )}
            {open && (
              <Typography
                level="h5"
                sx={{
                  fontWeight: "bold",
                  fontSize: 16,
                  ml: isCompact ? 1 : -0.5,
                  mr: isCompact ? 0 : 1,
                }}
              >
                Table of Contents
              </Typography>
            )}
            {!isCompact && (
              <FormatListBulletedIcon sx={{ fontSize: 20, mx: -0.5 }} />
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
                      const element = document.querySelector(`#${slug}`);
                      element?.scrollIntoView({
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
        {open && !isCompact && <BackToTopButton>Back to top</BackToTopButton>}
      </List>
    </Sheet>
  );
};

TableOfContents.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string),
};
