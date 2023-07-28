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
  Card,
  CardActions,
  CardContent,
} from "@mui/material";
import { motion } from "framer-motion";
import theme from "./website-constants/Theme.jsx";
import { FormControl, TextField } from "@mui/material";
import NavBar from "./website-constants/NavBarLoggedOut.jsx";
import DisplayCard from "./biotechnologyComponents/biotechUnits.jsx";
import BiotechTitle from "./biotechnologyComponents/biotechTitle.jsx";

function BiotechnologyPage() {
  var units = [];
  const [unitsList, setUnitsList] = useState([]);
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [selectedLessonId, setSelectedLessonId] = useState(null);
  const navigate = useNavigate();
  const handleLessonSelect = (lessonDetails) => {
    setSelectedLessonId(lessonDetails.lesson_id);
    navigate("/biotechnology/" + lessonDetails.lesson_id);
  };

  useEffect(() => {
    const fetchAllUnits = async () => {
      try {
        const res = await axios.get("http://localhost:8800/biotechnology");
        const units = res.data;
        setUnitsList(units);
        setSelectedUnit(units[0]);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllUnits();
  }, []);
  console.log(unitsList);
  return (
    <ThemeProvider theme={theme}>
      <BiotechTitle />
      {unitsList.length > 0 &&
        unitsList.map((unit, index) => (
          <DisplayCard
            unit={unit}
            handleLessonSelect={handleLessonSelect}
            key={index}
          />
        ))}
    </ThemeProvider>
  );
}

export default BiotechnologyPage;
