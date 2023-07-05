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
    background-color: #C5DFF8;
    height: 80%;
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
    color:black;
    border-color:black;
    border-radius: 10px;
  }
`;

// const units = {
//     unit1: {
//         id: 1,
//         lessons:[
//             "rammywammy",
//             "sweetie cupcake",
//             "aditya ladoo"
//         ]
//     },
//     unit2: {
//         id: 2,
//         lessons:[
//             "hellooooo",
//             "fadisfios",
//             "heyyyyyyyy"
//         ]
//     }
// };

// const unit1 = {
//     id: 1,
//     lessons:[
//         "rammywammy",
//         "sweetie cupcake",
//         "aditya ladoo"
//     ]
// }

function DisplayInfo(props) {
  return (
    <>
      <VertStack>
        <TitleText variant="h2">{props.unit.id}. {props.unit.name}</TitleText>
        <DescriptionText variant="h4">{props.unit.description}</DescriptionText>
        <ButtonGroup
          orientation="vertical"
          aria-label="vertical contained button group"
          variant="outlined"
          sx={{marginTop:"1rem"}}
        >
          {props.unit.lessons.map((lesson) => (
            <ListButtons key={lesson.toLowerCase()}>• {lesson}</ListButtons>
          ))}
        </ButtonGroup>
      </VertStack>
    </>
  );
}

export default DisplayInfo;
