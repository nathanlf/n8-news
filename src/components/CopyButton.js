import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { IconButton, Tooltip } from "@mui/joy";
import {
  ContentCopy as CopyIcon,
  Check as CopiedIcon,
} from "@mui/icons-material";
import { copyToClipboard } from "../util/copyToClipboard";

export const CopyButton = ({
  children,
  copyText = "",
  icon = <CopyIcon />,
}) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) {
      return;
    }
    const noticeTimer = setTimeout(() => {
      setCopied(false);
    }, 2000);
    return () => clearTimeout(noticeTimer);
  }, [copied]);

  const handleClick = () => {
    copyToClipboard(copyText);
    setCopied(true);
  };

  return (
    <Tooltip title={copied ? "Copied!" : "Copy to Clipboard"}>
      <IconButton
        onClick={handleClick}
        variant="plain"
        color={copied ? "success" : "neutral"}
        sx={{ transition: "background-color 250ms" }}
      >
        {copied ? <CopiedIcon /> : icon}
      </IconButton>
    </Tooltip>
  );
};

CopyButton.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.node,
  copyText: PropTypes.string.isRequired,
};
