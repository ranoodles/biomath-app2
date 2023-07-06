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
import ImgText from "./pages/website-constants/ImageText"

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
            <Route path="/imgtext" element={<ImgText title="Subheading" img="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" text="Velit enim occaecat exercitation Lorem Lorem aliqua reprehenderit magna duis eiusmod nisi. Lorem voluptate duis occaecat pariatur fugiat excepteur minim. Elit Lorem dolor voluptate eu veniam mollit aliquip." />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
