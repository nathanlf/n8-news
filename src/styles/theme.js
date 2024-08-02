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
  colorSchemes: {
    light: {
      palette: {
        primary: {
          50: "#EBFCFF",
          100: "#DFFAFF",
          200: "#5ce7ff",
          300: "#0adaff",
          400: "#02bdde",
          500: "#02788D",
          600: "#0891b2",
          700: "#0e7490",
          800: "#155e75",
          900: "#164e63",
          plainColor: "var(--joy-palette-primary-500, #02aac6)",
          plainHoverBg: "var(--joy-palette-primary-50, #DFFAFF)",
        },
        secondary: {
          500: "#747474",
        },
      },
    },
  },
});
