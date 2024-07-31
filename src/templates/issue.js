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

export const Head = () => <title>Internal Newsletter Issue</title>;

export default NewsletterIssue;
