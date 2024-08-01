import React from "react";
import { Stack, Typography, Divider } from "@mui/joy";
import { Link } from "../Link";
import {
  AllInclusive as InfinityIcon,
  Window as DiamondIcon,
} from "@mui/icons-material";

export const EndSign = () => {
  return (
    <Stack
      alignItems="center"
      gap={2}
      sx={{ display: "flex", flexGrow: 1, my: 4 }}
    >
      <DiamondIcon sx={{ transform: "rotate(45deg)", mt: 1 }} />
      <Divider orientation="horizontal" sx={{ pt: "1px", my: 2 }} />

      <Typography fontStyle="italic" sx={{ fontWeight: 600 }}>
        Thanks for reading this month's issue of the Internal Newsletter!
      </Typography>

      <InfinityIcon sx={{ fontSize: 24 }} />

      <Link to="/contact" sx={{ fontStyle: "italic", fontWeight: 600 }}>
        Interested in contributing to next month's edition?
      </Link>

      <Divider orientation="horizontal" sx={{ pb: "1px", my: 2 }} />
      <DiamondIcon sx={{ transform: "rotate(45deg)", mb: 1 }} />
    </Stack>
  );
};
