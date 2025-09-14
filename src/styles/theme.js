import { extendTheme } from "@mui/joy";

const palette = {
  primary: {
    main: "#02788D",
  },
  secondary: {
    main: "#747474", // gray for folders, clipboard button, etc.
  },
  success: {
    main: "#5ced73",
  },
};

export const theme = extendTheme({
  palette,
  typography: {
    h2: {
      fontSize: "1.75rem",
      fontWeight: 700,
    },
  },
  colorSchemes: {
    light: {
      palette: {
        background: {
          body: "#ffffff",
          surface: "#f9f9f9",
          popup: "#ffffff",
        },
        text: {
          primary: "#1a1a1a",
          secondary: "#444444",
        },
        primary: {
          50: "#EBFCFF",
          100: "#DFFAFF",
          200: "#5ce7ff",
          300: "#0adaff",
          400: "#02bdde",
          500: "#02aac6",
          600: "#0891b2",
          700: "#02788D",
          800: "#155e75",
          900: "#164e63",
          main: "#02788D",
          plainColor: "var(--joy-palette-primary-700, #02788D)",
          plainHoverBg: "var(--joy-palette-primary-50, #DFFAFF)",
        },
        secondary: {
          500: "#747474",
        },
      },
    },
    dark: {
      palette: {
        background: {
          body: "#121212",
          surface: "#1e1e1e",
          popup: "#2a2a2a",
        },
        text: {
          primary: "#ffffff",
          secondary: "#cccccc",
        },
        primary: {
          50: "#164e63",
          100: "#155e75",
          200: "#0e7490",
          300: "#0891b2",
          400: "#02aac6",
          500: "#0adaff",
          600: "#5ce7ff",
          700: "#DFFAFF",
          800: "#EBFCFF",
          900: "#ffffff",
          main: "#02aac6",
          plainColor: "var(--joy-palette-primary-400, #02aac6)",
          plainHoverBg: "var(--joy-palette-primary-100, #155e75)",
        },
        secondary: {
          500: "#a0a0a0",
        },
      },
    },
  },
});
