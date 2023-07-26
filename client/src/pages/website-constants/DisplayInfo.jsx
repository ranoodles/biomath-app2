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
import { motion } from "framer-motion";
import theme from "./Theme";

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

const DescriptionText = styled(Typography)`
  && {
    display: flex;
    justify-content: left;
    align-items: left;
    font-size: 20px;
    padding-bottom: 1rem;
    text-align: left;
  }
`;

const VertStack = styled(Stack)`
  && {
    display: flex;
    justify-content: left;
    align-items: left;
    background-color: white;
    padding: 3rem;
    border-radius: 2rem;
    background-color: #c5dff8;
    height: 70vh;
    width: 100%;
  }
`;

const ListButtons = styled(Button)`
  && {
    display: flex;
    justify-content: left;
    align-items: left;
    text-align: left;
    font-size: 1rem;
    padding-bottom: 1rem;
    padding-top: 1rem;
  }
`;

function DisplayInfo({ unit, handleLessonSelect }) {
  if (!unit) {
    return null;
  }
  return (
    <>
      <VertStack>
        <TitleText variant="h2">
          {unit.id}. {unit.name}
        </TitleText>
        <DescriptionText variant="h4">{unit.description}</DescriptionText>
        <ButtonGroup
          orientation="vertical"
          aria-label="vertical contained button group"
          variant="text"
        >
          {unit.lessons.map((lesson) => (
            <ListButtons
              key={lesson.lesson_id}
              onClick={() => handleLessonSelect(lesson)}
            >
              • {lesson.lesson_name}
            </ListButtons>
          ))}
        </ButtonGroup>
      </VertStack>
    </>
  );
}

export default DisplayInfo;
