import React from "react";
import { Box, Grid, Button, Typography, Stack, Divider } from "@mui/material";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const TitleStack = styled(Stack)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 7rem 5rem 7rem 5rem;
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
    background-color: transparent;
    border: 2px solid;
    cursor: pointer;
    box-shadow: inset 0 0 0 0 white;
    font-size: 20px;
    margin-top: 2rem;
    -webkit-transition: ease-out 0.4s;
    -moz-transition: ease-out 0.4s;
    transition: ease-out 0.4s;
    &:hover {
      box-shadow: inset 400px 0 0 0 #b200ff;
    }
  }
`;

export default function JoinNow() {
  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "5rem 0rem 3rem 0rem"
        }}
      >
        <TitleStack spacing={2}>
          <SubtitleText color="common.white" variant="h4">
            Start your journey today!
          </SubtitleText>
          <SignupButtonTop
            variant="contained"
            onClick={() => {
              navigate("/signup");
            }}
          >
            Join Us
          </SignupButtonTop>
        </TitleStack>
      </Box>
    </>
  );
}
