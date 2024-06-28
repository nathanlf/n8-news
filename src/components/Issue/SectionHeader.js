import React from "react";
import PropTypes from "prop-types";
import { Stack, Typography } from "@mui/joy";
import { createSlug } from "../../util/createSlug";
import { CopyButton } from "../CopyButton";
import { BackToTopButton } from "../BackToTopButton";
import { Link as LinkCopyIcon } from "@mui/icons-material";

export const SectionHeader = ({ title }) => {
  const slug = createSlug(title);

  return (
    <Typography
      level="h1"
      id={slug}
      endDecorator={
        <Stack direction="row" gap={ 1 }>
          <CopyButton
            copyText={ 'hello' }
            icon={ <LinkCopyIcon /> }
          />
          <BackToTopButton />
        </Stack>
      }
      justifyContent="space-between"
      sx={{
        my: 5,
        px: 1.5,
        py: 1,
        backgroundColor: "#02aac6",
        fontSize: "large",
        color: "#ffffff",
        borderRadius: 8,
      }}
    >
      {title}
    </Typography>
  );
};

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
