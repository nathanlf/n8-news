import React from "react";
import { graphql } from "gatsby";
import { Newsletter } from "../components/Newsletter";

const NewsletterIssue = ({ data }) => {
  const { volume, issue } = data.markdownRemark.frontmatter;

  return (
    <>
      <Newsletter vol={volume} iss={issue} />
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

export default NewsletterIssue;
