import React from "react";
import { graphql } from "gatsby";
import { Issue } from "../components/Issue/Issue";

const NewsletterIssue = ({ data }) => {
  const { volume, issue } = data.markdownRemark.frontmatter;

  return (
    <>
      <Issue vol={volume} iss={issue} />
    </>
  );
};

export const query = graphql`
  query NewsletterIssue($id: String) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        volume
        issue
      }
    }
  }
`;

// get volume and issue from url (or something) and then use it in head title

export const Head = ({ data }) => {
  const { volume, issue } = data.frontmatter;
  return (
    <>
      <html lang="en" />
      <title>
        `Volume ${volume} Issue ${issue}`
      </title>
    </>
  );
};

export default NewsletterIssue;
