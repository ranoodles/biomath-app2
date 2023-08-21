import React, { useState, useEffect, Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./pages/website-constants/Theme.jsx";
import Courses from "./pages/Courses.jsx";
import axios from "axios";
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
      try {
        const res = await axios.get("http://localhost:8800/checkLoggedIn");
        setLoggedIn(res.data);
      } catch (err) {
        console.log(err);
      }
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
                element={
                  loggedIn ? (
                    <Navigate to="/courses" />
                  ) : (
                    <Login setLoggedIn={setLoggedIn} />
                  )
                }
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
