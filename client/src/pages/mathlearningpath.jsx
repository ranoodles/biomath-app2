import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import styled, { ThemeProvider } from "styled-components";
import { useNavigate } from "react-router-dom";
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
import NavBar from "./website-constants/NavBarLoggedIn.jsx";
import ImgText from "./cardTemplates/ImageText.jsx";
import LeftIcon from "@mui/icons-material/ChevronLeft";
import RightIcon from "@mui/icons-material/ChevronRight";
import McqCard from "./cardTemplates/mcq.jsx";
import TextImg from "./cardTemplates/TextImage.jsx";
import FillInBlank from "./cardTemplates/fillinblank.jsx";
import { useParams } from "react-router-dom";
import Intro from "./cardTemplates/intro.jsx";
import Conclusion from "./cardTemplates/conclusion.jsx";

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
    padding: 1.5vw;
    height: 90vh;
    width: 90vw;
    ${"" /* background: linear-gradient(to right top, #535EAB, #8351C2); */}
    background: linear-gradient(to right top, #99a4f1, #c997f4);
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
    padding: 4rem 2rem;
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

function MathLearningPath() {
  const { lessonid } = useParams();
  const [cardNum, setCardNum] = useState(-1);
  const [lessonList, setLessonList] = useState([]);
  const navigate = useNavigate();
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    const fetchAllLessons = async () => {
      try {
        const res = await axios.get("http://localhost:8800/mathcards");
        const lessons = res.data;
        setLessonList(lessons);
        console.log(lessons);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllLessons();
  }, []);

  if (!lessonList || lessonList.length === 0) {
    return;
  }

  const lesson = lessonList[lessonid - 1];

  const handleNextClick = () => {
    if (cardNum < lesson.length) {
      setCardNum(cardNum + 1);
    } else if (lessonid < lessonList.length) {
      const newIndex = Number(lessonid) + 1;
      navigate("/appliedmath/" + newIndex);
      window.location.reload(false);
    }
  };
  const handleBackClick = (e) => {
    if (cardNum > -1) {
      setCardNum(cardNum - 1);
    } else if (lessonid > 1) {
      const newIndex = Number(lessonid) - 1;
      navigate("/appliedmath/" + newIndex);
      window.location.reload(false);
    }
  };

  const renderCard = () => {
    if (cardNum > -1 && cardNum < lesson.length) {
      const currentCard = lesson[cardNum];
      if (currentCard.card_type === "MCQ") {
        return <McqCard key={cardNum} question={currentCard}></McqCard>;
      } else if (currentCard.card_type === "FRQ") {
        return <FillInBlank key={cardNum} question={currentCard}></FillInBlank>;
      } else if (currentCard.card_type === "ImgText") {
        return <ImgText key={cardNum} displayInfo={currentCard}></ImgText>;
      } else if (currentCard.card_type === "TextImg") {
        return <TextImg key={cardNum} displayInfo={currentCard}></TextImg>;
      }
      return "Card Rendering Error";
    } else if (cardNum === -1) {
      return <Intro lessonIndex={lessonid} course="math"></Intro>;
    } else if (cardNum === lesson.length) {
      return <Conclusion lessonIndex={lessonid} course="math"></Conclusion>;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <BigGrid>
        <ChevronButton
          onClick={handleBackClick}
          disable="true"
          sx={{ marginRight: "2rem", display: { xs: "none", md: "flex" } }}
        >
          <LeftIcon style={{ color: "white", fontSize: "3rem" }} />
        </ChevronButton>
        <CardHolder
          item
          sm={12}
          xs={12}
          sx={{ alignItems: { xs: "flex-start", md: "center" } }}
        >
          {renderCard()}
        </CardHolder>
        <ChevronButton
          onClick={handleNextClick}
          disable="true"
          sx={{ marginLeft: "2rem", display: { xs: "none", md: "flex" } }}
        >
          <RightIcon style={{ color: "white", fontSize: "3rem" }} />
        </ChevronButton>
      </BigGrid>
      <Container
        sx={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          padding: "3rem 0rem",
          visibility: { xs: "visible", md: "hidden" },
        }}
      >
        <ChevronButton
          onClick={handleBackClick}
          disable="true"
          sx={{ marginRight: "2rem" }}
        >
          <LeftIcon style={{ color: "white", fontSize: "3rem" }} />
        </ChevronButton>
        <ChevronButton
          onClick={handleNextClick}
          disable="true"
          sx={{ marginLeft: "2rem" }}
        >
          <RightIcon style={{ color: "white", fontSize: "3rem" }} />
        </ChevronButton>
      </Container>
    </ThemeProvider>
  );
}

export default MathLearningPath;
