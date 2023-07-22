import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import axios from "axios";
import Landing from "./pages/Landing";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import BiotechnologyPage from "./pages/biotechnology";
import DisplayInfo from "./pages/website-constants/DisplayInfo";
import React, { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import theme from "./pages/website-constants/Theme.jsx";
import AppliedMathPage from "./pages/appliedmath";
import ImgText from "./pages/website-constants/ImageText";
import McqCard from "./pages/website-constants/mcq.jsx";
import LearningPath from "./pages/learningpath";
import FillInBlank from "./pages/website-constants/fillinblank";
import renderCards from "./pages/rendercards.jsx";

const exampleLearningPath = [
  {
    card_number: "1",
    type: "ImgText",
    title: "Lorem",
    text: "Consectetur voluptatem quaerat adipisci sed est est ut. Modi etincidunt consectetur adipisci quisquam adipisci aliquam. Aliquam quaerat dolore numquam. Dolore labore voluptatem quiquia adipisci ipsum adipisci velit. Ut est quisquam ut quisquam modi ipsum. Numquam modi tempora adipisci modi consectetur. Porro dolore dolore labore eius. Ipsum magnam etincidunt velit magnam non numquam. Modi dolore ut magnam dolor voluptatem. Non ut labore etincidunt etincidunt ipsum quiquia labore.",
    img: "https://picsum.photos/780/460",
  },
  {
    card_number: "2",
    type: "MCQ",
    questionText: "second question second questino oogly boogly.",
    answerChoices: ["1", "2", "3", "4"],
    correctAnswer: 4,
  },
  {
    card_number: "3",
    type: "FRQ",
    questionText: "third question second questino oogly boogly.",
    correctAnswer: "bismillah",
  },
  {
    card_number: "4",
    type: "FRQ",
    questionText: "4th question please work bismillah",
    correctAnswer: "assalamalekum",
  },
  {
    card_number: "5",
    type: "TextImg",
    title: "Lorem",
    description:
      "Consectetur voluptatem quaerat adipisci sed est est ut. Modi etincidunt consectetur adipisci quisquam adipisci aliquam. Aliquam quaerat dolore numquam. Dolore labore voluptatem quiquia adipisci ipsum adipisci velit. Ut est quisquam ut quisquam modi ipsum. Numquam modi tempora adipisci modi consectetur. Porro dolore dolore labore eius. Ipsum magnam etincidunt velit magnam non numquam. Modi dolore ut magnam dolor voluptatem. Non ut labore etincidunt etincidunt ipsum quiquia labore.",
    img: "https://picsum.photos/780/460",
  },
];

function App() {
  const [lessonList, setLessonList] = useState([]);
  useEffect(() => {
    const fetchAllLessons = async () => {
      try {
        const res = await axios.get("http://localhost:8800/cards");
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
        console.log("err");
      }
    };
    fetchAllLessons();
  }, []);

  console.log(lessonList[0]);
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route
              path="/biotechnology/lesson1"
              element={<LearningPath lesson={lessonList[0]} />}
            />
            <Route key="landing" path="/" element={<Landing />} />
            <Route key="signup" path="/signup" element={<Signup />} />
            <Route key="login" path="/login" element={<Login />} />
            <Route
              key="biotechnology"
              path="/biotechnology"
              element={<BiotechnologyPage />}
            />
            <Route
              key="appliedmath"
              path="/appliedmath"
              element={<AppliedMathPage />}
            />
            <Route
              key="learningpath"
              path="/learningpath"
              element={<LearningPath lesson={exampleLearningPath} />}
            />
            {console.log(lessonList[0])}
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
