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

const mcqQuestion = [
  {
    subtopicText: "aw09eurcawunrcoiawnucroiawncjroiewanrcu",
    questionText:
      "aioencroiawjncroiawncjfoianwcjoincjoawncjoiwancjoiwanfcjawoincjawoincfjaowincjaoincfjfaoinc",
    answerChoices: [
      { correct: "true", answerTxt: "choice1" },
      { correct: "true", answerTxt: "choice2" },
      { correct: "false", answerTxt: "choice3" },
      { correct: "false", answerTxt: "choice4" },
    ],
  },
];

export default function McqCard(props) {
  return (
    <>
      <CardGrid>
        <VertStack>
          <SubtopicText variant="h2">
            {mcqQuestion[0].subtopicText}
          </SubtopicText>
          <QuestionText variant="h4">
            {mcqQuestion[0].questionText}
          </QuestionText>
          <FormControl>
            <AnswerChoices aria-labelledby="mcq-question">
              {mcqQuestion[0].answerChoices &&
                mcqQuestion[0].answerChoices.map((answerChoice) => (
                  <FormControlLabel
                    value={answerChoice.answerTxt}
                    control={<Radio />}
                    label={answerChoice.answerTxt}
                    correct={answerChoice.correct}
                  />
                ))}
            </AnswerChoices>
          </FormControl>
        </VertStack>
      </CardGrid>
    </>
  );
}
