import React, { useEffect } from "react";
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
import theme from "../website-constants/Theme.jsx";
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
  }
`;

const VertStack = styled(Stack)`
  && {
    display: flex;
    justify-content: left;
    align-items: left;
    padding: 2rem;
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
    padding-bottom: 2rem;
    text-align: left;
  }
`;

const CustomRadio = styled(FormControlLabel)``;

const CheckmarkIcon = styled(CheckCircleIcon)`
  color: green;
`;

const formControlLabelStyle = {
  "& .MuiFormControlLabel-label": {
    fontSize: "1.4rem",
  },
};

const DisplayText = styled(Typography)`
  && {
    display: flex;
    justify-content: center;
    color: black;
    padding: 0.2rem;
    font-weight: 500;
    text-transform: none;
  }
`;

const CheckButton = styled(Button)`
  && {
    background-color: transparent;
    border: 2px solid black;
    width: 5rem;
    margin-top: 1rem;
    cursor: pointer;
    box-shadow: inset 0 0 0 0 #03add5;
    -webkit-transition: ease-out 0.4s;
    -moz-transition: ease-out 0.4s;
    transition: ease-out 0.4s;
    &:hover {
      box-shadow: inset 400px 0 0 0 #03add5;
      border-color: white;
    }
  }
`;

export default function McqCard({ question }) {
  const [value, setValue] = React.useState(null);
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState(null);
  const [radioColor, setRadioColor] = React.useState("default");
  const [disable, setDisable] = React.useState(false);

  const answerChoices = [
    question.mcqChoice1,
    question.mcqChoice2,
    question.mcqChoice3,
    question.mcqChoice4,
  ];

  React.useEffect(() => {
    setValue(null);
    setError(false);
    setHelperText(null);
    setRadioColor("default");
    setDisable(false);
  }, [question]);
  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value === answerChoices[question.mcqCorrect - 1]) {
      setHelperText("You got it!");
      setError(false);
      setRadioColor("success");
      setDisable(true);
      document.getElementById(value).style.color = "green";
    } else if (
      value !== answerChoices[question.mcqCorrect - 1] &&
      value != null
    ) {
      document.getElementById(value).style.color = "darkred";
      setHelperText("Sorry, wrong answer. Try again!");
      setRadioColor("danger");
      setError(true);
    } else if (value == null) {
      setHelperText("Please select an option.");
      setRadioColor("danger");
      setError(true);
    }
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <CardGrid>
          <VertStack>
            <QuestionText variant="h4">{question.mcqQuestion}</QuestionText>
            <form onSubmit={handleSubmit}>
              <FormControl>
                <RadioGroup
                  aria-labelledby="mcq-question"
                  name="mcq-question-radio-group"
                  onChange={handleRadioChange}
                >
                  {answerChoices &&
                    answerChoices.map((answerChoice) => (
                      <>
                        <CustomRadio
                          value={answerChoice}
                          control={
                            <Radio
                              color={
                                radioColor !== "danger" ? radioColor : "default"
                              }
                              disabled={
                                answerChoice !==
                                answerChoices[question.mcqCorrect - 1]
                                  ? disable
                                  : false
                              }
                            />
                          }
                          label={answerChoice}
                          id={answerChoice}
                          sx={{ ...formControlLabelStyle }}
                        />
                      </>
                    ))}
                </RadioGroup>
                <FormHelperText
                  variant=""
                  sx={{
                    color:
                      radioColor === "success"
                        ? "green"
                        : radioColor === "danger"
                        ? "darkred"
                        : "default",
                    fontSize: "1.5rem",
                  }}
                >
                  {helperText}
                </FormHelperText>
                <CheckButton variant="contained" type="submit">
                  <DisplayText variant="h6">Check</DisplayText>
                </CheckButton>
              </FormControl>
            </form>
          </VertStack>
        </CardGrid>
      </ThemeProvider>
    </>
  );
}
