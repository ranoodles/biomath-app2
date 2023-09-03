import React from "react";
import Nav from "./website-constants/NavBar";
import { ThemeProvider } from "@mui/material";
import theme from "./website-constants/Theme.jsx";
import CourseDisplay from "./landingComponents/courseDisplays.jsx";

export default function Courses() {
  return (
    <>
      <ThemeProvider theme={theme} border="none">
        <Nav></Nav>
        <CourseDisplay></CourseDisplay>
      </ThemeProvider>
    </>
  );
}
