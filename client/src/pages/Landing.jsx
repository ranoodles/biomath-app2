import React from "react";
import Nav from "./website-constants/NavBarLoggedOut";
import { ThemeProvider } from "@mui/material";
import { motion, useScroll } from "framer-motion";
import { useNavigate } from "react-router-dom";
import theme from "./website-constants/Theme.jsx";
import Hero from "./landingComponents/hero.jsx";
import CourseDisplay from "./landingComponents/courseDisplays.jsx";
import OurMission from "./landingComponents/ourMission.jsx";
import JoinNow from "./landingComponents/joinNow.jsx";
import AboutUs from "./landingComponents/aboutus";

export default function Landing() {
  const prevOver = document.body.style.overflow;
  document.body.style.overflow = prevOver;
  // document.body.style.overflow = "none";
  return (
    <>
      <ThemeProvider theme={theme} border="none">
        <Nav />
        <Hero></Hero>
        <CourseDisplay></CourseDisplay>
        <OurMission></OurMission>
        <AboutUs></AboutUs>
        <JoinNow></JoinNow>
      </ThemeProvider>
    </>
  );
}
