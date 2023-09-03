import { React, useState, useRef, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import {
  Box,
  Button,
  Typography,
  Container,
  Stack,
  Divider,
  Grid,
} from "@mui/material";

const TitleText = styled(Typography)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    margin-top: 2.5rem;
    text-align: center;
    color: 'white';
    final: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 2
      }
    }
    box-shadow: "black";
  }
`;

export default function BiotechHeader() {
  return (
    <>
      <TitleText
        sx={{
          color: "#03add5",
          fontSize: { xs: "9vw", md: "6vw" },
        }}
      >
        Biotechnology{" "}
      </TitleText>
    </>
  );
}
