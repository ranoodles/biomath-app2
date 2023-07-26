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
      border-color: #7895cb;
    }
    & .MuiOutlinedInput-root {
      & fieldset {
        border-color: #7895cb;
      }
      &:hover fieldset {
        border-color: #7895cb;
      }
      &.Mui-focused fieldset {
        border-color: #7895cb;
      }
    }
  }
`;

const ColoredLink = styled(Link)`
  color: #FFFFFF;
  &:visited {
    color: #FFFFFF;
  }
`;

const VertStack = styled(Stack)`
  && {
    display: flex;
    justify-content: center;
    align-items: left;
  }
`;

function Signup() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavBar></NavBar>
        <SplitBoxesGrid
          container
          divider={<Divider orientation="vertical" flexItem />}
        >
          <LayoutGrid item xs={12} sm={7} sx={{ backgroundColor: "black" }}>
            <VertStack>
              <Typography
                variant="h2"
                sx={{
                  textAlign: "left",
                  paddingBottom: "1rem",
                  fontWeight: 700,
                  margin: "1rem",
                  color: "#FFFFFF",
                }}
              >
                Sign Up
              </Typography>
              <FormControl>
                <TextFieldStyled
                  type="name"
                  label="Full Name"
                  variant="outlined"
                  sx={{
                    input: { color: "#A0BFE0" },
                    label: { color: "#A0BFE0" },
                  }}
                />
                <TextFieldStyled
                  type="email"
                  label="Email"
                  variant="outlined"
                  sx={{
                    input: { color: "#A0BFE0" },
                    label: { color: "#A0BFE0" },
                  }}
                />
                <TextFieldStyled
                  type="password"
                  label="Password"
                  variant="outlined"
                  sx={{
                    input: { color: "#A0BFE0" },
                    label: { color: "#A0BFE0" },
                  }}
                />
                <TextFieldStyled
                  type="password"
                  label="Confirm Password"
                  variant="outlined"
                  sx={{
                    input: { color: "#A0BFE0" },
                    label: { color: "#A0BFE0" },
                  }}
                />
                <Typography
                  sx={{
                    textAlign: "left",
                    margin: "0 1rem 1rem 1rem",
                    fontWeight: 200,
                    fontSize: 15,
                    color: "#A0BFE0",
                  }}
                >
                  Already have an account?{" "}
                  <ColoredLink to="/login"> Click Here</ColoredLink>
                </Typography>
                <Button
                  variant="contained"
                  type="submit"
                  sx={{ margin: "1rem", width: "100px" }}
                >
                  Sign Up
                </Button>
              </FormControl>
            </VertStack>
          </LayoutGrid>
        </SplitBoxesGrid>
      </ThemeProvider>
    </>
  );
}

export default Signup;
