import React, { useState, useEffect } from "react";
import axios from "axios";
import styled, { ThemeProvider } from "styled-components";
import { Button, Grid } from "@mui/material";
import theme from "./website-constants/Theme.jsx";
import NavBar from "./website-constants/NavBarLoggedOut.jsx";
import ImgText from "./website-constants/ImageText.jsx";
import LeftIcon from "@mui/icons-material/ChevronLeft";
import RightIcon from "@mui/icons-material/ChevronRight";
import McqCard from "./website-constants/mcq.jsx";
import TextImg from "./website-constants/TextImage.jsx";
import FillInBlank from "./website-constants/fillinblank.jsx";
import { useParams } from "react-router-dom";

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

function MathLearningPath() {
  const { lessonid } = useParams();
  const [cardNum, setCardNum] = useState(0);
  const [lessonList, setLessonList] = useState([]);

  useEffect(() => {
    const fetchAllLessons = async () => {
      try {
        const res = await axios.get("http://localhost:8800/mathcards");
        const cardData = res.data;
        const lessons = [];

        var usedLessons = [];
        for (var card = 0; card < cardData.length; card++) {
          var curr_card = cardData[card];
          if (usedLessons.includes(curr_card.lesson_id)) {
            lessons[curr_card.lesson_id - 1].push(curr_card);
          } else {
            usedLessons.push(curr_card.lesson_id);
            lessons.push([curr_card]);
          }
        }
        setLessonList(lessons);
      } catch (err) {
        console.log("Error logging lessons");
      }
    };
    fetchAllLessons();
  }, []);

  if (!lessonList || lessonList.length === 0) {
    return;
  }

  const lesson = lessonList[lessonid - 1];

  const handleNextClick = () => {
    if (cardNum < lesson.length - 1) {
      setCardNum(cardNum + 1);
    }
  };
  const handleBackClick = () => {
    if (cardNum > 0) {
      setCardNum(cardNum - 1);
    }
  };

  const renderCard = () => {
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
          <ChevronButton onClick={handleBackClick} disable="true">
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

export default MathLearningPath;
