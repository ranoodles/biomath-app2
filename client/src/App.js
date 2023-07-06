import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import BiotechnologyPage from "./pages/biotechnology";
import DisplayInfo from "./pages/website-constants/DisplayInfo";
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import theme from "./pages/website-constants/Theme.jsx";
import AppliedMathPage from "./pages/appliedmath";
import McqCard from "./pages/website-constants/mcq.jsx";
import mcqtest from "./pages/mcqtesttemp.jsx";

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
            <Route path="/" element={<Landing />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/biotechnology" element={<BiotechnologyPage />} />
            <Route path="/appliedmath" element={<AppliedMathPage />} />
            <Route path="/mcq" element={<McqCard />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
