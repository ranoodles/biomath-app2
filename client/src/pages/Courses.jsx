import React, { useEffect } from "react";
import Nav from "./website-constants/NavBarLoggedIn";
import { ThemeProvider } from "@mui/material";
import theme from "./website-constants/Theme.jsx";
import CourseDisplay from "./landingComponents/courseDisplays.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Courses() {
  // const navigate = useNavigate();
  // useEffect(() => {
  //   const fetchLoginStatus = async () => {
  //     try {
  //       const res = await axios.get("http://localhost:8001/fetchCurrentUser", { withCredentials: true, includes: true });
  //       console.log(res.data)
  //     } catch (err) {
  //       console.log("za", err);
  //     }
  //   };
  //   fetchLoginStatus();
  // }, []);
  return (
    <>
      <ThemeProvider theme={theme} border="none">
        <Nav></Nav>
        <CourseDisplay></CourseDisplay>
      </ThemeProvider>
    </>
  );
}
