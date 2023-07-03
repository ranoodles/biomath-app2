import {
    createTheme,
    responsiveFontSizes,
    ThemeProvider,
  } from '@mui/material';

var theme = createTheme({
    typography: {
      fontFamily: [
        '-apple-system',
        'Avenir',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
  });
  
theme = responsiveFontSizes(theme);



export default theme;