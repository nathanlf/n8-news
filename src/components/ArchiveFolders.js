import React from "react";
import { graphql, useStaticQuery } from "gatsby";
// import { Link } from "../components/Link";
import { Grid } from "@mui/joy";

export const ArchiveFolders = () => {
  const data = useStaticQuery(graphql`
    query VolumeNums {
      allMarkdownRemark {
        volumes: distinct(field: { frontmatter: { volume: SELECT } })
      }
    }
  `);

  const volumes = data.allMarkdownRemark.volumes.map((str) => parseInt(str));

  return (
    <>
      <Grid container spacing={4} textAlign="center">
        {
          // loop through volumes , create a year variable for each iteration (inside grid panels)
          // and use each one in Links -- to=`/${year}`
        }
        <Grid xs={4} md={4} border={1}>
          test
        </Grid>
        <Grid xs={4} md={4} border={1}>
          test
        </Grid>
        <Grid xs={4} md={4} border={1}>
          test
        </Grid>
        <Grid xs={4} md={4} border={1}>
          test
        </Grid>
      </Grid>
    </>
  );
};
