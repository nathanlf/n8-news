import React from "react";
import PropTypes from "prop-types";
import { createSlug } from "../../util/createSlug";
import {
  Typography,
  Button,
  Menu,
  MenuButton,
  Dropdown,
  IconButton,
  Stack,
} from "@mui/joy";
import { Menu as MenuIcon, Window as DiamondIcon } from "@mui/icons-material";

export const CompactTableOfContents = ({ headers }) => {
  return (
    <Dropdown>
      <MenuButton
        slots={{ root: IconButton }}
        slotProps={{ root: { color: "neutral" } }}
      >
        <MenuIcon />
      </MenuButton>
      <Menu placement="bottom-end">
        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          gap={0.75}
          sx={{ mx: 1, my: 0.5 }}
        >
          <Typography color="primary" fontSize={14} fontWeight={700}>
            Table of Contents
          </Typography>
          <DiamondIcon
            color="primary"
            sx={{ transform: "rotate(45deg)", fontSize: 16 }}
          />
        </Stack>
        {headers.map((header) => {
          const slug = createSlug(header);
          return (
            <Button
              className="section-btn"
              key={header}
              size="sm"
              variant="plain"
              sx={{
                transition: "background-color 250ms",
                borderRadius: 0,
                justifyContent: "flex-end",
              }}
              onClick={() => {
                // scroll to heading's immediate sibling, since heading is sticky
                const headingSibling = document.querySelector(`#${slug} + *`);
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
            >
              <Typography sx={{ fontWeight: 550, fontSize: 13 }}>
                {header}
              </Typography>
            </Button>
          );
        })}
      </Menu>
    </Dropdown>
  );
};

CompactTableOfContents.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string),
};
