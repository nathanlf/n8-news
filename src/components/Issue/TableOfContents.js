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
  const [open, setOpen] = useState(false);
  const { isCompact } = useWindowWidth();
  console.log(isCompact);

  return (
    <Sheet
      sx={{
        position: isCompact ? "static" : "sticky",
        backgroundColor: "transparent",
        top: "2%",
        height: isCompact ? "100%" : "100vh",
      }}
    >
      <List size="sm" justifyContent="flex-end">
        <Stack
          direction="row"
          startDecorator={<BackToTopButton />}
          justifyContent={isCompact ? "flex-start" : "flex-end"}
        >
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
                    key={slug}
                    size="sm"
                    variant="plain"
                    sx={{
                      justifyContent: isCompact ? "flex-start" : "flex-end",
                    }}
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
