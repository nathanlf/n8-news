import * as React from "react";
import { Link, graphql } from "gatsby";
import { PageTitle } from "../components/Layout/PageTitle";

const ArchivePage = ({ data }) => {
  return (
    <>
      <PageTitle title="Archive" />
      {data.allMarkdownRemark.nodes.map((node) => {
        const { volume, issue, blurb } = node.frontmatter;
        const formattedIssue = issue < 10 ? `0${issue}` : `${issue}`;
        const path = `202${volume}/${formattedIssue}`;

        return (
          <div key={node.id}>
            <Link to={path}>
              <h2>{`Volume ${volume}, Issue ${issue}`}</h2>
            </Link>
            <p>{blurb}</p>
          </div>
        );
      })}
    </>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { issue: DESC } }) {
      nodes {
        frontmatter {
          volume
          issue
          blurb
        }
        id
      }
    }
  }
`;

export default ArchivePage;
