import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
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
    ${"" /* width: 100%; */}
  }
`;

const DescriptionText = styled(Typography)`
  && {
    display: flex;
    justify-content: left;
    align-items: left;
    ${"" /* font-size: 20px; */}
    padding-bottom: 1rem;
    text-align: left;
    line-height: 175%;
  }
`;

const SplitBoxesGrid = styled(Grid)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    height: 100%;
    gap: 3vw;
    padding: 2vw;
  }
`;

const VertStack = styled(Stack)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default function Intro({ lessonIndex, course }) {
  const [lesson, setLesson] = useState([]);
  useEffect(() => {
    const fetchAllLessons = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8800/" + course + "lessons"
        );
        const lessons = res.data;
        setLesson(lessons[lessonIndex - 1]);
        // setLesson(lessons[1])
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllLessons();
  }, []);

  return (
    <>
      <ThemeProvider theme={theme} border="none">
        <SplitBoxesGrid container>
          <VertStack>
            <DescriptionText variant="h3">
              Welcome to Unit {lesson.unit_id} Lesson {lesson.lesson_number}!
            </DescriptionText>
            <TitleText variant="h1">{lesson.lesson_name}</TitleText>
            <DescriptionText variant="h3">Let's get started!</DescriptionText>
          </VertStack>
        </SplitBoxesGrid>
      </ThemeProvider>
    </>
  );
}
