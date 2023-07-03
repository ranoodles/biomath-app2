import React from 'react';
import Nav from './website-constants/NavBarLoggedOut'
import { Box, Button, Typography, Container, Stack, Divider, Grid } from '@mui/material';
import styled from 'styled-components';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material';
import { motion } from "framer-motion";
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
    font-size: 50px;
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
    padding-top: 1vw;
    padding-bottom: 1vw;
  }
`;

const SubjectDescriptionGrid = styled(Grid)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    padding-bottom: 5rem;
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
    font-size: 25px;
    gap: 2vw;
    padding-top: 1vw;
    padding-bottom: 1vw;
  }
`;

const AppBenefitsGrid = styled(Grid)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    padding-bottom: 3rem;
    border-radius: 30px;
  }
`;

const AppBenefitsStack = styled(Stack)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5rem 4rem 5rem 4rem;
  }
`;

const BenefitDescriptionText = styled(Typography)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
}
`;
export default function Landing() {
  const navigate = useNavigate();

  return (
    <>
    {/* Hero Section */}
    <ThemeProvider theme={theme}>
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
      <SplitBoxesGrid container sx={{ border: '10px solid grey' }}  divider={<Divider orientation="vertical" flexItem />}>
        <SubjectDescriptionGrid item xs={12} sm={5.75} sx={{backgroundColor:"skyblue"}}>
          <TitleStack>
            <BiomathText>Synthetic Biology</BiomathText>
            <ScienceIcon style={{fontSize: "5rem"}} sx={{paddingBottom: "2rem"}}/>
            <DescriptionText>Lorem ipsum dolor sit amet consectetur adipiscing elit fringilla non, vel dictum magnis ut eleifend potenti facilisis augue vivamus metus, placerat gravida pellentesque nostra tellus cras tincidunt felis. Class imperdiet ullamcorper diam</DescriptionText>
            <LearnMoreButton variant="contained" onClick={() => {navigate('/biotechnology')}}>Learn More</LearnMoreButton>
          </TitleStack>
        </SubjectDescriptionGrid>
        <SubjectDescriptionGrid item xs={12} sm={5.75} sx={{backgroundColor:"navajowhite"}}>
          <TitleStack>
            <BiomathText>Applied Mathematics</BiomathText>
            <CalculateIcon style={{fontSize: "5rem"}} sx={{paddingBottom: "2rem"}}/>
            <DescriptionText>Lorem ipsum dolor sit amet consectetur adipiscing elit fringilla non, vel dictum magnis ut eleifend potenti facilisis augue vivamus metus, placerat gravida pellentesque nostra tellus cras tincidunt felis. Class imperdiet ullamcorper diam</DescriptionText>
            <LearnMoreButton variant="contained" onClick={() => {navigate('/appliedmath')}}>Learn More</LearnMoreButton>
          </TitleStack>
        </SubjectDescriptionGrid>
      </SplitBoxesGrid>

      {/* Our Mission */}
      <SplitBoxesGrid container sx={{ border: '10px solid grey' }}>
        <SubjectDescriptionGrid item xs={12} sm={5.75} sx={{padding: "5vw 5vw 1vw 5vw"}}>
          {/* <img style={{height:500, width:500}} src={slides[current]}/> */}
          <Carousel>
            {slides.map((slide) => (
              <Root theme={theme}>
              <div>
              <img
                src={slide}
                alt=""
              />
              </div>
              </Root>
            ))}
          </Carousel>
        </SubjectDescriptionGrid>
        <SubjectDescriptionGrid item xs={12} sm={5.75}>
          <TitleStack>
            <BiomathText>Our Mission</BiomathText>
            <DescriptionText>Lorem ipsum dolor sit amet consectetur adipiscing elit fringilla non, vel dictum magnis ut eleifend potenti facilisis augue vivamus metus, placerat gravida pellentesque nostra tellus cras tincidunt felis. Class imperdiet ullamcorper diam</DescriptionText>
          </TitleStack>
        </SubjectDescriptionGrid>
      </SplitBoxesGrid>
      
      {/* 3 Boxes */}
      <AppBenefitsHolderGrid container>
        <AppBenefitsGrid item xs={11} sm={3.75} sx={{backgroundColor:"skyblue"}}>
          <AppBenefitsStack>
            <BiomathText>Enagaging Learning Paths</BiomathText>
            <BenefitDescriptionText>Lorem ipsum dolor sit amet consectetur adipiscing elit fringilla non, vel dictum magnis ut eleifend potenti facilisis augue vivamus metus, placerat gravida pellentesque nostra tellus cras tincidunt felis. Class imperdiet ullamcorper diam</BenefitDescriptionText>
          </AppBenefitsStack>
        </AppBenefitsGrid>

        <AppBenefitsGrid item xs={11} sm={3.75} sx={{backgroundColor:"navajowhite"}}>
          <AppBenefitsStack>
              <BiomathText>Enagaging Learning Paths</BiomathText>
              <BenefitDescriptionText>Lorem ipsum dolor sit amet consectetur adipiscing elit fringilla non, vel dictum magnis ut eleifend potenti facilisis augue vivamus metus, placerat gravida pellentesque nostra tellus cras tincidunt felis. Class imperdiet ullamcorper diam</BenefitDescriptionText>
            </AppBenefitsStack>
        </AppBenefitsGrid>

        <AppBenefitsGrid item xs={11} sm={3.75} sx={{backgroundColor:"navajowhite"}}>
        <AppBenefitsStack>
            <BiomathText>Enagaging Learning Paths</BiomathText>
            <BenefitDescriptionText>Lorem ipsum dolor sit amet consectetur adipiscing elit fringilla non, vel dictum magnis ut eleifend potenti facilisis augue vivamus metus, placerat gravida pellentesque nostra tellus cras tincidunt felis. Class imperdiet ullamcorper diam</BenefitDescriptionText>
          </AppBenefitsStack>
        </AppBenefitsGrid>

      </AppBenefitsHolderGrid>


      {/* Start Journey Today */}
      <Box sx={{ border: '10px solid grey', height: '40vh', display:"flex", alignItems:"center", justifyContent:"center"}}>
      <TitleStack spacing={2}>
        <SubtitleText variant="h4">Start your journey today!</SubtitleText>
        <SignupButtonTop variant="contained" onClick={() => {navigate('/signup')}}>Join Us</SignupButtonTop>
      </TitleStack>
      </Box>
    </ThemeProvider>
    </>
  )
}
