import React from "react";
import { Box, Grid, Button, Typography, Stack, Divider } from "@mui/material";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ScienceIcon from "@mui/icons-material/Science";
import CalculateIcon from "@mui/icons-material/Calculate";

const Title = styled(Typography)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    margin-bottom: 3rem;
    text-align: center;
  }
`;

const TitleStack = styled(Stack)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 7rem 5rem 7rem 5rem;
  }
`;

const SplitBoxesGrid = styled(Grid)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    gap: 4vw;
    padding-top: 3rem;
    padding-bottom: 0vw;
  }
`;

const SubjectDescriptionGrid = styled(Grid)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    border-radius: 30px;
    margin-top: 0rem;
  }
`;

const LearnMoreButton = styled(Button)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
  }
`;

const CourseDescriptionText = [
  {
    courseName: "Biotechnology",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    icon: (
      <ScienceIcon
        style={{ fontSize: "5rem" }}
        sx={{ paddingBottom: "2rem" }}
      />
    ),
    color: "#C5DFF8",
    color2: "#7895CB",
    linksite: "/biotechnology",
  },
  {
    courseName: "Applied Math",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    icon: (
      <CalculateIcon
        style={{ fontSize: "5rem" }}
        sx={{ paddingBottom: "2rem" }}
      />
    ),
    color: "#C5DFF8",
    color2: "#7895CB",
    linksite: "/appliedmath",
  },
];

const DescriptionText = styled(Typography)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    padding-bottom: 2rem;
  }
`;

export default function CourseDisplay() {
  const navigate = useNavigate();
  return (
    <>
      <Title variant="h3" color="white" paddingTop="5rem" marginBotton="0rem">
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
            xs={11}
            sm={5}
            key={CourseCard.courseName}
            sx={{ backgroundColor: "skyblue" }}
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
            whileHover={{ scale: 1.05, backgroundColor: CourseCard.color2 }}
          >
            <TitleStack>
              <Title variant="h3">{CourseCard.courseName}</Title>
              {CourseCard.icon}
              <DescriptionText>{CourseCard.description}</DescriptionText>
              <LearnMoreButton
                variant="contained"
                onClick={() => {
                  navigate(CourseCard.linksite);
                }}
              >
                Learn More
              </LearnMoreButton>
            </TitleStack>
          </SubjectDescriptionGrid>
        ))}
      </SplitBoxesGrid>
    </>
  );
}
