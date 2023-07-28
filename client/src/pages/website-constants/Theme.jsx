import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
  CssBaseline,
  createGlobalStyle,
} from "@mui/material";

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
    secondary: {
      light: '#ffffff',
      main: '#ffffff',
      dark: '#ffffff',
      contrastText: '#ffffff',
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
