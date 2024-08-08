import React from "react";
import PropTypes from "prop-types";
import { createSlug } from "../../util/createSlug";
import {
  Typography,
  Button,
  Menu,
  MenuButton,
  Dropdown,
  Stack,
} from "@mui/joy";
import {
  Window as DiamondIcon,
  KeyboardArrowDown as DownArrowIcon,
} from "@mui/icons-material";

export const CompactTableOfContents = ({ headers, title }) => {
  return (
    <Dropdown>
      <MenuButton
        slots={{ root: Button }}
        slotProps={{
          root: { sx: { backgroundColor: "transparent", px: 1, mx: -1 } },
        }}
      >
        <DiamondIcon sx={{ transform: "rotate(45deg)" }} />
        <Typography
          level="h1"
          sx={{ fontSize: "large", color: "#ffffff", ml: 1.5, mr: 0.5 }}
        >
          {title}
        </Typography>
        <DownArrowIcon />
      </MenuButton>
      <Menu placement="bottom-end">
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          gap={0.75}
          sx={{ mx: 1, my: 0.5 }}
        >
          <DiamondIcon
            color="primary"
            sx={{ transform: "rotate(45deg)", fontSize: 16 }}
          />
          <Typography color="primary" fontSize={14} fontWeight={700}>
            Table of Contents
          </Typography>
        </Stack>
        {headers.map((header) => {
          const slug = createSlug(header);
          return (
            <Button
              className="section-btn"
              key={slug}
              size="sm"
              variant="plain"
              sx={{
                transition: "background-color 250ms",
                borderRadius: 0,
                justifyContent: "flex-start",
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
