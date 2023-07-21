import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import BiotechnologyPage from "./pages/biotechnology";
import DisplayInfo from "./pages/website-constants/DisplayInfo";
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import theme from "./pages/website-constants/Theme.jsx";
import AppliedMathPage from "./pages/appliedmath";
import ImgText from "./pages/website-constants/ImageText";
import McqCard from "./pages/website-constants/mcq.jsx";
import LearningPath from "./pages/learningpath";
import FillInBlank from "./pages/website-constants/fillinblank";

// const theme = createTheme({
//   typography: {
//     fontFamily: [
//       '-apple-system',
//       'Avenir',
//       'sans-serif',
//       '"Apple Color Emoji"',
//       '"Segoe UI Emoji"',
//       '"Segoe UI Symbol"',
//     ].join(','),
//   },
// });

// theme = responsiveFontSizes(theme);

const exampleLearningPath = [
  {
    card_number: "1",
    type: "ImgText",
    title: "Lorem",
    description:
      "Consectetur voluptatem quaerat adipisci sed est est ut. Modi etincidunt consectetur adipisci quisquam adipisci aliquam. Aliquam quaerat dolore numquam. Dolore labore voluptatem quiquia adipisci ipsum adipisci velit. Ut est quisquam ut quisquam modi ipsum. Numquam modi tempora adipisci modi consectetur. Porro dolore dolore labore eius. Ipsum magnam etincidunt velit magnam non numquam. Modi dolore ut magnam dolor voluptatem. Non ut labore etincidunt etincidunt ipsum quiquia labore.",
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
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/biotechnology" element={<BiotechnologyPage />} />
            <Route path="/appliedmath" element={<AppliedMathPage />} />
            <Route
              path="/learningpath"
              element={<LearningPath lesson={exampleLearningPath} />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
