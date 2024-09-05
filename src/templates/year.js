import React, { useMemo } from "react";
import { graphql } from "gatsby";
import { Link } from "../components/Link";
import { Typography, Stack, Grid, Card } from "@mui/joy";
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
      <Stack direction="row">
        <Typography level="h2" sx={{ fontSize: 28, mr: 2 }}>
          Year:
        </Typography>
        {MemoizedYearSelector}
      </Stack>
      <Grid container spacing={2} sx={{ flexGrow: 1, py: 4 }}>
        {nodesToRender.map((node) => {
          const { issue, blurb } = node.frontmatter;
          const formattedIssue = issue < 10 ? `0${issue}` : `${issue}`;
          const path = `${formattedIssue}`;
          const date = new Date(year, issue - 1, 1); // Date objects expect months to be zero-indexed

          return (
            <Grid key={node.id} xs={12} lg={6}>
              <Card
                component={Link}
                to={path}
                sx={{
                  boxShadow: "5px 5px 5px #74747425",
                  "&:hover": {
                    textDecoration: "none",
                    backgroundColor: "#74747415",
                    backdropFilter: "blur(4px)",
                    transition: "background-color 250ms backdropFilter 250ms",
                  },
                }}
              >
                <Typography level="h4" color="primary">
                  {date.toLocaleString("en-US", { month: "long" })}
                </Typography>
                <Typography
                  level="body-md"
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: "4",
                    WebkitBoxOrient: "vertical",
                  }}
                  gutterBottom
                >
                  {blurb}
                </Typography>
              </Card>
            </Grid>
          );
        })}
      </Grid>
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

export const Head = () => (
  <>
    <html lang="en" />
    <title>Archive Year</title>;
  </>
);

export default ArchiveYear;
