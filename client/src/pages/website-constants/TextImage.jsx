import React from "react";
import styled, { ThemeProvider } from "styled-components";
import {
  Box,
  Button,
  Typography,
  Container,
  Stack,
  Divider,
  Grid,
  ButtonGroup,
} from "@mui/material";
import { motion } from "framer-motion";
import theme from "./Theme";
import Image from "mui-image";

const TitleText = styled(Typography)`
  && {
    display: flex;
    justify-content: left;
    align-items: left;
    font-weight: 700;
    margin-bottom: 2rem;
    text-align: left;
  }
`;

const SubGrid = styled(Grid)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    ${"" /* padding: 2rem; */}
    width: 100%;
  }
`;

const DescriptionText = styled(Typography)`
  && {
    display: flex;
    justify-content: left;
    align-items: left;
    font-size: 20px;
    line-height: 175%;
    padding-bottom: 1rem;
    text-align: left;
  }
`;

const SplitBoxesGrid = styled(Grid)`
  && {
    display: flex;
    ${"" /* justify-content: center; */}
    align-items: center;
    font-size: 25px;
    height: 100%;
    gap: 10vw;
    padding: 2vw;
  }
`;

const Img = styled(Image)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    ${"" /* padding: 1rem; */}
  }
`;

const VertStack = styled(Stack)`
  && {
    display: flex;
    justify-content: left;
    align-items: left;
  }
`;

function TextImage({ displayInfo }) {
  return (
    <>
      <ThemeProvider theme={theme} border="none">
        <SplitBoxesGrid container>
          <SubGrid item xs={12} sm={6}>
            <VertStack>
              <TitleText variant="h2">{displayInfo.title}</TitleText>
              <DescriptionText variant="h4">
                {displayInfo.text}
              </DescriptionText>
            </VertStack>
          </SubGrid>
          <SubGrid item xs={12} sm={4}>
            <Img src={displayInfo.img} alt=""></Img>
          </SubGrid>
        </SplitBoxesGrid>
      </ThemeProvider>
    </>
  );
}

export default TextImage;
