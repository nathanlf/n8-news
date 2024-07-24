import React from 'react';
import { toKebabCase } from "../../util/toKebabCase";
import * as styles from "./ContactForm.module.css";
import { Path, UseFormRegister, Validate } from "react-hook-form";
import { IForm } from "./ContactForm";

export const TextArea = ({
  label,
  register,
  required,
  validate,
  rows,
}) => {
  return (
    <div className={styles.inputGroup}>
      <label htmlFor={toKebabCase(label)}>{label}</label>
      <textarea
        {...register(label, { validate, required })}
        name={label}
        id={toKebabCase(label)}
        rows={rows}
        required={required}
      ></textarea>
    </div>
  );
};
