import { React, useState, useRef, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
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
import NavBar from "./website-constants/NavBarLoggedOut.jsx";
import DisplayCard from "./website-constants/DisplayInfo.jsx";

const TitleText = styled(Typography)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    letter-spacing: .3rem;
    margin-top: 3rem;
    margin-bottom: 3rem;
    text-align: center;
    color: 'white';

    final: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 2
      }
    }
  }
`;

const HolderGrid = styled(Grid)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
`;

const CardHolder = styled(Grid)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
`;
const ColoredLink = styled(Link)`
  &:visited {
    color: #068fff;
  }
`;

const UnitStack = styled(Stack)`
  && {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 1rem 2rem 1rem 2rem;
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
`;

const UnitCircle = styled(Button)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2vw 0vw 0vw 0vw;
  }
`;

const UnitCircleText = styled(Typography)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    text-align: center;
    color: "#C5DFF8";
  }
`;

function BiotechnologyPage() {
  var units = [];
  const [unitsList, setUnitsList] = useState([]);
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [selectedLessonId, setSelectedLessonId] = useState(null);
  const navigate = useNavigate();
  const handleLessonSelect = (lessonDetails) => {
    setSelectedLessonId(lessonDetails.lesson_id);
    navigate("/appliedmath/" + lessonDetails.lesson_id);
  };

  useEffect(() => {
    const fetchAllUnits = async () => {
      try {
        const res = await axios.get("http://localhost:8800/appliedmath");
        const units = res.data;
        setUnitsList(units);
        setSelectedUnit(units[0]);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllUnits();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <TitleText variant="h1" sx={{ color: "white" }}>
        Applied Math
      </TitleText>
      <HolderGrid container sm={12}>
        <UnitStack item sm={2} xs={2}>
          {unitsList.length > 0 &&
            unitsList.map((unit) => (
              <UnitCircle
                id={"circle" + unit.id}
                sx={{ backgroundColor: "#4A55A2", borderRadius: "15%" }}
                onClick={(e) => {
                  setSelectedUnit(unit);
                }}
                onMouseOver={(e) => {
                  setSelectedUnit(unit);
                }}
                variant="outlined"
              >
                <UnitCircleText sx={{ color: "#C5DFF8" }} variant="h4">
                  {unit.id}
                </UnitCircleText>
              </UnitCircle>
            ))}
        </UnitStack>
        <CardHolder item sm={9} xs={9}>
          {selectedUnit && (
            <DisplayCard
              unit={selectedUnit}
              handleLessonSelect={handleLessonSelect}
            />
          )}{" "}
        </CardHolder>
      </HolderGrid>
    </ThemeProvider>
  );
}

export default BiotechnologyPage;
