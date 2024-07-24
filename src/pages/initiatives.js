import * as React from "react";
import { PageTitle } from "../components/Layout/PageTitle";
import { Typography } from "@mui/joy";
import { FeedbackForm } from "../components/Form"

const InitiativesPage = () => {
  return (
    <>
      <PageTitle title="Initiatives" />
      <Typography level="body-lg">
        How to get involved / ongoing initiatives / dynamic info live here...
      </Typography>
      {/* For Testing Purpose Only, Eventually create a Feedback Form page to import this form into */}
      <FeedbackForm />
    </>
  );
};

export const Head = () => (
  <>
    <title>Initiatives</title>
  </>
);

export default InitiativesPage;
