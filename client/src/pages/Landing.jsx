import React from 'react';
import Nav from './website-constants/NavBar';
import { Box, Button, Typography, Container, Stack, Divider } from '@mui/material';
import styled from 'styled-components';



const BiomathText = styled(Typography)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    letter-spacing: 10px;
  }
`;

const DescriptionText = styled(Typography)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
  }
`;

const SignupButtonTop = styled(Button)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
  }
`;

const TitleStack = styled(Stack)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const SplitBoxesContainer = styled(Stack)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
  }
`;

const SubjectDescriptionStack = styled(Stack)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
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

export default function Landing() {
  return (
    <>
    <Nav />
    <Box sx={{ border: '10px solid grey' }}>
      <TitleStack spacing={2}>
        <Box component="span" sx={{ p: 2, border: '2px solid grey' }}>
          <BiomathText>Biomath</BiomathText>
        </Box>
        <DescriptionText>Bringing biotechnology and applied math to the next generation.</DescriptionText>
        <SignupButtonTop>Sign Up</SignupButtonTop>
      </TitleStack>
    </Box>
      <SplitBoxesContainer direction="horizontal" spacing={0} sx={{ border: '10px solid grey' }}   divider={<Divider orientation="vertical" flexItem />}>
        <SubjectDescriptionStack>
          <BiomathText>Synthetic Biology</BiomathText>
          <DescriptionText>Redesigning Life to Change the World</DescriptionText>
          <LearnMoreButton variant="outlined">Learn More</LearnMoreButton>
        </SubjectDescriptionStack>
        <SubjectDescriptionStack>
          <BiomathText>Applied Mathematics</BiomathText>
          <DescriptionText>Real world applications of mathematics</DescriptionText>
          <LearnMoreButton variant="outlined">Learn More</LearnMoreButton>
        </SubjectDescriptionStack>
      </SplitBoxesContainer>
      <SplitBoxesContainer>
      </SplitBoxesContainer>
    </>
  )
}
