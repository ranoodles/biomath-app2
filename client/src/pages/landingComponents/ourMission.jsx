import React from "react";
import { Box, Grid, Button, Typography, Stack, Divider } from "@mui/material";
import styled from "styled-components";
import { motion } from "framer-motion";
import Image from "mui-image";

const OurMissionGrid = styled(Grid)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0rem 0rem 0rem 0rem;
    gap: 2vw;
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
    margin-bottom: 3rem;
    text-align: center;
  }
`;

export default function OurMission() {
  return (
    <>
      <BiomathText variant="h3" color="white" paddingTop="7rem">
        Our Mission
      </BiomathText>
      <OurMissionGrid container>
        <OurMissionImgGrid
          item
          xs={11}
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
          <OurMissionImg
            src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
            alt="Beakers with pipette"
          />
        </OurMissionImgGrid>
        <OurMissionTextGrid
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
          <OurMissionText variant="h5">
            Deserunt reprehenderit aute amet Lorem laborum irure. Dolor eu
            pariatur incididunt dolore aute minim qui est et tempor velit elit.
            Sint sit duis nulla esse dolor. Id officia do dolore aliqua
            exercitation in culpa ad voluptate ullamco eu ex cupidatat. Cillum
            nulla eu labore quis adipisicing mollit ad velit cupidatat.
          </OurMissionText>
        </OurMissionTextGrid>
      </OurMissionGrid>
    </>
  );
}
