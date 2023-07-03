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
    padding: 10rem 5rem 10rem 5rem;
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


export default function Landing() {
  const navigate = useNavigate();

  return (
    <>
    {/* Hero Section */}
    <ThemeProvider theme={theme}>
      <Nav />
      <Box sx={{ border: '10px solid grey', height: '90vh', display:"flex", alignItems:"center", justifyContent:"center"}}>
        <TitleStack spacing={2}>
          <Box component="span" sx={{ p: 5}}>
            <TitleText variant="h1">BIOMATH</TitleText>
          </Box>
          <SubtitleText variant="h5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</SubtitleText>
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
      
      {/* Our Mission */}
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
