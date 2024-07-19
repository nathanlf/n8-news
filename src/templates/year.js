import React, { useMemo } from "react";
import { graphql } from "gatsby";
import { Link } from "../components/Link";
import { Typography } from "@mui/joy";
import { YearSelector } from "../components/YearSelector";

const ArchiveYear = ({ data }) => {
  const year = 2020 + data.allMarkdownRemark.nodes[0].frontmatter.volume;
  let nodesToRender = [];

  // remove first node (nodes[0]) from nodes to prevent newest edition rendering on archive page;
  // we can ensure the most recent issue is always at the start of the array, since we query issues in DESC order
  if (year === new Date().getFullYear())
    nodesToRender = data.allMarkdownRemark.nodes.slice(1);
  else nodesToRender = data.allMarkdownRemark.nodes;

  // memoize the YearSelector component to prevent unnecessary re-renders
  const MemoizedYearSelector = useMemo(
    () => <YearSelector defaultYear={year} />,
    [year]
  );

  return (
    <>
      {MemoizedYearSelector}
      {nodesToRender.map((node) => {
        const { issue, blurb } = node.frontmatter;
        const formattedIssue = issue < 10 ? `0${issue}` : `${issue}`;
        const path = `${formattedIssue}`;
        const date = new Date(year, issue - 1, 1); // Date objects expect months to be zero-indexed

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
