import React, { useState } from "react";
import PropTypes from "prop-types";
import { createSlug } from "../../util/createSlug";
import {
  List,
  Stack,
  ListItem,
  Typography,
  ListItemButton,
  IconButton,
  Button,
  Sheet,
} from "@mui/joy";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { BackToTopButton } from "../BackToTopButton";

export const TableOfContents = ({ headers }) => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet
      sx={{
        position: "sticky",
        backgroundColor: "transparent",
        top: "2%",
        height: "100vh",
      }}
    >
      <List size="sm" justifyContent="flex-end">
        <Stack
          direction="row"
          startDecorator={<BackToTopButton />}
          justifyContent="flex-end"
        >
          <Button
            variant="plain"
            size="sm"
            color="primary"
            spacing={4}
            onClick={() => setOpen(!open)}
          >
            {open && (
              <Typography
                level="h5"
                sx={{
                  fontWeight: open ? "bold" : undefined,
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
                      justifyContent: "flex-end",
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
        {open && <BackToTopButton>Back to top</BackToTopButton>}
      </List>
    </Sheet>
  );
};

TableOfContents.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string),
};
