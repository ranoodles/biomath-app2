import React from "react";
import styled, { ThemeProvider } from "styled-components";
import {
  Box,
  Button,
  Typography,
  Container,
  Stack,
  Divider,
  Grid,
  ButtonGroup,
} from "@mui/material";
import { motion } from "framer-motion";
import theme from "../website-constants/Theme";
import PropTypes from "prop-types";

const DescriptionText = styled(Typography)`
  && {
    display: flex;
    justify-content: left;
    align-items: left;
    font-size: 20px;
    padding-bottom: 2rem;
    text-align: left;
    line-height: 175%;
    color: white;
  }
`;

const SplitBoxesGrid = styled(Grid)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    height: 100%;
    gap: 3vw;
    padding: 2vw;
  }
`;

const VertStack = styled(Stack)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

// const VideoiFrame = styled.iframe`
//   && {
//     left: 0;
//     top: 0;
//     height: 100%;
//     width: 100%;
//     position: absolute;
//   }
// `;

const YoutubeEmbed = ({ embedId }) => (
    <div>
        <iframe
        src={`https://www.youtube.com/embed/${embedId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{borderRadius: "20px", height: "50vh", width: "50vw"}}
        title="Embedded youtube">
        </iframe>
    </div>
);

export default function VideoCard({ displayInfo }) {
  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }, // Adjust the delay as needed
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }, // Adjust the delay as needed
  };

  return (
    <>
      <ThemeProvider theme={theme} border="none">
        <SplitBoxesGrid container>
        <VertStack>
            {displayInfo.text ?
            <DescriptionText variant="h3" component={motion.div}
            initial="hidden"
            animate="visible"
            variants={titleVariants}>
              {displayInfo.text}
            </DescriptionText>
            : ""}
            <motion.div
            initial="hidden"
            animate="visible"
            variants={subtitleVariants}>
            <YoutubeEmbed embedId={displayInfo.img}></YoutubeEmbed>
            </motion.div>
            {/* <DescriptionText variant="h3">Let's get started!</DescriptionText> */}
          </VertStack>
        </SplitBoxesGrid>
      </ThemeProvider>
    </>
  );
}
