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
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    margin-top: 2rem;
    color: "#395B64";
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
