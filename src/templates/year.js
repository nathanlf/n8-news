import React from "react";
import { graphql } from "gatsby";
import { Link } from "../components/Link";
import { Typography } from "@mui/joy";
import { PageTitle } from "../components/Layout/PageTitle";

const ArchiveYear = ({ data }) => {
  const year = `${2020 + data.allMarkdownRemark.nodes[0].frontmatter.volume}`;
  return (
    <>
      <PageTitle title={year} />
      {data.allMarkdownRemark.nodes.map((node) => {
        const { volume, issue, blurb } = node.frontmatter;
        const formattedIssue = issue < 10 ? `0${issue}` : `${issue}`;
        const path = `${formattedIssue}`;
        const date = new Date(`${year}-${issue}-01`);

        return (
          <div key={node.id}>
            <Link to={path}>
              <Typography
                level="h4"
                textColor="var(--joy-palette-primary-main)"
              >
                {date.toLocaleString("en-US", { month: "long" })}
              </Typography>
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
    allMarkdownRemark(
      filter: { frontmatter: { volume: { eq: $vol } } }
      sort: { frontmatter: { issue: DESC } }
    ) {
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
