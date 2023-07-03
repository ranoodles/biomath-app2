import {
  BrowserRouter, 
  Routes,
  Route
} from "react-router-dom"

import Landing from "./pages/Landing"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import React from "react"
import { createTheme, ThemeProvider} from '@mui/material/styles';
import theme from "./pages/website-constants/Theme.jsx"

// const theme = createTheme({
//   typography: {
//     fontFamily: [
//       '-apple-system',
//       'Avenir',
//       'sans-serif',
//       '"Apple Color Emoji"',
//       '"Segoe UI Emoji"',
//       '"Segoe UI Symbol"',
//     ].join(','),
//   },
// });

// theme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    </ThemeProvider>
  );
}

export default App; 

