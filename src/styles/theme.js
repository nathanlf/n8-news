import { extendTheme } from "@mui/joy";

const palette = {
  primary: {
    main: "#02aac6", // renci blue
  },
  secondary: {
    main: "#747474", // gray for folders, clipboard button, etc.
  },
  success: {
    main: "#5ced73",
  },
};

export const theme = extendTheme({
  palette: palette,
  typography: {
    h2: {
      fontSize: "1.75rem",
      fontWeight: 700,
    },
  },
});
