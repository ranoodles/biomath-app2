import React, { useState, useEffect, Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./pages/website-constants/Theme.jsx";
import Courses from "./pages/Courses.jsx";
import axios from "axios";
import Loading from "./pages/website-constants/loading.jsx";
import NotFound from "./pages/website-constants/notfoundpage.jsx";
const MathLearningPath = lazy(() => import("./pages/mathlearningpath.jsx"));
const BioLearningPath = lazy(() => import("./pages/biolearningpath.jsx"));
const Landing = lazy(() => import("./pages/Landing"));
const Signup = lazy(() => import("./pages/Signup"));
const Login = lazy(() => import("./pages/Login"));
const BiotechnologyPage = lazy(() => import("./pages/biotechnology"));
const AppliedMathPage = lazy(() => import("./pages/appliedmath"));

function App() {
  const [loggedIn, setLoggedIn] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // document.body.style.overflow = "hidden";
    const fetchLoginStatus = async () => {
      try {
        const res = await axios.get("http://localhost:8001/isLoggedIn", {
          withCredentials: true,
          credentials: "include",
        });
        const user = res.data;
        setLoggedIn(user);
      } catch (err) {
        console.log(err);
      }
    };
    fetchLoginStatus();
  }, []);

  // if (isLoading) {
  //   return <div>Loading...</div>; // Show loading indicator
  // }

  return (
    <ThemeProvider theme={theme} key="app-1">
      <div className="App" key="app-2">
        <BrowserRouter key="app-3">
          <Suspense fallback={<Loading key="app-4" />} key="app-5">
            <Routes key="app-6">
              <Route
                key="app-7"
                path="/login"
                element={
                  loggedIn === true ? (
                    <Navigate to="/courses" key="app-8" />
                  ) : loggedIn === false ? (
                    <Login key="app-9" />
                  ) : (
                    <Loading key="app-10" />
                  )
                }
              />
              <Route
                key="app-11"
                path="/biotechnology/:lessonid"
                element={
                  loggedIn === true ? (
                    <BioLearningPath key="app-12" />
                  ) : loggedIn === false ? (
                    <Navigate to="/login" key="app-13" />
                  ) : (
                    <Loading key="app-14" />
                  )
                }
              />
              <Route
                key="app-15"
                path="/courses"
                element={
                  loggedIn === true ? (
                    <Courses key="app-16" />
                  ) : loggedIn === false ? (
                    <Navigate to="/login" key="app-17" />
                  ) : (
                    <Loading key="app-18" />
                  )
                }
              />
              <Route
                key="app-19"
                path="/engineering/:lessonid"
                element={
                  loggedIn === true ? (
                    <MathLearningPath key="app-20" />
                  ) : loggedIn === false ? (
                    <Navigate to="/login" key="app-21" />
                  ) : (
                    <Loading key="app-22" />
                  )
                }
              />
              <Route
                ey="app-23"
                path="/"
                element={
                  loggedIn === false ? (
                    <Landing key="app-24" />
                  ) : loggedIn === true ? (
                    <Navigate to="/courses" key="app-19" />
                  ) : (
                    <Loading key="app-20" />
                  )
                }
              />
              <Route
                key="app-21"
                path="/signup"
                element={
                  loggedIn === false ? (
                    <Signup key="app-22" />
                  ) : loggedIn === true ? (
                    <Navigate key="app-23" to="/courses" />
                  ) : (
                    <Loading key="app-24" />
                  )
                }
              />
              <Route
                key="app-25"
                path="/biotechnology"
                element={
                  loggedIn === true ? (
                    <BiotechnologyPage key="app-26" />
                  ) : loggedIn === false ? (
                    <Navigate to="/login" key="app-27" />
                  ) : (
                    <Loading key="app-28" />
                  )
                }
              />
              <Route
                key="app-29"
                path="/engineering"
                element={
                  loggedIn === true ? (
                    <AppliedMathPage key="app-30" />
                  ) : loggedIn === false ? (
                    <Navigate to="/login" key="app-31" />
                  ) : (
                    <Loading key="app-32" />
                  )
                }
              />
              <Route key="app-33" path="*" element={<NotFound></NotFound>} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
