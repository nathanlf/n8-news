import * as React from "react";
import { useColorScheme } from "@mui/joy/styles";
import { Button } from "@mui/joy";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export function DarkModeToggle() {
  const { mode, setMode } = useColorScheme();

  return (
    <Button
      onClick={() => setMode(mode === "light" ? "dark" : "light")}
      sx={{
        color: "var(--joy-palette-primary-700)",
        backgroundColor: "transparent",
        borderRadius: "var(--joy-radius-xs)",
        py: 1.25,
        "&:hover": {
          textDecoration: "none",
          backgroundColor: "var(--joy-palette-primary-50)",
        },
        transition: "background-color 250ms",
      }}
    >
      {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
    </Button>
  );
}
