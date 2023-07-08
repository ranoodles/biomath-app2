import { React, useState, useRef } from "react";
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
import theme from "./website-constants/Theme.jsx";
import { FormControl, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import NavBar from "./website-constants/NavBarLoggedOut.jsx";
import ImgText from "./website-constants/ImageText.jsx";
import mcq from "./website-constants/mcq.jsx";
import LeftIcon from "@mui/icons-material/ChevronLeft";
import RightIcon from "@mui/icons-material/ChevronRight";
import McqCard from "./website-constants/mcq.jsx";
import TextImg from "./website-constants/TextImage.jsx";
import FillInBlank from "./website-constants/fillinblank.jsx";

const HolderGrid = styled(Grid)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding-bottom: 3rem;
    padding-top: 3rem;
  }
`;

const CardHolder = styled(Grid)`
  && {
    display: flex;
    justify-content: center;
    ${'' /* align-items: center; */}
    height: 90vh;
    background-color: #C5DFF8;
    border-radius: 2rem;
    overflow-y: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
  }
  &::-webkit-scrollbar-track {
      background-color: #f1f1f1;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #888;
      border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: #555;
    }
  }
`;

const BigGrid = styled(Grid)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 2rem;
  }
`;

const ChevronButton = styled(Button)`
  && {
    width: 1rem;
    height: 3rem;
    align-self: center;
  }
`;

const mcqQuestion = [
  {
    question:
      "Non deserunt esse aliquip quis occaecat ullamco ad. Sint occaecat velit enim aute sit in quis dolore esse. Nostrud ullamco nisi eu non minim qui eu exercitation ullamco tempor. Aliquip ad consectetur nisi exercitation eiusmod deserunt excepteur laborum deserunt ullamco anim culpa officia. Commodo sit cupidatat et laboris enim.",
    correctAnswer: 0,
    answerChoices: [
      "Ea deserunt quis in deserunt sint aliqua consequat ut duis minim sunt ut.",
      "Commodo officia quis magna esse nostrud minim occaecat elit minim ullamco consectetur culpa nostrud esse.",
      "Pariatur voluptate proident labore excepteur velit cupidatat.",
      "Ut velit aliquip elit est reprehenderit pariatur est nulla eiusmod fugiat tempor.",
    ],
  },
];

const fillInQuestion = [
  {
    question:
      "Non deserunt esse aliquip quis occaecat ullamco ad. Sint occaecat velit enim aute sit in quis dolore esse. Nostrud ullamco nisi eu non minim qui eu exercitation ullamco tempor. Aliquip ad consectetur nisi exercitation eiusmod deserunt excepteur laborum deserunt ullamco anim culpa officia. Commodo sit cupidatat et laboris enim.",
    correctAnswer: "rizzler"
  },
]

function LearningPath() {

  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <BigGrid>
        <CardHolder item sm={10} xs={12} sx={{
            alignItems: {xs: "flex-start", md: "center"}
        }}>
            <ChevronButton><LeftIcon style={{color: "black", fontSize: "3rem" }}></LeftIcon></ChevronButton>
            {/* <ImgText
                title="Subheading"
                img="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
                text="Velit enim occaecat exercitation Lorem Lorem aliqua reprehenderit magna duis eiusmod nisi. Lorem voluptate duis occaecat pariatur fugiat excepteur minim. Elit Lorem dolor voluptate eu veniam mollit aliquip. Velit enim occaecat exercitation Lorem Lorem aliqua reprehenderit magna duis eiusmod nisi. Lorem voluptate duis occaecat pariatur fugiat excepteur minim. Elit Lorem dolor voluptate eu veniam mollit aliquip. Velit enim occaecat exercitation Lorem Lorem aliqua reprehenderit magna duis eiusmod nisi. Lorem voluptate duis occaecat pariatur fugiat excepteur minim. Elit Lorem dolor voluptate eu veniam mollit aliquip."
            /> */}
            <McqCard mcqQuestion={mcqQuestion}></McqCard>
            {/* <FillInBlank fillInQuestion={fillInQuestion}></FillInBlank> */}
            
            <ChevronButton><RightIcon style={{color: "black", fontSize: "3rem"}}></RightIcon></ChevronButton>
        </CardHolder>
      </BigGrid>
    </ThemeProvider>
  );
}

export default LearningPath;
