import React from "react";
import { graphql } from "gatsby";
import { Link } from "../components/Link";
import { Typography } from "@mui/joy";

const ArchiveYear = ({ data }) => {
  return (
    <>
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
  query IssuesByYear($vol: Int) {
    allMarkdownRemark(filter: { frontmatter: { volume: { eq: $vol } } }) {
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

export default ArchiveYear;
