import React from "react";
import { IconButton } from "@mui/joy";
import { KeyboardArrowUp as BackToTopIcon } from "@mui/icons-material";

export const BackToTopButton = () => {
  return (
    <IconButton
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
      color="primary"
    >
      <BackToTopIcon color="secondary" />
    </IconButton>
  );
};
