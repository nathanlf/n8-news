import React from "react";
import { graphql } from "gatsby";
// import { Link } from "../components/Link";
import { Grid } from "@mui/joy";

export const ArchiveFolders = ({ data }) => {
  // const volumes = data.allMarkdownRemark.volumes;
  // loop through these, create a year variable for each and to use them in Link's to=`/${year}`

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

export const query = graphql`
  query VolumeNums {
    allMarkdownRemark {
      volumes: distinct(field: { frontmatter: { volume: SELECT } })
    }
  }
`;
