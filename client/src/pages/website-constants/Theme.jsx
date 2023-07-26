import { createTheme, responsiveFontSizes } from "@mui/material";

var theme = createTheme({
  typography: {
    fontFamily: [
      "-apple-system",
      "Avenir",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  palette: {
    background: {
      default: "#000000",
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
