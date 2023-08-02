import { React, useState, useRef, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import Image from "mui-image";
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
  Modal,
  LinearProgress,
  Hidden,
} from "@mui/material";
import { motion } from "framer-motion";
import theme from "./website-constants/Theme.jsx";
import { FormControl, TextField } from "@mui/material";
import NavBar from "./website-constants/NavBarLoggedIn.jsx";
import DisplayCard from "./biotechnologyComponents/biotechUnits.jsx";
import BiotechTitle from "./biotechnologyComponents/biotechTitle.jsx";
import scienceImg from "./biotechnologyComponents/scienstist_goat.svg";
import authCheck from "./authCheck.js";

const CardHolder = styled(Grid)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    border-color: #d99565;
    flex-direction: row;
    overflow-y: hidden;
    height: 80vh;
  }
`;
const FatHolder = styled(Grid)`
  && {
    border-color: #d99565;
    overflow-y: auto;
    flex-direction: column;
    max-height: 70vh;
    overflow-x: hidden; /* Hide horizontal scrollbar if necessary */
    scrollbar-width: 0px; /* Firefox */
    -ms-overflow-style: 0px; /* Internet Explorer 10+ */
    &::-webkit-scrollbar {
      width: 0px; /* Safari and Chrome */
    }
    position: relative;

    border-radius: 2rem;
    padding: 0px 0px 0px 0px;
  }
`;
const StyledImageHolder = styled(Grid)`
  && {
    justify-content: center;
    align-items: center;
    padding-left: 40px;
  }
`;

const Bruh = styled.div`
  height: 120vh;
  ${"" /* overflow: hidden; */}
`;

function BiotechnologyPage() {
  var units = [];
  const [unitsList, setUnitsList] = useState([]);
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [selectedLessonId, setSelectedLessonId] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const checkStatus = async () => {
      const loggedIn = await authCheck();
      if (!loggedIn) {
        navigate("/login");
      }
    };
    checkStatus();
  }, [navigate]);

  const handleLessonSelect = (lessonDetails) => {
    setSelectedLessonId(lessonDetails.lesson_id);
    navigate("/biotechnology/" + lessonDetails.lesson_id);
  };
  useEffect(() => {
    // document.body.style.overflow = "hidden";
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
  const [scrollProg, setScrollProg] = useState(0);
  const handleScroll = (event) => {
    const element = event.currentTarget;
    const totalScrollHeight = element.scrollHeight - element.clientHeight;
    const scrollPosition = element.scrollTop;
    const percentageScrolled = (scrollPosition / totalScrollHeight) * 100;
    setScrollProg(percentageScrolled);
  };
  return (
    <ThemeProvider theme={theme}>
      <Bruh>
        <NavBar />
        <BiotechTitle item />
        <CardHolder
          container
          sx={{ padding: { xs: "none", md: "0rem 2rem 2rem 2rem" } }}
        >
          <Hidden xsDown>
            <StyledImageHolder
              item
              md={3.5}
              sx={{ display: { xs: "none", md: "flex" }, paddingRight: "20px" }}
            >
              <Image src={scienceImg} />
            </StyledImageHolder>
          </Hidden>

          <FatHolder item xs={12} md={8.5} onScroll={handleScroll}>
            {unitsList.length > 0 &&
              unitsList.map((unit, index) => (
                <DisplayCard
                  item
                  unit={unit}
                  handleLessonSelect={handleLessonSelect}
                  key={index}
                />
              ))}
          </FatHolder>
        </CardHolder>
        {/* <Grid sx={{ paddingBottom: "10000px" }}></Grid> */}
      </Bruh>
    </ThemeProvider>
  );
}

export default BiotechnologyPage;
