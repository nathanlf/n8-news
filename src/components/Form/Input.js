import React from "react";
import { toKebabCase } from "../../util/toKebabCase";
import { Box } from "@mui/joy";

export const Input = ({ label, register, required, type, validate }) => {
  return (
    <Box
      sx={{
        pt: 1,
        borderRadius: "10px",
        width: "100%",
        "& label": {
          textTransform: "uppercase",
        },
        "& input, & select, & textarea": {
          border: "1px solid #ccc",
          my: 1,
          px: 1,
          py: 1,
          borderRadius: "5px",
          width: "100%",
          boxSizing: "border-box",
          fontFamily: "inherit",
          fontSize: 16,
        },
      }}
    >
      <label htmlFor={toKebabCase(label)}>{label}</label>
      {type === "select" ? (
        <select
          {...register(label, { validate, required })}
          name={label}
          id={toKebabCase(label)}
        >
          <option>I'd like to contribute to the newsletter</option>
          <option>I&apos;d like to report an issue</option>
          <option>I have a suggestion</option>
          <option>General inquiry/statement</option>
        </select>
      ) : (
        <input
          {...register(label, { validate, required })}
          type={type}
          name={label}
          id={toKebabCase(label)}
        />
      )}
    </Box>
  );
};
