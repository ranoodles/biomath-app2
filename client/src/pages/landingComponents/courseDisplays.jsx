import { useState } from "react";
import { Box, Grid, Button, Typography, Stack, Divider } from "@mui/material";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ScienceIcon from "@mui/icons-material/Science";
import CalculateIcon from "@mui/icons-material/Calculate";
import scienceImg from "./scientist.svg";
import mathImg from "./mathematician.svg";
import Image from "mui-image";

const Title = styled(Typography)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    margin-bottom: 2vw;
    text-align: center;
  }
`;

const TitleStack = styled(Stack)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 7rem 5rem 7rem 5rem;
    background-color: transparent;
  }
`;

const SplitBoxesGrid = styled(Grid)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    gap: 6vw;
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
`;

const SubjectDescriptionGrid = styled(Grid)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
  }
`;

const CourseDescriptionText = [
  {
    key: "bio",
    courseName: "Synthetic Biology",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    icon: (
      <ScienceIcon
        style={{ fontSize: "5rem" }}
        sx={{ paddingBottom: "2rem", color: "white" }}
      />
    ),
    // color: "#C5DFF8",
    // color2: "#7895CB",
    linksite: "/biotechnology",
    backgroundImage: scienceImg,
  },
  {
    key: "math",
    courseName: "Applied Math",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    icon: (
      <CalculateIcon
        style={{ fontSize: "5rem" }}
        sx={{ paddingBottom: "2rem", color: "white" }}
      />
    ),
    // color: "#C5DFF8",
    // color2: "#7895CB",
    linksite: "/appliedmath",
    backgroundImage: mathImg,
  },
];

const DescriptionText = styled(Typography)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    ${"" /* padding-bottom: 2rem; */}
    color: white;
    transition: 0.25s all ease-in-out;
    zindex: 3;
  }
`;

export default function CourseDisplay() {
  const navigate = useNavigate();

  const hoverOn = (event) => {
    const key = event.currentTarget.role;
    const collection = document.querySelectorAll("#" + key);
    collection.forEach((item) => {
      item.style.opacity = "1";
    });
  };

  const hoverOff = (event) => {
    const key = event.currentTarget.role;
    const collection = document.querySelectorAll("#" + key);
    collection.forEach((item) => {
      item.style.opacity = "0";
    });
  };

  return (
    <>
      <Title
        variant="h3"
        paddingTop="5rem"
        marginBotton="0rem"
        sx={{ color: "#03add5" }}
      >
        Our Courses
      </Title>
      <SplitBoxesGrid
        container
        divider={<Divider orientation="vertical" flexItem />}
        direction="row"
      >
        {CourseDescriptionText.map((CourseCard) => (
          <SubjectDescriptionGrid
            item
            xs={10}
            md={4.5}
            role={CourseCard.key}
            sx={{
              cursor: "pointer",
              position: "relative",
              background: "linear-gradient(to right top, #535EAB, #8351C2)",
              overflow: "hidden",
              height: { xs: "80vh", md: "90vh", lg: "80vh" },
            }}
            component={motion.div}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              backgroundColor: CourseCard.color,
            }}
            transition={{
              duration: 0.8,
              delay: 0,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            whileHover={{
              scale: 1.1,
              background: "linear-gradient(to right top, #354083, #6533A4)",
            }}
            onClick={() => {
              navigate(CourseCard.linksite);
            }}
            onMouseOver={hoverOn}
            onMouseOut={hoverOff}
          >
            <div style={{ position: "absolute", opacity: "0.2" }}>
              <Image
                sx={{ zIndex: 2, fillOpacity: 0.5 }}
                src={CourseCard.backgroundImage}
              />
            </div>
            <TitleStack sx={{ zIndex: 10, position: "absolute" }}>
              {CourseCard.key === "bio" ? (
                <ScienceIcon
                  style={{ fontSize: "5rem" }}
                  id={CourseCard.key}
                  sx={{
                    paddingBottom: "2rem",
                    zIndex: 3,
                    color: "white",
                    transition: "0.25s all ease-in-out",
                    opacity: 0,
                  }}
                />
              ) : (
                <CalculateIcon
                  style={{ fontSize: "5rem" }}
                  id={CourseCard.key}
                  sx={{
                    paddingBottom: "2rem",
                    zIndex: 3,
                    color: "white",
                    transition: "0.25s all ease-in-out",
                    opacity: 0,
                  }}
                />
              )}
              <Title variant="h3" sx={{ color: "white" }}>
                {CourseCard.courseName}
              </Title>
              <DescriptionText
                id={CourseCard.key}
                variant="h5"
                sx={{ opacity: 0 }}
              >
                {CourseCard.description}
              </DescriptionText>
            </TitleStack>
          </SubjectDescriptionGrid>
        ))}
      </SplitBoxesGrid>
    </>
  );
}
