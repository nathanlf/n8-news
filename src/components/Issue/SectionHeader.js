import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { useLocation } from "@reach/router";
import { Stack, Typography, Box } from "@mui/joy";
import { createSlug } from "../../util/createSlug";
import { CopyButton } from "../CopyButton";
import { BackToTopButton } from "../BackToTopButton";
import { Link as LinkCopyIcon } from "@mui/icons-material";
import { Window as DiamondIcon } from "@mui/icons-material";

export const SectionHeader = ({ title }) => {
  const slug = createSlug(title);
  const location = useLocation();
  const copyText = useMemo(
    () => `${location.origin}${location.pathname}#${slug}`,
    [location.origin, location.pathname, slug]
  );

  return (
    <Box
      id={slug}
      justifyContent="space-between"
      alignItems="center"
      sx={{
        my: 4,
        px: 1.5,
        py: 1,
        background:
          "linear-gradient(90deg, rgba(2,120,141,1) 22%, rgba(2,162,189,1) 65%, rgba(2,170,192,1) 100%)",
        display: "flex",
        flexGrow: 1,
        position: "sticky",
        top: 0,
        zIndex: 9,
        boxShadow: "2px 4px 3px #74747460",
        ".MuiIconButton-root": {
          color: "var(--joy-palette-secondary-main)",
          transition: "filter 250ms, background-color 250ms",
          filter: "opacity(0.5)",
        },
        "&:hover .MuiIconButton-root": {
          filter: "opacity(1.0)",
        },
      }}
    >
      <Stack direction="row" alignItems="center" gap={1.5}>
        <DiamondIcon
          sx={{ transform: "rotate(45deg)", fontSize: 20, color: "#ffffff" }}
        />
        <Typography level="h1" sx={{ fontSize: "large", color: "#ffffff" }}>
          {title}
        </Typography>
      </Stack>
      <Stack direction="row" gap={1}>
        <CopyButton copyText={copyText} icon={<LinkCopyIcon />} />
        <BackToTopButton />
      </Stack>
    </Box>
  );
};

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
