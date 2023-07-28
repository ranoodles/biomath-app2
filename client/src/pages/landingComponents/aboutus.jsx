import {useState} from "react";
import { Box, Grid, Button, Typography, Stack, Divider } from "@mui/material";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ScienceIcon from "@mui/icons-material/Science";
import CalculateIcon from "@mui/icons-material/Calculate";
import scienceImg from "./sample.jpeg"
import mathImg from "./sample2.jpeg"
import Image from "mui-image";

const Title = styled(Typography)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    ${'' /* margin-bottom: 3vw; */}
    text-align: center;
    color: white;
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
    ${'' /* height: 80vh; */}
    &:after {
      background: "linear-gradient(to right top, #535EAB, #8351C2)";
    }
  }
`;

const AboutUsText = [
  {
    key: "aditya",
    nameText: "Aditya Lagu",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    icon: (
      <ScienceIcon
        style={{ fontSize: "5rem" }}
        sx={{ paddingBottom: "2rem", color: "white" }}
      />
    ),
    linksite: "/biotechnology",
    image: scienceImg
  },
  {
    key: "raman",
    nameText: "Raman Arora",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    icon: (
      <CalculateIcon
        style={{ fontSize: "5rem" }}
        sx={{ paddingBottom: "2rem", color: "white" }}
      />
    ),
    linksite: "/appliedmath",
    image: mathImg
  },
];

const DescriptionText = styled(Typography)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    ${'' /* margin-top: 3vw; */}
    color: white;
    transition: 0.25s all ease-in-out;
    zIndex:3;
  }
`;

export default function AboutUs() {

  return (
    <>
      <Title variant="h3" color="white" paddingTop="5rem" marginBotton="0rem">
        About Us
      </Title>
      <SplitBoxesGrid
        container
        divider={<Divider orientation="vertical" flexItem />}
        direction="row"
      >
        {AboutUsText.map((PersonCard) => (
          
          <SubjectDescriptionGrid
            item
            xs={10}
            md={4.5}
            sx={{
              position : "relative",
              height: {xs: "80vh", md: "90vh", lg: "80vh"}
            }}
          >
            <div style={{position: "absolute", opacity: "0.2"}}>
              {/* <Image sx={{zIndex: 2, fillOpacity:0.5 }} src={PersonCard.image} /> */}
              {PersonCard.key === "aditya" ?
                  <ScienceIcon
                    style={{ fontSize: "40vh" }}
                    id={PersonCard.key}
                    sx={{ paddingBottom: "2rem", zIndex:2, color: "white", transition: "0.25s all ease-in-out", opacity: 0.5}}
                  />
                :
                  <CalculateIcon
                    style={{ fontSize: "40vh" }}
                    id={PersonCard.key}
                    sx={{ paddingBottom: "2rem", zIndex:2, color: "white", transition: "0.25s all ease-in-out", opacity: 0.5}}
                  />
              }
            </div>
            <TitleStack sx={{zIndex: 10, position: "absolute"}}>
              {/* {PersonCard.key === "aditya" ?
                  <ScienceIcon
                    style={{ fontSize: "5rem" }}
                    id={PersonCard.key}
                    sx={{ paddingBottom: "2rem", zIndex:3, color: "white", transition: "0.25s all ease-in-out"}}
                  />
                :
                  <CalculateIcon
                    style={{ fontSize: "5rem" }}
                    id={PersonCard.key}
                    sx={{ paddingBottom: "2rem", zIndex:3, color: "white", transition: "0.25s all ease-in-out"}}
                  />
              } */}
              <Title variant="h3" sx={{marginBottom: {xs: "2rem", md: "3vw"}}}>{PersonCard.nameText}</Title>
              <Image sx={{zIndex: 3, borderRadius: "20px"}} src={PersonCard.image} />
              <DescriptionText variant="h5" sx={{marginTop: {xs: "2rem", md: "3vw"}}}>{PersonCard.description}</DescriptionText>
            </TitleStack>
          </SubjectDescriptionGrid>
        ))}
        
      </SplitBoxesGrid>
    </>
  );
}
