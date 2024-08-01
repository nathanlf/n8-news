import * as React from "react";
import { PageTitle } from "../components/Layout/PageTitle";
import { ContactForm } from "../components/Form/ContactForm";

const ContactPage = () => {
  return (
    <>
      <PageTitle title="Contact Form" />
      <ContactForm />
    </>
  );
};

export const Head = () => (
  <>
    <html lang="en" />
    <title>Contact</title>
  </>
);

export default ContactPage;
