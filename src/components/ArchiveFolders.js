import React from "react";
import { Link } from "../components/Link";
import { Grid, Stack } from "@mui/joy";
import FolderIcon from "@mui/icons-material/Folder";
import { useVolumes } from "../hooks";

export const ArchiveFolders = () => {
  const volumes = useVolumes();

  return (
    <>
      <Grid
        container
        textAlign="center"
        alignItems="center"
        sx={{
          py: 0.5,
          px: 0.5,
        }}
      >
        {volumes.map((volumeNum) => {
          const year = 2020 + volumeNum;
          const to = `/archive/${year}`;
          return (
            <Grid
              xs={12}
              sm={6}
              md={4}
              lg={3}
              columnSpacing={4}
              key={to}
              id={volumeNum}
              sx={{
                paddingBottom: 3,
              }}
            >
              <Stack
                component={Link}
                to={to}
                sx={{
                  fontWeight: 550,
                  pb: 3,
                  borderRadius: 8,
                  color: "var(--joy-palette-primary-700)",
                  "&:hover": {
                    textDecoration: "none",
                    backgroundColor: "#74747415",
                    transition: "background-color 250ms",
                  },
                }}
                direction="column"
              >
                <FolderIcon color="secondary" sx={{ py: 3, fontSize: 90 }} />
                {year}
              </Stack>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
