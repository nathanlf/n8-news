import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "../components/Link";
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
      <Grid
        container
        spacing={4}
        textAlign="center"
        sx={{
          paddingLeft: 2,
          py: 2,
        }}
      >
        {volumes.map((volumeNum) => {
          const year = 2020 + volumeNum;
          return (
            <Grid
              item={true ? 1 : undefined}
              key={year}
              id={volumeNum}
              md={2}
              border={1}
              sx={{
                backgroundColor: "#f2f2f2",
              }}
            >
              <Link to={`/archive/${year}`}>{year} Folder</Link>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
