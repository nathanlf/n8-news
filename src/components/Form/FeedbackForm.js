import React, { useEffect, useState } from "react";
import { Button, Box, Typography } from "@mui/joy";
import { Send as SendIcon } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { Input } from "./Input";
import { TextArea } from "./TextArea";

const GOOGLE_APPS_SCRIPT_LINK =
  "https://script.google.com/macros/s/AKfycbxeB6s-NsD6jcs98qAamRziXyMg_Gt7g6uK8cdMqpmlPQZBYXVxWFJnRUkgH25LD_Ex/exec";

export const FeedbackForm = () => {
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
        <Typography
          sx={{
            mt: 1,
            px: 2,
            py: 2,
            borderLeft: "3px solid var(--joy-palette-secondary-main)",
            borderRadius: "0 10px 10px 0",
          }}
        >
          {response}
        </Typography>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          className="nameEmailGroup"
          gap={5}
          sx={{ flex: 1, display: "flex" }}
        >
          <Input label="Name" required type="text" register={register} />
          <Input label="Email" required type="email" register={register} />
        </Box>

        <Input label="Options" required type="select" register={register} />

        <TextArea label="Message" required rows={10} register={register} />

        <Box sx={{ pb: 4, fontSize: "0.85rem", textAlign: "right" }}>
          <Button
            type="submit"
            startDecorator={<SendIcon />}
            disabled={isSubmitting}
          >
            Send
          </Button>
        </Box>
      </form>
    </>
  );
};
