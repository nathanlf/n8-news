import React from "react";
import { Sheet } from "@mui/joy";

export const Header = ({ title }) => {
  return (
    <Sheet>
      <img
        src="/renci-logo.png"
        alt="RENCI Logo"
        style={{ maxWidth: "100%" }}
      />
      {title}
    </Sheet>
  );
};
