import * as React from "react";
import { PageTitle } from "../components/Layout/PageTitle";
import { Typography } from "@mui/joy";
import { ContactForm } from "../components/Form/FeedbackForm";

const InitiativesPage = () => {
  return (
    <>
      <PageTitle title="Initiatives" />
      <Typography level="body-lg">
        Ongoing initiatives, service groups, dynamic info, TBD will live here...
      </Typography>
    </>
  );
};

export const Head = () => (
  <>
    <title>Initiatives</title>
  </>
);

export default InitiativesPage;
