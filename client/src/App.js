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
        console.log("im in app js", err);
      }
    };
    fetchLoginStatus();
  }, []);

  // if (isLoading) {
  //   return <div>Loading...</div>; // Show loading indicator
  // }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route
                path="/login"
                element={
                  loggedIn === true ? (
                    <Navigate to="/courses" />
                  ) : loggedIn === false ? (
                    <Login />
                  ) : (
                    <Loading />
                  )
                }
              />
              <Route
                path="/biotechnology/:lessonid"
                element={
                  loggedIn === true ? (
                    <BioLearningPath />
                  ) : loggedIn === false ? (
                    <Navigate to="/login" />
                  ) : (
                    <Loading />
                  )
                }
              />
              <Route
                path="/courses"
                element={
                  loggedIn === true ? (
                    <Courses />
                  ) : loggedIn === false ? (
                    <Navigate to="/login" />
                  ) : (
                    <Loading />
                  )
                }
              />
              <Route
                path="/engineering/:lessonid"
                element={
                  loggedIn === true ? (
                    <MathLearningPath />
                  ) : loggedIn === false ? (
                    <Navigate to="/login" />
                  ) : (
                    <Loading />
                  )
                }
              />
              <Route
                path="/"
                element={
                  loggedIn === false ? (
                    <Landing />
                  ) : loggedIn === true ? (
                    <Navigate to="/courses" />
                  ) : (
                    <Loading />
                  )
                }
              />
              <Route
                path="/signup"
                element={
                  loggedIn === false ? (
                    <Signup />
                  ) : loggedIn === true ? (
                    <Navigate to="/courses" />
                  ) : (
                    <Loading />
                  )
                }
              />
              <Route
                path="/biotechnology"
                element={
                  loggedIn === true ? (
                    <BiotechnologyPage />
                  ) : loggedIn === false ? (
                    <Navigate to="/login" />
                  ) : (
                    <Loading />
                  )
                }
              />
              <Route
                path="/engineering"
                element={
                  loggedIn === true ? (
                    <AppliedMathPage />
                  ) : loggedIn === false ? (
                    <Navigate to="/login" />
                  ) : (
                    <Loading />
                  )
                }
              />
              <Route
                path="*"
                element={
                  <NotFound></NotFound>
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
