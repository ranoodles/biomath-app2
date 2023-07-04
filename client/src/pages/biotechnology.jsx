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
} from "@mui/material";
import { motion } from "framer-motion";
import theme from "./website-constants/Theme.jsx";
import { FormControl, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import NavBar from "./website-constants/NavBarLoggedOut.jsx";

const SplitBoxesGrid = styled(Grid)`
  && {
    display: flex;
    align-items: center;
    font-size: 25px;
    height: 100vh;
    background-image: url("https://images.unsplash.com/photo-1644325349124-d1756b79dd42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2950&q=80");
    background-size: contain;
    background-size: cover;
  }
`;

const LayoutGrid = styled(Grid)`
  && {
    display: flex;
    justify-content: left;
    align-items: left;
    font-size: 25px;
    ${"" /* padding-bottom: 5rem; */}
    height: 100vh;
    padding: 1rem 2rem 1rem 2rem;
  }
`;

const TextFieldStyled = styled(TextField)`
  && {
    margin: 1rem;
    width: 50vw;
    inputcolor: "#A0BFE0";
    .MuiInputLabel-root {
      border-color: #7895cb; /* Replace 'blue' with your desired color when focused */
    }
    & .MuiOutlinedInput-root {
      & fieldset {
        border-color: #7895cb; /* Replace 'red' with your desired color */
      }
      &:hover fieldset {
        border-color: #7895cb; /* Replace 'green' with your desired color on hover */
      }
      &.Mui-focused fieldset {
        border-color: #7895cb; /* Replace 'blue' with your desired color when focused */
      }
    }
  }
`;

const UnitsBar = styled(Grid)`
  && {
    display: flex;
    justify-content: left;
    align-items: left;
    font-size: 25px;
    ${"" /* padding-bottom: 5rem; */}
    height: 100vh;
    padding: 1rem 2rem 1rem 2rem;
  }
`;

const ColoredLink = styled(Link)`
  &:visited {
    color: #068fff; /* Same color as the initial color */
  }
`;

const VertStack = styled(Stack)`
  && {
    display: flex;
    justify-content: center;
    align-items: left;
  }
`;

function BiotechnologyPage() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavBar />

        <UnitsBar></UnitsBar>
      </ThemeProvider>
    </>
  );
}

export default BiotechnologyPage;
