import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { useLocation } from "@reach/router";
import { Stack, Typography, Box } from "@mui/joy";
import { createSlug } from "../../util/createSlug";
import { CopyButton } from "../CopyButton";
import { BackToTopButton } from "../BackToTopButton";
import { Link as LinkCopyIcon } from "@mui/icons-material";

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
        backgroundColor: "#02aac6",
        display: "flex",
        flexGrow: 1,
        position: "sticky",
        top: 0,
        zIndex: 9,
      }}
    >
      <Typography level="h1" sx={{ fontSize: "large", color: "#ffffff" }}>
        {title}
      </Typography>
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
