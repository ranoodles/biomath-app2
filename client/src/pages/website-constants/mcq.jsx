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
  FormHelperText,
} from "@mui/material";
import { motion } from "framer-motion";
import CheckIcon from "@mui/icons-material/Check";
import theme from "./Theme";
import { useRadioGroup } from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

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

const CustomRadio = styled(FormControlLabel)``;

const CheckmarkIcon = styled(CheckCircleIcon)`
  color: green;
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
  const [value, setValue] = React.useState(null);
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState(null);
  const [radioColor, setRadioColor] = React.useState("default");
  const [disable, setDisable] = React.useState(false);

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value === mcqQuestion[0].answerChoices[mcqQuestion[0].correctAnswer]) {
      setHelperText("You got it!");
      setError(false);
      setRadioColor("success");
      setDisable(true);
      document.getElementById(value).style.color = "green";
    } else if (
      value !== mcqQuestion[0].answerChoices[mcqQuestion[0].correctAnswer]
    ) {
      document.getElementById(value).style.color = "red";
      setHelperText("Sorry, wrong answer!");
      setError(true);
    } else {
      setHelperText("Please select an option.");
      setError(true);
    }
  };
  return (
    <>
      <CardGrid>
        <VertStack>
          <QuestionText variant="h4">{mcqQuestion[0].question}</QuestionText>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <RadioGroup
                aria-labelledby="mcq-question"
                name="mcq-question-radio-group"
                onChange={handleRadioChange}
              >
                {mcqQuestion[0].answerChoices &&
                  mcqQuestion[0].answerChoices.map((answerChoice) => (
                    <>
                      <CustomRadio
                        value={answerChoice}
                        control={
                          <Radio
                            color={radioColor}
                            disabled={
                              answerChoice !==
                              mcqQuestion[0].answerChoices[
                                mcqQuestion[0].correctAnswer
                              ]
                                ? disable
                                : false
                            }
                          />
                        }
                        label={answerChoice}
                        id={answerChoice}
                      />
                    </>
                  ))}
              </RadioGroup>
              <FormHelperText>{helperText}</FormHelperText>
              <Button
                variant="contained"
                type="submit"
                sx={{
                  margin: "1rem",
                  width: "80px",
                }}
              >
                Check
              </Button>
            </FormControl>
          </form>
        </VertStack>
      </CardGrid>
    </>
  );
}
