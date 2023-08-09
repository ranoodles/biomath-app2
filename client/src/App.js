import {
  BrowserRouter,
  Routes,
  Route,
  Router,
  Navigate,
} from "react-router-dom";
import { lazy, Suspense } from "react";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import theme from "./pages/website-constants/Theme.jsx";
import Intro from "./pages/website-constants/intro.jsx";
import Courses from "./pages/Courses.jsx";
import checkAuth from "./pages/authCheck.js";
const MathLearningPath = lazy(() => import("./pages/mathlearningpath.jsx"));
const BioLearningPath = lazy(() => import("./pages/biolearningpath.jsx"));
const Landing = lazy(() => import("./pages/Landing"));
const Signup = lazy(() => import("./pages/Signup"));
const Login = lazy(() => import("./pages/Login"));
const BiotechnologyPage = lazy(() => import("./pages/biotechnology"));
const AppliedMathPage = lazy(() => import("./pages/appliedmath"));

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    const checkLoggedIn = async () => {
      console.log(await checkAuth());
      setLoggedIn(await checkAuth());
    };
    checkLoggedIn();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Suspense fallback={<div className="container">Loading...</div>}>
            <Routes>
              <Route
                key="login"
                path="/login"
                element={!loggedIn ? <Login /> : <Navigate to="/courses" />}
              />
              <Route
                path="/biotechnology/:lessonid"
                element={
                  loggedIn ? <BioLearningPath /> : <Navigate to="/login" />
                }
              />
              <Route
                path="/courses"
                element={loggedIn ? <Courses /> : <Navigate to="/login" />}
              />
              <Route
                path="/appliedmath/:lessonid"
                element={
                  loggedIn ? <MathLearningPath /> : <Navigate to="/login" />
                }
              />
              <Route
                key="landing"
                path="/"
                element={!loggedIn ? <Landing /> : <Navigate to="/courses" />}
              />
              <Route
                key="signup"
                path="/signup"
                element={!loggedIn ? <Signup /> : <Navigate to="/courses" />}
              />

              <Route
                key="biotechnology"
                path="/biotechnology"
                element={
                  loggedIn ? <BiotechnologyPage /> : <Navigate to="/login" />
                }
              />
              <Route
                key="appliedmath"
                path="/appliedmath"
                element={
                  loggedIn ? <AppliedMathPage /> : <Navigate to="/login" />
                }
              />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
