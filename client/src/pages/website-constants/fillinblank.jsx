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
  TextField,
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
    width: 100%;
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

const TextFieldStyled = styled(TextField)`
  && {
    margin: 1rem;
    width: 50vw;
    font-size: 2rem;
  }
`;

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

export default function FillInBlank({ question }) {
  const [value, setValue] = React.useState(null);
  const [helperText, setHelperText] = React.useState(null);
  const [helperColor, setHelperColor] = React.useState("default");
  const [disable, setDisable] = React.useState(false);

  const handleFieldChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value.toLowerCase() === question.frqAnswer.toLowerCase()) {
      setHelperText("You got it!");
      setHelperColor("green");
      setDisable(true);
    } else if (value.toLowerCase() !== question.frqAnswer.toLowerCase() && value !== null && value !== "") {
      setHelperText("Sorry, wrong answer. Try again!");
      setHelperColor("darkred");
    } else if (value === null || value === "") {
      setHelperText("Please fill in an answer.");
      setHelperColor("default");
    }
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <CardGrid>
          <VertStack>
            <QuestionText variant="h4">{question.frqQuestion}</QuestionText>
            <form onSubmit={handleSubmit}>
              <FormControl>
                <TextFieldStyled
                  type={
                    typeof question.frqCorrect === "number"
                      ? "number"
                      : "text"
                  }
                  placeholder="Type answer here"
                  variant="standard"
                  sx={{
                    input: { color: "#000000" },
                    label: { color: "#000000" },
                  }}
                  onChange={handleFieldChange}
                  disabled={disable}
                  inputProps={{ style: { fontSize: "1.5rem" } }} // font size of input text
                  InputLabelProps={{ style: { fontSize: "1.5rem" } }} // font size of input label
                />
                <FormHelperText
                  variant=""
                  sx={{ color: helperColor, fontSize: "1.5rem" }}
                >
                  {helperText}
                </FormHelperText>
                <CheckButton
                  variant="contained"
                  type="submit"
                >
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
