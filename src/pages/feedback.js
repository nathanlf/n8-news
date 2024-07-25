import * as React from "react";
import { PageTitle } from "../components/Layout/PageTitle";
import { FeedbackForm } from "../components/Form/FeedbackForm";

const FeedbackPage = () => {
  return (
    <>
      <PageTitle title="Feedback Form" />
      <FeedbackForm />
    </>
  );
};

export const Head = () => (
  <>
    <title>Feedback</title>
  </>
);

export default FeedbackPage;
