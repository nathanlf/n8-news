import * as React from "react";
import { graphql } from "gatsby";
import { Link } from "../components/Link";
import { PageTitle } from "../components/Layout/PageTitle";
import { Typography } from "@mui/joy";

const ArchivePage = ({ data }) => {
  return (
    <>
      <PageTitle title="Archive" />
      {data.allMarkdownRemark.nodes.map((node) => {
        const { volume, issue, blurb } = node.frontmatter;
        const formattedIssue = issue < 10 ? `0${issue}` : `${issue}`;
        const path = `${2020 + volume}/${formattedIssue}`;

        return (
          <div key={node.id}>
            <Link to={path}>
              <Typography
                level="h4"
                textColor="var(--joy-palette-primary-main)"
              >{`Volume ${volume}, Issue ${issue}`}</Typography>
            </Link>
            <Typography level="body-md" gutterBottom>
              {blurb}
            </Typography>
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
