import React from "react";
import Nav from "./website-constants/NavBarLoggedOut";
import {
  Paper,
  Box,
  Button,
  Typography,
  Container,
  Stack,
  Divider,
  Grid,
  Card,
} from "@mui/material";
import styled from "styled-components";
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";
import { motion, useScroll } from "framer-motion";
import { red, blue, green } from "@mui/material/colors";
import ScienceIcon from "@mui/icons-material/Science";
import CalculateIcon from "@mui/icons-material/Calculate";
import { useNavigate } from "react-router-dom";
import theme from "./website-constants/Theme.jsx";
import { motion as threeDMotion } from "framer-motion-3d";
import Image from "mui-image";

const slides = [
  "https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg",
  "https://res.cloudinary.com/demo/basketball_shot.jpg",
  "https://i.ytimg.com/vi/PCwL3-hkKrg/maxresdefault.jpg",
];

const Root = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("xs")]: {
    color: red[500],
    visibility: "hidden",
  },
}));

const BiomathText = styled(Typography)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    margin-bottom: 3rem;
    text-align: center;
  }
`;

const TitleText = styled(Typography)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    letter-spacing: .3rem;
    ${"" /* font-size: 9vw; */}
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

const SubtitleText = styled(Typography)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    ${"" /* font-size: 25px; */}
    text-align: center;
  }
`;

const DescriptionText = styled(Typography)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    padding-bottom: 2rem;
  }
`;

const SignupButtonTop = styled(Button)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    margin-top: 2rem;
    color: "#395B64";
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
    ${"" /* height: 70vh; */}
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
    ${"" /* background-color: white; */}
  }
`;

const AppBenefitsHolderGrid = styled(Grid)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    ${"" /* height: 70vh; */}
    gap: 2vw;
    padding-top: 2vw;
    padding-bottom: 2vw;
    margin-top: 1rem;
    gap: 4vw;
  }
`;

const AppBenefitsGrid = styled(Grid)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    ${"" /* height: 70vh; */}
    gap: 2vw;
    padding-top: 2vw;
    padding-bottom: 2vw;
  }
`;

const AppBenefitsStack = styled(Stack)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 5rem 2rem 5rem;
  }
`;

const BenefitDescriptionText = styled(Typography)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const OurMissionGrid = styled(Grid)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0rem 0rem 0rem 5rem;
  }
`;

const OurMissionTextGrid = styled(Grid)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const OurMissionImgGrid = styled(Grid)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const OurMissionImg = styled(Image)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
  }
`;

const OurMissionText = styled(Typography)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 100;
    padding: 3rem 3rem 3rem 3rem;
    text-align: center;
    color: white;
    text-align: left;
  }
`;

const AppBenefitsText = [
  {
    title: "Engaging",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Illuminating",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Engaging",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

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

const TitleBox = styled(Box)`
  && {
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url("https://i.imgur.com/MJupkGx.png");
    background-width: 100%;
    background-size: cover;
  }
`;

export default function Landing() {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <ThemeProvider theme={theme} border="none">
        <Nav />
        <TitleBox>
          <TitleStack
            spacing={2}
            component={motion.div}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          >
            <Box component="span" sx={{ p: 5 }}>
              <TitleText variant="h1" color="white">
                BIOMATH
              </TitleText>
            </Box>
            <SubtitleText
              variant="h5"
              xs={12}
              sm={1}
              sx={{
                color: "white",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </SubtitleText>
            <SignupButtonTop
              variant="contained"
              onClick={() => {
                navigate("/signup");
              }}
            >
              Sign Up
            </SignupButtonTop>
          </TitleStack>
        </TitleBox>
        {/* ========================================================================================================================================== */}
        {/* Our Courses */}
        <BiomathText
          variant="h3"
          color="white"
          paddingTop="5rem"
          marginBotton="0rem"
        >
          Our Courses
        </BiomathText>
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
                <BiomathText variant="h3">{CourseCard.courseName}</BiomathText>
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
        {/* <Divider color='white' /> */}
        {/* ========================================================================================================================================== */}
        {/* Our Mission */}
        <BiomathText variant="h3" color="white" paddingTop="7rem">
          Our Mission
        </BiomathText>
        <OurMissionGrid container>
          <OurMissionImgGrid Item xs={11} sm={4}>
            <OurMissionImg
              src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
              alt="Beakers with pipette"
            />
          </OurMissionImgGrid>
          <OurMissionTextGrid Item xs={11} sm={5}>
            <OurMissionText variant="h5">
              Deserunt reprehenderit aute amet Lorem laborum irure. Dolor eu
              pariatur incididunt dolore aute minim qui est et tempor velit
              elit. Sint sit duis nulla esse dolor. Id officia do dolore aliqua
              exercitation in culpa ad voluptate ullamco eu ex cupidatat. Cillum
              nulla eu labore quis adipisicing mollit ad velit cupidatat.
            </OurMissionText>
          </OurMissionTextGrid>
        </OurMissionGrid>
        {/* ========================================================================================================================================== */}
        {/* <Divider color='white' /> */}

        {/* 3 Boxes */}
        <BiomathText variant="h3" color="white" paddingTop="7rem">
          Benefits at a Glance
        </BiomathText>
        <AppBenefitsHolderGrid container>
          {AppBenefitsText.map((benefitCard) => (
            <AppBenefitsGrid
              item
              xs={11}
              sm={3.3}
              sx={{ backgroundColor: "skyblue", borderRadius: 10 }}
              component={motion.div}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                delay: 0,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              whileHover={{ scale: 1.05 }}
            >
              <AppBenefitsStack>
                <BiomathText variant="h4">{benefitCard.title}</BiomathText>
                <BenefitDescriptionText>
                  {benefitCard.description}
                </BenefitDescriptionText>
              </AppBenefitsStack>
            </AppBenefitsGrid>
          ))}
        </AppBenefitsHolderGrid>
        {/* ========================================================================================================================================== */}

        {/* Start Journey Today */}
        <Box
          sx={{
            // height: "40vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TitleStack spacing={2}>
            <SubtitleText color="common.white" variant="h4">
              Start your journey today!
            </SubtitleText>
            <SignupButtonTop
              variant="contained"
              onClick={() => {
                navigate("/signup");
              }}
            >
              Join Us
            </SignupButtonTop>
          </TitleStack>
        </Box>
      </ThemeProvider>
    </>
  );
}
