import React from 'react';
import Nav from './website-constants/NavBarLoggedOut'
import { Box, Button, Typography, Container, Stack, Divider, Grid, Card } from '@mui/material';
import styled from 'styled-components';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material';
import { motion, useScroll } from "framer-motion";
import Carousel from './website-constants/Carousel';
import {red, blue, green} from "@mui/material/colors"
import ScienceIcon from '@mui/icons-material/Science';
import CalculateIcon from '@mui/icons-material/Calculate';
import {
  useNavigate
} from "react-router-dom"
import theme from "./website-constants/Theme.jsx"


const slides = [
  "https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg",
  "https://res.cloudinary.com/demo/basketball_shot.jpg",
  "https://i.ytimg.com/vi/PCwL3-hkKrg/maxresdefault.jpg"
]

const Root = styled('div')(({ theme }) => ({

  [theme.breakpoints.down('xs')]: {
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
    ${'' /* font-size: 9vw; */}
    text-align: center;
    color: 'white';
  }
`;

const SubtitleText = styled(Typography)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    ${'' /* font-size: 25px; */}
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
    color:"#395B64";
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
    ${'' /* height: 70vh; */}
    gap: 2vw;
    padding-top: 2vw;
    padding-bottom: 2vw;
  }
`;

const SubjectDescriptionGrid = styled(Grid)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    border-radius: 30px;
  }
`;

const LearnMoreButton = styled(Button)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    ${'' /* background-color: white; */}
  }
`;

const AppBenefitsHolderGrid = styled(Grid)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    ${'' /* height: 70vh; */}
    gap: 2vw;
    padding-top: 2vw;
    padding-bottom: 2vw;
    margin-top: 10rem;
  }
`;

const AppBenefitsGrid = styled(Grid)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    ${'' /* height: 70vh; */}
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
    padding: 5rem 5rem 5rem 5rem;
    
    }
`;

const BenefitDescriptionText = styled(Typography)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
}
`;

const AppBenefitsText = [
  {
    title: "Engaging",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    title: "Illuminating",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    title: "Engaging",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  }
];

const CourseDescriptionText = [
  {
    courseName: "Synthetic Biology",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    icon: <ScienceIcon style={{fontSize: "5rem"}} sx={{paddingBottom: "2rem"}}/>
  },
  {
    courseName: "Applied Math",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", 
    icon: <CalculateIcon style={{fontSize: "5rem"}} sx={{paddingBottom: "2rem"}}/>
  }
];

export default function Landing() {
  const navigate = useNavigate();
  return (
    <>
    {/* Hero Section */}
    <ThemeProvider theme={theme} border='none'>
      <Nav />
      <Box sx={{ height: '90vh', display:"flex", alignItems:"center", justifyContent:"center", backgroundImage: "url('https://images.unsplash.com/photo-1632220894022-a83eacddae2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80')", backgroundSize:'cover', backgroundPosition:'center', backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
        <TitleStack spacing={2}>
          <Box component="span" sx={{ p: 5 }}>
            <TitleText variant="h1" sx={{color:'white'}}>BIOMATH</TitleText>
          </Box>
          <SubtitleText variant="h5" sx={{color:'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</SubtitleText>
          <SignupButtonTop variant="contained" onClick={() => {navigate('/signup')}}>Sign Up</SignupButtonTop>
        </TitleStack>
      </Box>
    
    {/* Our Courses */}
      <SplitBoxesGrid container divider={<Divider orientation="vertical" flexItem />} direction="row">
      {CourseDescriptionText.map((CourseCard) => (
        <SubjectDescriptionGrid item xs={11} sm={5.75} sx={{backgroundColor:"skyblue"}}
        component={motion.div} 
        initial={{ opacity: 0, scale: 0 }}
        whileInView=
        {{ opacity: 1, scale: 1 }}
        transition={{
        duration: 0.8,
        delay: 0,
        ease: [0, 0.71, 0.2, 1.01]
      }}
        whileHover={{
        scale: 1.05,
        }}>
          <TitleStack>
            <BiomathText variant="h3">{CourseCard.courseName}</BiomathText>
            {CourseCard.icon}
            <DescriptionText>{CourseCard.description}</DescriptionText>
            <LearnMoreButton variant="contained" onClick={() => {navigate('/biotechnology')}}>Learn More</LearnMoreButton>
          </TitleStack>
        </SubjectDescriptionGrid>
  ))}
      </SplitBoxesGrid>
      {/* 3 Boxes */}
      <AppBenefitsHolderGrid container>
        {AppBenefitsText.map((benefitCard) => (
          <AppBenefitsGrid item
        xs={11} 
        sm={3} 
        sx={{backgroundColor:"skyblue", borderRadius:20}} 
        component={motion.div}
        initial={{ opacity: 0, scale: 1 }}
        whileInView=
        {{ opacity: 1, scale: 1 }}
        transition={{
        duration: 0.8,
        delay: 0,
        ease: [0, 0.71, 0.2, 1.01]
      }}
        whileHover=
        {{ scale: 1.05
        }}
        >
          <AppBenefitsStack>
            <BiomathText>{benefitCard.title}</BiomathText>
            <BenefitDescriptionText>{benefitCard.description}</BenefitDescriptionText>
          </AppBenefitsStack>
        </AppBenefitsGrid>
        ))}

      </AppBenefitsHolderGrid>



      {/* Start Journey Today */}
      <Box sx={{ height: '40vh', display:"flex", alignItems:"center", justifyContent:"center"}}>
      <TitleStack spacing={2}>
        <SubtitleText color="common.white" variant="h4">Start your journey today!</SubtitleText>
        <SignupButtonTop variant="contained" onClick={() => {navigate('/signup')}}>Join Us</SignupButtonTop>
      </TitleStack>
      </Box>
    </ThemeProvider>
    </>
  )
}
