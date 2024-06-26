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

  const volumes = data.allMarkdownRemark.volumes;
  // map queried Strings to Numbers
  volumes.forEach((volumeString) => {
    volumeString = Number(volumeString);
  });

  // loop through these , create a year variable for each iteration and use them in Links -- to=`/${year}`

  return (
    <>
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
        <Grid xs={8} md={8} border={1}>
          {/* <Link to={`/${2020 + Number(volume)}`}></Link> */}
          test
        </Grid>
        <Grid xs={4} md={4} border={1}>
          test
        </Grid>
      </Grid>
    </>
  );
};
