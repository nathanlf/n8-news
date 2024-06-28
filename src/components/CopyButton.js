import React from "react";
import PropTypes from "prop-types";
import { IconButton } from "@mui/joy";
import { ContentCopy as CopyIcon } from "@mui/icons-material";
import { copyToClipboard } from "../util/copyToClipboard";

export const CopyButton = ({
  children,
  copyText = "hey",
  icon = <CopyIcon />,
}) => {
  return (
    <IconButton
      onClick={() => copyToClipboard(copyText)}
      variant="solid"
      color="primary"
    >
      {icon}
    </IconButton>
  );
};

CopyButton.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.node,
  copyText: PropTypes.string.isRequired,
};
