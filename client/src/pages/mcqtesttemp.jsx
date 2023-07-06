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
import theme from "./website-constants/Theme";
import { useRadioGroup } from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import McqCard from "./website-constants/mcq.jsx";

const mcqQuestion = [
  {
    subtopicText: "aw09eurcawunrcoiawnucroiawncjroiewanrcu",
    questionText:
      "aioencroiawjncroiawncjfoianwcjoincjoawncjoiwancjoiwanfcjawoincjawoincfjaowincjaoincfjfaoinc",
    answerChoices: [
      { correct: true, answerTxt: "choice1" },
      { correct: false, answerTxt: "choice2" },
      { correct: false, answerTxt: "choice3" },
      { correct: false, answerTxt: "choice4" },
    ],
  },
];

export default function () {
  <ThemeProvider>
    <Grid>
      <McqCard question={mcqQuestion}></McqCard>;
    </Grid>
  </ThemeProvider>;
}
