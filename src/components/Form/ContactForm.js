import React, { useEffect, useState } from "react";
import { Button, Box, Typography, Stack } from "@mui/joy";
import { Send as SendIcon } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { Input } from "./Input";
import { TextArea } from "./TextArea";
import { Window as DiamondIcon } from "@mui/icons-material";

const GOOGLE_APPS_SCRIPT_LINK = "";

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
      // setResponse(res.statusText);
      setResponse(
        "Your message was not submitted, as this is just a demo site!"
      );
    } else {
      setResponse("Your message has been submitted!");
    }

    reset();
  };

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        display: "flex",
        flex: 1,
        pt: 1,
        mt: 1,
        backgroundColor: "#7474740F",
        borderRadius: "12px 12px 0 0",
      }}
    >
      {response !== "" && (
        <Stack direction="row" alignItems="center">
          <DiamondIcon sx={{ transform: "rotate(45deg)" }} />
          <Typography
            sx={{
              my: 1,
              px: 2,
              py: 2,
              fontWeight: 700,
            }}
          >
            {response}
          </Typography>
          <DiamondIcon sx={{ transform: "rotate(45deg)" }} />
        </Stack>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          className="nameEmailGroup"
          gap={4}
          sx={{ flex: 1, display: "flex" }}
        >
          <Input label="Name" required type="text" register={register} />
          <Input label="Email" required type="email" register={register} />
        </Box>

        <Input label="Subject" required type="select" register={register} />

        <TextArea label="Message" required rows={10} register={register} />

        <Box sx={{ pt: 0.5, pb: 2, fontSize: "0.85rem", textAlign: "right" }}>
          <Button
            type="submit"
            startDecorator={<SendIcon />}
            disabled={isSubmitting}
          >
            Send
          </Button>
        </Box>
      </form>
    </Stack>
  );
};
