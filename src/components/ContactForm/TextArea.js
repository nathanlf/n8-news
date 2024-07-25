import React from "react";
import { toKebabCase } from "../../util/toKebabCase";
import { Box } from "@mui/joy";

export const TextArea = ({ label, register, required, validate, rows }) => {
  return (
    <Box
      sx={{
        "& label": {
          textTransform: "uppercase",
        },
        "& textarea": {
          border: "1px solid #ccc",
          my: 1,
          px: 1,
          py: 1,
          borderRadius: "5px",
          width: "100%",
          boxSizing: "border-box",
        },
      }}
    >
      <label htmlFor={toKebabCase(label)}>{label}</label>
      <textarea
        {...register(label, { validate, required })}
        name={label}
        id={toKebabCase(label)}
        rows={rows}
        required={required}
      ></textarea>
    </Box>
  );
};
