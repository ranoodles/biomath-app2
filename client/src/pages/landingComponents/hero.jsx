import React from "react";
import { Box, Button, Typography, Stack, Grid } from "@mui/material";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import fillerImg from "./undraw_lightbulb_moment_re_ulyo.svg";
import atomGif from "./bubble-gum-test-tubes-and-flask.gif";
import nodeGif from "./taxi-molecule-whitemod.gif";
import Image from "mui-image";
import "./bouncingArrow.css";
// import { AnimatedSubTitleText, AnimatedTitleText } from "./animatedtext";

const TitleText = styled(Typography)`
  && {
    display: flex;
    justify-content: flex-start;
    align-items: left;
    font-weight: 700;
    text-align: left;

    final: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 2
      }
    }
  }
`;

const SubtitleText = styled(Typography)`
  && {
    display: flex;
    justify-content: center;
    text-align: left;
    color: #bcccdc;
    margin: 2rem 0rem;
  }
`;
const GetStartedText = styled(Typography)`
  && {
    display: flex;
    justify-content: center;
    color: white;
    padding: 0.2rem;
    font-weight: 500;
    text-transform: none;
  }
`;

const SignupButtonTop = styled(Button)`
  && {
    background-color: transparent;
    border: 2px solid;
    cursor: pointer;
    box-shadow: inset 0 0 0 0 #5383ec;
    -webkit-transition: ease-out 0.4s;
    -moz-transition: ease-out 0.4s;
    transition: ease-out 0.4s;
    &:hover {
      box-shadow: inset 400px 0 0 0 #5383ec;
    }
  }
`;
const TitleStack = styled(Stack)`
  && {
    ${"" /* display: inline-block; */}
    justify-content: left;
    align-items: center;
    padding: 5rem 5rem 5rem 5rem;
  }
`;

const HeroImage = styled(Image)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

// const SubtitleAnimation = ({ words }) => {
//   const wordVariants = {
//     hidden: { opacity: 0, x: -20 },
//     visible: { opacity: 1, x: 0, transition: { duration: 1 } },
//   };

//   return (
//     <motion.div
//       variants={{
//         visible: {
//           transition: { staggerChildren: 0.1 },
//         },
//       }}
//       initial="hidden"
//       animate="visible"
//     >
//       {words.map((word, index) => (
//         <motion.div key={index} variants={wordVariants} style={{ display: 'inline' }}>
//           {word}
//         </motion.div>
//       ))}
//     </motion.div>
//   );
// };


export default function Hero() {
  const navigate = useNavigate();
  const highlightStyle = {
    color: "789de5",
  };
  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } }, // Adjust the delay as needed
  };

  const subtitleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.5 } }, // Adjust the delay as needed
  };

  const buttonVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 1.0 } }, // Adjust the delay as needed
  };

  return (
    <Grid container sx={{height: {xs: "100%", md: "100vh"}}}>
      <Grid
        item
        xs={12}
        md={7}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <TitleStack
          spacing={2}
          // component={motion.div}
          // initial={{ opacity: 0, scale: 0.5 }}
          // animate={{ opacity: 1, scale: 1 }}
          // transition={{ duration: 3, ease: "easeInOut" }}
          sx={{ display: { xs: "flex", md: "inline-block" }, padding: "5px" }}
        >
          <TitleText
            variant="h2"
            color="#5383ec"
            component={motion.div}
            initial="hidden"
            animate="visible"
            variants={titleVariants}
          >
            Unleash your potential.
          </TitleText>

          <SubtitleText
            variant="h5"
            xs={12}
            sm={1}
            component={motion.div}
            initial="hidden"
            animate="visible"
            variants={subtitleVariants}
          >
            We go beyond textbooks. We empower students to become tomorrow's scientific leaders in biotechnology and engineering.
          </SubtitleText>

          <SignupButtonTop
            variant="contained"
            onClick={() => {
              navigate("/signup");
            }}
            component={motion.div}
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
          >
            <GetStartedText variant="h5">Start Learning</GetStartedText>
          </SignupButtonTop>
        </TitleStack>
      </Grid>
      <Grid
        item
        xs={12}
        md={5}
        sx={{ justifyContent: "center", alignItems: "center" }}
      >
        <HeroImage
          src={nodeGif}
          style={{ width: "40vw", height: "40vw" }}
        ></HeroImage>
      </Grid>
      <Grid container display={{ xs: "none", md: "block" }}>
        <svg class="arrows" item>
          <path class="a1" d="M0 0 L30 32 L60 0"></path>
          <path class="a2" d="M0 20 L30 52 L60 20"></path>
          <path class="a3" d="M0 40 L30 72 L60 40"></path>
        </svg>
      </Grid>
      
    </Grid>
  );
}
