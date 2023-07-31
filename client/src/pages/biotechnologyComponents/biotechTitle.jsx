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
import NavBar from "../website-constants/NavBarLoggedIn";

const TitleText = styled(Typography)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    margin-top: 1rem;
    margin-bottom: 1rem;
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

export default function BiotechHeader() {
  return (
    <>
      <TitleText variant="h1" sx={{ color: "#03add5" }}>
        Synthetic Biology
      </TitleText>
    </>
  );
}
