import React, { HTMLInputTypeAttribute } from 'react';
import { Path, UseFormRegister, Validate } from 'react-hook-form';
import { toKebabCase } from '../../util/toKebabCase';
import * as styles from './ContactForm.module.css';
import { IForm } from './ContactForm';

export const Input = ({
  label,
  register,
  required,
  type,
  validate
}) => {
  return (
    <div className={styles.inputGroup}>
      <label htmlFor={toKebabCase(label)}>{label}</label>
      {type === "select" ? (
        <select
          {...register(label, { validate, required })}
          name={label}
          id={toKebabCase(label)}
        >
          <option>I have a question</option>
          <option>How can I get involved?</option>
          <option>I&apos;d like to report a website issue</option>
          <option>General inquiry</option>
        </select>
      ): (
        <input
          {...register(label, { validate, required })}
          type={type}
          name={label}
          id={toKebabCase(label)}
        />
      )}
    </div>
  )
}
