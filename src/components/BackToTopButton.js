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
      variant="solid"
      color="primary"
    >
      <BackToTopIcon variant="soft" />
    </IconButton>
  );
};
