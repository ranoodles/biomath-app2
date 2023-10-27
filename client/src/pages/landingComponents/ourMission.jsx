import React from "react";
import { Box, Grid, Button, Typography, Stack, Divider } from "@mui/material";
import styled from "styled-components";
import { motion } from "framer-motion";
import Image from "mui-image";
import progressImg from "./progressImg.svg";

const OurMissionGrid = styled(Grid)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 0rem 2rem 0rem;
    gap: 4vw;
    ${"" /* height: 60vh; */}
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

const BiomathText = styled(Typography)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    ${"" /* margin-bottom: 1rem; */}
    text-align: center;
    color: #5383ec;
  }
`;

export default function OurMission() {
  return (
    <>
      <OurMissionGrid container key="ourmission-1">
        <OurMissionImgGrid
          key="ourmission-2"
          item
          xs={10}
          md={4}
          component={motion.div}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <Image key="ourmission-3" src={progressImg} />
        </OurMissionImgGrid>
        <OurMissionTextGrid
          key="ourmission-4"
          Item
          xs={11}
          md={5}
          component={motion.div}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <Stack key="ourmission-5">
            <BiomathText key="ourmission-6" variant="h3" paddingTop="5rem">
              Our Mission
            </BiomathText>
            <OurMissionText variant="h5" key="ourmission-7">
              Deserunt reprehenderit aute amet Lorem laborum irure. Dolor eu
              pariatur incididunt dolore aute minim qui est et tempor velit
              elit. Sint sit duis nulla esse dolor. Id officia do dolore aliqua
              exercitation in culpa ad voluptate ullamco eu ex cupidatat. Cillum
              nulla eu labore quis adipisicing mollit ad velit cupidatat.
            </OurMissionText>
          </Stack>
        </OurMissionTextGrid>
      </OurMissionGrid>
    </>
  );
}
