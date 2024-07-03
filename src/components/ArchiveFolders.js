import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "../components/Link";
import { Grid, Stack } from "@mui/joy";
import FolderIcon from "@mui/icons-material/Folder";

export const ArchiveFolders = () => {
  const data = useStaticQuery(graphql`
    query VolumeNums {
      allMarkdownRemark {
        volumes: distinct(field: { frontmatter: { volume: SELECT } })
      }
    }
  `);

  // distinct query returns strings - convert to integers, then convert to descending order
  const volumes = data.allMarkdownRemark.volumes
    .map((str) => parseInt(str))
    .reverse();

  return (
    <>
      <Grid
        container
        justifyContent="space-between"
        textAlign="center"
        alignItems="center"
      >
        {volumes.map((volumeNum) => {
          const year = 2020 + volumeNum;
          return (
            <Grid
              xs={12}
              sm={6}
              md={4}
              lg={3}
              columnSpacing={4}
              key={year}
              id={volumeNum}
              sx={{
                paddingBottom: 3,
              }}
            >
              <Link
                to={`/archive/${year}`}
                sx={{
                  fontWeight: 550,
                }}
              >
                <Stack direction="column" justifyContent="space-between">
                  <FolderIcon color="secondary" sx={{ py: 3, fontSize: 90 }} />
                  {year}
                </Stack>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
