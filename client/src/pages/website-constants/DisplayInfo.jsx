import React from 'react'
import styled, { ThemeProvider } from "styled-components";
import {
  Box,
  Button,
  Typography,
  Container,
  Stack,
  Divider,
  Grid,
  ButtonGroup
} from "@mui/material";
import { motion } from "framer-motion";
import theme from './Theme';

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
    padding-top:1rem;
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
            <TitleText variant="h2">Title</TitleText>
            <DescriptionText variant="h4">Description</DescriptionText>
            <ButtonGroup
                orientation="vertical"
                aria-label="vertical contained button group"
                variant="text"
            >
                {props.unit.lessons.map((lesson) => (
                    <ListButtons key={lesson.toLowerCase()}>• {lesson}</ListButtons>
                ))}
            </ButtonGroup>
        </VertStack>
    </>
  )
}

export default DisplayInfo