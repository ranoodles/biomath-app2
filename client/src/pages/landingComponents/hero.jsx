import React from "react";
import { Box, Button, Typography, Stack } from "@mui/material";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const TitleText = styled(Typography)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    letter-spacing: .3rem;
    ${"" /* font-size: 9vw; */}
    text-align: center;
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
    align-items: center;
    text-align: center;
  }
`;

const SignupButtonTop = styled(Button)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    margin-top: 2rem;
    color: "#395B64";
  }
`;

const TitleStack = styled(Stack)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 7rem 5rem 7rem 5rem;
  }
`;

const TitleBox = styled(Box)`
  && {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    ${'' /* background-image: url("https://i.imgur.com/MJupkGx.png"); */}
    background-width: 100%;
    background-size: cover;
  }
`;

export default function Hero() {
  const navigate = useNavigate();
  return (
    <TitleBox>
      <TitleStack
        spacing={2}
        component={motion.div}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 3, ease: "easeInOut" }}
      >
        <Box component="span" sx={{ p: 5 }}>
          <TitleText variant="h1" color="white">
            BIOMATH
          </TitleText>
        </Box>
        <SubtitleText
          variant="h5"
          xs={12}
          sm={1}
          sx={{
            color: "white",
          }}
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
          Sign Up
        </SignupButtonTop>
      </TitleStack>
    </TitleBox>
  );
}
