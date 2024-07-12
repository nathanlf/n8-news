import * as React from "react";
import { Issue } from "../components/Issue/Issue";
import { graphql } from "gatsby";

const IndexPage = ({ data }) => {
  const { maxVolume, maxIssue } = data.allMarkdownRemark;

  return (
    <>
      <Issue vol={maxVolume} iss={maxIssue} />
    </>
  );
};

// todo: query for max issue of the max volume, not max issue of all issues

export const query = graphql`
  query VolumeNums {
    allMarkdownRemark {
      maxVolume: max(field: { frontmatter: { volume: SELECT } })
      maxIssue: max(field: { frontmatter: { issue: SELECT } })
    }
  }
`;

export default IndexPage;
