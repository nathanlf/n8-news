import * as React from "react";
import { Box, Typography } from "@mui/joy";
import desert from "../images/404-desert.png";

const NotFoundPage = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${desert})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight: "600px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography level="h1" fontFamily="monospace" sx={{ fontSize: 48 }}>
        404
      </Typography>
      <Typography level="h3">Page Not Found</Typography>
      <Typography level="p" sx={{ my: 2 }}>
        If you ended up here because of a typo, carry on! Otherwise, feel free
        to contact us regarding any bugs or issues.
      </Typography>
    </Box>
  );
};

export default NotFoundPage;

export const Head = () => (
  <>
    <html lang="en" />
    <title>Not found</title>
  </>
);
