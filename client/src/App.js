import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import React from "react";
import ThemeProvider from "@mui/material/styles";
import theme from "./pages/website-constants/Theme.jsx";

const MathLearningPath = lazy(() => import("./pages/mathlearningpath.jsx"));
const BioLearningPath = lazy(() => import("./pages/biolearningpath.jsx"));
const Landing = lazy(() => import("./pages/Landing"));
const Signup = lazy(() => import("./pages/Signup"));
const Login = lazy(() => import("./pages/Login"));
const BiotechnologyPage = lazy(() => import("./pages/biotechnology"));
const AppliedMathPage = lazy(() => import("./pages/appliedmath"));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Suspense fallback={<div className="container">Loading...</div>}>
            <Routes>
              <Route
                path="/biotechnology/:lessonid"
                element={<BioLearningPath />}
              />
              <Route
                path="/appliedmath/:lessonid"
                element={<MathLearningPath />}
              />
              <Route key="landing" path="/" element={<Landing />} />
              <Route key="signup" path="/signup" element={<Signup />} />
              <Route key="login" path="/login" element={<Login />} />
              <Route
                key="biotechnology"
                path="/biotechnology"
                element={<BiotechnologyPage />}
              />
              <Route
                key="appliedmath"
                path="/appliedmath"
                element={<AppliedMathPage />}
              />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
