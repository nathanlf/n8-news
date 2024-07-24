import React, { useEffect, useState } from 'react';
import { Button } from "@mui/joy";
import { Close as SendIcon } from '@mui/icons-material';
import { Controller, useFormContext, SubmitHandler, useForm } from 'react-hook-form';
import * as styles from './ContactForm.module.css';
import { Input } from './Input';
import { TextArea } from './TextArea';

const GOOGLE_APPS_SCRIPT_LINK = "URL";

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting }
  } = useForm();
  const [response, setResponse] = useState("")

  useEffect(() => {
    const id = setTimeout(() => setResponse(""), 10_000)
    return () => clearTimeout(id);
  }, [response])

  const onSubmit = async (data) => {
    const form = new FormData();
    Object.entries(data).forEach(([label, response]) => {
      form.append(label, response);
    })

    const res = await fetch(GOOGLE_APPS_SCRIPT_LINK, {
      body: form,
      method: 'post'
    })

    if (res.status !== 200) {
      setResponse(res.statusText)
    } else {
      setResponse("Your message has been submitted!")
    }

    reset();
  }

  return (
    <>
      {
        response !== "" && <div className={styles.responseMessage}>
          {response}
        </div>
      }
      <form
        className={styles.form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={styles.nameEmailGroup}>
          <Input
            label='Name'
            required
            type='text'
            register={register}
          />

          <Input
            label='Email'
            required
            type='email'
            register={register}
          />
        </div>

        <Input
          label='Options'
          required
          type='select'
          register={register}
        />

        <TextArea
          label='Message'
          required
          rows={10}
          register={register}
        />

        <div className={styles.submitButtonWrapper}>
          <p>This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" target="_blank">Privacy Policy</a> and <a href="https://policies.google.com/terms" target="_blank">Terms of Service</a> apply.</p>
          <Button
            type='submit'
            startDecorator={<SendIcon />}
            disabled={isSubmitting}
          >
            Send
          </Button>
        </div>
      </form>
    </>
  )
}