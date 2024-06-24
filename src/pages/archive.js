import * as React from "react";
import { Link, graphql } from "gatsby";
import { PageTitle } from "../components/Layout/PageTitle";

const ArchivePage = ({ data }) => {
  return (
    <>
      <PageTitle title="Archive" />
      {data.allMarkdownRemark.nodes.map((node) => (
        <div key={node.id}>
          <Link
            to={
              `202${node.frontmatter.volume}` +
              "/" +
              `${node.frontmatter.issue}`
            }
          >
            <h2>{`Volume ${node.frontmatter.volume}, Issue ${node.frontmatter.issue}`}</h2>
          </Link>
          <p>{node.frontmatter.blurb}</p>
        </div>
      ))}
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
