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
    padding-bottom: 1rem;
    text-align: left;
  }
`;

const CustomRadio = styled(FormControlLabel)``;

const CheckmarkIcon = styled(CheckCircleIcon)`
  color: green;
`;

const Root = styled("div")(({ theme }) => ({
      [theme.breakpoints.down("xs")]: {
        alignItems: "flex-start",
      },
  }));



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

    if (value === props.mcqQuestion[0].answerChoices[props.mcqQuestion[0].correctAnswer]) {
      setHelperText("You got it!");
      setError(false);
      setRadioColor("success");
      setDisable(true);
      document.getElementById(value).style.color = "green";
    } else if (
      value !== props.mcqQuestion[0].answerChoices[props.mcqQuestion[0].correctAnswer]
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
    <ThemeProvider theme={theme}>
      <CardGrid>
        <VertStack>
          <QuestionText variant="h6">{props.mcqQuestion[0].question}</QuestionText>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <RadioGroup
                aria-labelledby="mcq-question"
                name="mcq-question-radio-group"
                onChange={handleRadioChange}
              >
                {props.mcqQuestion[0].answerChoices &&
                  props.mcqQuestion[0].answerChoices.map((answerChoice) => (
                    <>
                      <CustomRadio
                        value={answerChoice}
                        control={
                          <Radio
                            color={radioColor}
                            disabled={
                              answerChoice !==
                              props.mcqQuestion[0].answerChoices[
                                props.mcqQuestion[0].correctAnswer
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
    </ThemeProvider>
    </>
  );
}
