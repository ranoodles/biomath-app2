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

export default function Landing() {
  const navigate = useNavigate();

  return (
    <>
      <ThemeProvider theme={theme} border="none">
        <Nav />
        <Hero></Hero>
        <CourseDisplay></CourseDisplay>
        <OurMission></OurMission>
        <JoinNow></JoinNow>
      </ThemeProvider>
    </>
  );
}
