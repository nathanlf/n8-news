import * as React from "react";
import { useColorScheme } from "@mui/joy/styles";
import { Button } from "@mui/joy";

export function DarkModeToggle() {
  const { mode, setMode } = useColorScheme();

  return (
    <Button
      onClick={() => setMode(mode === "light" ? "dark" : "light")}
      variant="outlined"
    >
      Switch to {mode === "light" ? "Dark" : "Light"}
    </Button>
  );
}
