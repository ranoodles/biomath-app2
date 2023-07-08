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
} from "@mui/material";
import { motion } from "framer-motion";
import theme from "./Theme";
import { useRadioGroup } from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const CardGrid = styled(Grid)`
  && {
    display: flex;
    justify-content: left;
    align-items: left;
    gap: 2rem;
    padding-bottom: 3rem;
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
    height: 80%;
    width: 100%;
  }
`;
const SubtopicText = styled(Typography)`
  && {
    display: flex;
    justify-content: left;
    align-items: left;
    font-weight: 700;
    margin-bottom: 2rem;
    text-align: left;
  }
`;

const QuestionText = styled(Typography)`
  && {
    display: flex;
    justify-content: left;
    align-items: left;
    font-size: 20px;
    padding-bottom: 1rem;
    text-align: left;
  }
`;

const AnswerChoices = styled(useRadioGroup)`
  && {
    display: flex;
    justify-content: left;
    align-items: left;
    text-align: left;
    font-size: 1rem;
    padding-bottom: 1rem;
    padding-top: 1rem;
    color: black;
    border-color: black;
    border-radius: 10px;
  }
`;

const questionRadio = styled(FormControlLabel)`
  && {
    display: flex;
    justify-content: left;
    align-items: left;
    text-align: left;
  }
`;

const mcqQuestion = [
  {
    question:
      "Non deserunt esse aliquip quis occaecat ullamco ad. Sint occaecat velit enim aute sit in quis dolore esse. Nostrud ullamco nisi eu non minim qui eu exercitation ullamco tempor. Aliquip ad consectetur nisi exercitation eiusmod deserunt excepteur laborum deserunt ullamco anim culpa officia. Commodo sit cupidatat et laboris enim. Exercitation elit aliqua exercitation tempor nostrud eu adipisicing Lorem amet eiusmod.",
    correctAnswer: 0,
    answerChoices: [
      "Ea deserunt quis in deserunt sint aliqua consequat ut duis minim sunt ut.",
      "Commodo officia quis magna esse nostrud minim occaecat elit minim ullamco consectetur culpa nostrud esse.",
      "Pariatur voluptate proident labore excepteur velit cupidatat.",
      "Ut velit aliquip elit est reprehenderit pariatur est nulla eiusmod fugiat tempor.",
    ],
  },
];

export default function McqCard(props) {
  return (
    <>
      <CardGrid>
        <VertStack>
          <QuestionText variant="h4">{mcqQuestion[0].question}</QuestionText>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
            >
              {mcqQuestion[0].answerChoices &&
                mcqQuestion[0].answerChoices.map((answerChoice) => (
                  <questionRadio
                    value={answerChoice}
                    control={<Radio />}
                    label={answerChoice}
                  />
                ))}
            </RadioGroup>
          </FormControl>
        </VertStack>
      </CardGrid>
    </>
  );
}
