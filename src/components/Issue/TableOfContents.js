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
  Sheet,
} from "@mui/joy";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

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
      <List size="sm">
        <ListItem
          nested
          sx={{
            my: 1,
          }}
          startAction={
            <IconButton
              variant="plain"
              size="sm"
              color="neutral"
              onClick={() => setOpen(!open)}
              sx={{}}
            >
              {open && (
                <Stack direction="row" alignItems="space-between">
                  <Typography
                    level="inherit"
                    sx={{
                      fontWeight: open ? "bold" : undefined,
                      color: open ? "#0000000" : "secondary",
                    }}
                  >
                    Table of Contents
                  </Typography>
                </Stack>
              )}
              <FormatListBulletedIcon
                sx={{ color: open ? "#000000" : "secondary" }}
              />
            </IconButton>
          }
        >
          {open && (
            <List sx={{ paddingTop: "32px" }}>
              {headers.map((header) => {
                const slug = createSlug(header);
                return (
                  <ListItem key={slug}>
                    <ListItemButton
                      size="sm"
                      onClick={() => {
                        const element = document.querySelector(`#${slug}`);
                        element?.scrollIntoView({
                          behavior: "smooth",
                        });
                      }}
                    >
                      {header}
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          )}
        </ListItem>
      </List>
    </Sheet>
  );
};

TableOfContents.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string),
};
