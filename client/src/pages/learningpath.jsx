import React, { useState, useRef } from "react";
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
    ${"" /* align-items: center; */}
    height: 90vh;
    width: 80vw;
    background-color: #c5dff8;
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
    width: 100%;
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
    correctAnswer: "rizzler",
  },
];

function LearningPath({ lesson }) {
  const [cardNum, setCardNum] = useState(1);
  // const lastCard = Object.keys(lesson)[Object.keys(lesson).length - 1];
  // const firstCard = lesson.lesson.keys().shift().card_number;
  const handleNextClick = () => {
    console.log(lesson.length);
    if (cardNum < lesson.length - 1) {
      setCardNum(cardNum + 1);
    } else {
      console.log("cannot go forward");
    }
  };
  const handleBackClick = () => {
    if (cardNum > 1) {
      setCardNum(cardNum - 1);
    } else {
      console.log("cannot go back");
    }
  };
  // Function to render the appropriate card based on the type
  const renderCard = () => {
    const currentCard = lesson[cardNum];
    if (currentCard.type === "MCQ") {
      return <McqCard key={cardNum} question={currentCard}></McqCard>;
    } else if (currentCard.type === "FRQ") {
      return <FillInBlank key={cardNum} question={currentCard}></FillInBlank>;
    } else if (currentCard.type === "ImgText") {
      return <ImgText key={cardNum} displayInfo={currentCard}></ImgText>;
    } else if (currentCard.type === "TextImg") {
      return <TextImg key={cardNum} displayInfo={currentCard}></TextImg>;
    }
    return "Card Rendering Error";
  };

  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <BigGrid>
        <CardHolder
          item
          sm={12}
          xs={12}
          sx={{ alignItems: { xs: "flex-start", md: "center" } }}
        >
          <ChevronButton onClick={handleBackClick}>
            <LeftIcon style={{ color: "black", fontSize: "3rem" }} />
          </ChevronButton>
          {renderCard()}
          <ChevronButton onClick={handleNextClick}>
            <RightIcon style={{ color: "black", fontSize: "3rem" }} />
          </ChevronButton>
        </CardHolder>
      </BigGrid>
    </ThemeProvider>
  );
}

export default LearningPath;
