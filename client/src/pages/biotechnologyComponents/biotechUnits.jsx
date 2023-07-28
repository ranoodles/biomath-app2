import { React, useEffect } from "react";
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
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { motion } from "framer-motion";
import theme from "../website-constants/Theme";

const TitleText = styled(Typography)`
  && {
    display: flex;
    justify-content: left;
    align-items: left;
    font-weight: 700;
    margin-bottom: 2rem;
    text-align: left;
    color: white;
  }
`;

const CardHolder = styled(Grid)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    ${
      "" /* padding-left: 10vw;
    padding-right: 10vw; */
    }
    border-color: #d99565;
    padding-bottom: 10vh;
  }
`;

const DescriptionText = styled(Typography)`
  && {
    display: flex;
    justify-content: left;
    align-items: left;
    font-size: 20px;
    padding-bottom: 1rem;
    text-align: left;
    color: white;
  }
`;

const VertStack = styled(Stack)`
  && {
    display: flex;
    justify-content: left;
    align-items: left;
    padding: 3rem;
    border-radius: 2rem;
    width: 50%;
    ${'' /* border: 1px solid grey; */}
    padding-bottom: 3rem;
    background: linear-gradient(to right top, #535eab, #8351c2);
  }
`;

const ListButtons = styled(Button)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 1rem 1rem 1rem 1rem;
    color: white;
    border-color: white;
    box-shadow: inset 0 0 0 0 #03add5;
    -webkit-transition: ease-out 0.4s;
    -moz-transition: ease-out 0.4s;
    transition: ease-out 0.2s;
    width: 90%;
    &:hover {
      box-shadow: inset 60vw 0vh 0vh 0vh #03add5;
      ${'' /* color: black; */}
    }
  }
`;

const ButtonHolderGroup = styled(ButtonGroup)`
  && {
    border-color: #008e9b;
    orientation: vertical;
    align-items: center;
  }
`;

const HolderGrid = styled(Grid)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 4rem;
  }
`;

function DisplayInfo({ unit, handleLessonSelect }) {
  if (!unit) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme} border="none">
      <HolderGrid container>
        <VertStack item
            component={motion.div}
            viewport={{ once: true }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 0.8,
              delay: 0,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            whileHover={{
              scale: 1.1,
              background: "linear-gradient(to right top, #354083, #6533A4)",
            }}
        >
          <TitleText variant="h2">
            {unit.id}. {unit.name}
            {/* {unit.name} */}
          </TitleText>
          <DescriptionText item variant="h4">
            {unit.description}
          </DescriptionText>
          <ButtonHolderGroup
            item
            variant="text"
            orientation="vertical"
            color="primary"
            sx={{ color: "white" }}
          >
            {unit.lessons.map((lesson) => (
              <ListButtons
                item
                key={lesson.lesson_id}
                onClick={() => handleLessonSelect(lesson)}
              >
                <Typography sx={{fontSize: "1.25rem", fontWeight: "600"}}>{lesson.lesson_name}</Typography>
              </ListButtons>
            ))}
          </ButtonHolderGroup>
        </VertStack>
      </HolderGrid>
      </ThemeProvider>
    </>
  );
}

export default DisplayInfo;
