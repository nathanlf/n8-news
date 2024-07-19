import React, { useCallback } from "react";
import { IconButton, Button, Typography } from "@mui/joy";
import { KeyboardDoubleArrowUp as BackToTopIcon } from "@mui/icons-material";

export const BackToTopButton = ({ children }) => {
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  if (children) {
    return (
      <Button
        onClick={() => {
          scrollToTop();
        }}
        variant="plain"
        color="primary"
        endDecorator={<BackToTopIcon sx={{ fontSize: 24, mx: -1.5 }} />}
        sx={{ mt: 2 }}
      >
        <Typography
          level="h5"
          sx={{
            fontWeight: "bold",
            fontSize: 15,
            mr: 1,
            ml: -0.75,
          }}
        >
          {children}
        </Typography>
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
