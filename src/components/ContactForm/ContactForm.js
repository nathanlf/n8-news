import React, { useEffect, useState } from "react";
import { Button } from "@mui/joy";
import { Send as SendIcon } from "@mui/icons-material";
import {
  Controller,
  useFormContext,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import * as styles from "./ContactForm.module.css";
import { Input } from "./Input";
import { TextArea } from "./TextArea";

const GOOGLE_APPS_SCRIPT_LINK =
  "https://script.google.com/macros/s/AKfycbxeB6s-NsD6jcs98qAamRziXyMg_Gt7g6uK8cdMqpmlPQZBYXVxWFJnRUkgH25LD_Ex/exec";

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm();
  const [response, setResponse] = useState("");

  useEffect(() => {
    const id = setTimeout(() => setResponse(""), 10_000);
    return () => clearTimeout(id);
  }, [response]);

  const onSubmit = async (data) => {
    const form = new FormData();
    Object.entries(data).forEach(([label, response]) => {
      form.append(label, response);
    });

    const res = await fetch(GOOGLE_APPS_SCRIPT_LINK, {
      body: form,
      method: "post",
    });

    if (res.status !== 200) {
      setResponse(res.statusText);
    } else {
      setResponse("Your message has been submitted!");
    }

    reset();
  };

  return (
    <>
      {response !== "" && (
        <div className={styles.responseMessage}>{response}</div>
      )}
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.nameEmailGroup}>
          <Input label="Name" required type="text" register={register} />

          <Input label="Email" required type="email" register={register} />
        </div>

        <Input label="Options" required type="select" register={register} />

        <TextArea label="Message" required rows={10} register={register} />

        <div className={styles.submitButtonWrapper}>
          <Button
            type="submit"
            startDecorator={<SendIcon />}
            disabled={isSubmitting}
          >
            Send
          </Button>
        </div>
      </form>
    </>
  );
};
