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
      setHelperColor("crimson");
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
                <Button
                  variant="contained"
                  type="submit"
                  sx={{
                    marginTop: "2rem",
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
