import React, { useCallback } from "react";
import { IconButton, Button } from "@mui/joy";
import { KeyboardDoubleArrowUp as BackToTopIcon } from "@mui/icons-material";

export const BackToTopButton = ({ children }) => {
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  if (children) {
    return (
      <Button
        onClick={() => {
          scrollToTop();
        }}
        variant="plain"
        color="primary"
        endDecorator={<BackToTopIcon />}
        sx={{ mt: 2, alignSelf: "flex-end" }}
      >
        {children}
      </Button>
    );
  }

  return (
    <IconButton
      onClick={() => {
        scrollToTop();
      }}
      color="neutral"
    >
      <BackToTopIcon />
    </IconButton>
  );
};
