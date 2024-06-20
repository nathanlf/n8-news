import * as React from "react";
import { Link, graphql } from "gatsby";
import { PageTitle } from "../components/Layout/PageTitle";

const ArchivePage = ({ data }) => {
  return (
    <>
      <PageTitle title="Archive" />
      {data.allMarkdownRemark.nodes.map((node) => (
        <div key={node.id}>
          <Link to={node.frontmatter.date + "/" + node.frontmatter.edition}>
            <h2>{node.frontmatter.title}</h2>
          </Link>
          <h3>Posted: {node.frontmatter.date}</h3>
          <p>{node.frontmatter.blurb}</p>
        </div>
      ))}
    </>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date
          title
          edition
          blurb
        }
        id
      }
    }
  }
`;

export default ArchivePage;
