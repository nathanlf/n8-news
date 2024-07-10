import React from "react";
import { IconButton } from "@mui/joy";
import { KeyboardDoubleArrowUp as BackToTopIcon } from "@mui/icons-material";

export const BackToTopButton = ({ children }) => {
  return (
    <IconButton
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
      color="neutral"
    >
      <>
        {children}
        <BackToTopIcon />
      </>
    </IconButton>
  );
};
