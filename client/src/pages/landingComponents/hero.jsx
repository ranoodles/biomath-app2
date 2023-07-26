import React from "react";
import { Box, Button, Typography, Stack, Grid } from "@mui/material";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import fillerImg from "./undraw_lightbulb_moment_re_ulyo.svg";
import atomGif from "./bubble-gum-test-tubes-and-flask.gif";
import Image from "mui-image";

const TitleText = styled(Typography)`
  && {
    display: flex;
    justify-content: flex-start;
    align-items: left;
    font-weight: 700;
    ${'' /* letter-spacing: .3rem; */}
    ${"" /* font-size: 9vw; */}
    text-align: left;
    color: 'white';

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
    color: white;
    margin: 2rem 0rem;
  }
`;

const SignupButtonTop = styled(Button)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: "#395B64";
  }
`;

const TitleStack = styled(Stack)`
  && {
    ${'' /* display: inline-block; */}
    justify-content: left;
    align-items: center;
    padding: 7rem 5rem 7rem 5rem;
  }
`;

const TitleBox = styled(Box)`
  && {
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    ${'' /* background-image: url("https://t3.ftcdn.net/jpg/03/44/67/38/360_F_344673825_6fU6IORyipkYpfU1mg2vmxtHxDToUO6Q.jpg"); */}
    background-width: 100%;
    background-size: cover;
  }
`;

const HeroImage = styled(Image)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default function Hero() {
  const navigate = useNavigate();
  return (
    // <TitleBox>
      <Grid container>
        <Grid item xs={12} md={7} sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
          <TitleStack
            spacing={2}
            component={motion.div}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
            sx={{ display: { xs: "flex", md: "inline-block" } }}
          >
            <TitleText variant="h2" color="white">
              Be prepared for your educational career and beyond.
            </TitleText>
            <SubtitleText
              variant="h5"
              xs={12}
              sm={1}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam.
            </SubtitleText>
            <SignupButtonTop
              variant="contained"
              onClick={() => {
                navigate("/signup");
              }}
            >
              Get Started
            </SignupButtonTop>
          </TitleStack>
        </Grid>
        <Grid item xs={12} md={5} sx={{justifyContent: "center", alignItems: "center"}}>
          <HeroImage src={atomGif} style={{width: "90%", height: "90%"}}></HeroImage>
        </Grid>
      </Grid>
    /* </TitleBox> */
  );
}
