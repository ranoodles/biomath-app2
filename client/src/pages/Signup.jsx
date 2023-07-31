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
  InputBase,
} from "@mui/material";
import { motion } from "framer-motion";
import theme from "./website-constants/Theme.jsx";
import { FormControl, TextField } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import NavBar from "./website-constants/NavBarLoggedOut.jsx";

const SplitBoxesGrid = styled(Grid)`
  && {
    display: flex;
    align-items: center;
    font-size: 25px;
    height: 100vh;
    ${'' /* background-image: url("https://wallpaperboat.com/wp-content/uploads/2019/10/free-website-background-07.jpg"); */}
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

const VertStack = styled(Stack)`
  && {
    display: flex;
    justify-content: center;
    align-items: left;
  }
`;

const TextFieldStyled = styled(TextField)`
  && {
    margin: 1rem;
    width: 50vw;
    inputcolor: "#A0BFE0";
    border: "1px solid white";
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
`;

const ColoredLink = styled(Typography)`
  color: #FFFFFF;
  cursor: pointer;
  &:visited {
    color: #FFFFFF;
  }
`;

const SignUpButton = styled(Button)`
  && {
    background-color: transparent;
    border: 2px solid;
    width: 7rem;
    margin-left: 1rem;
    cursor: pointer;
    box-shadow: inset 0 0 0 0 #03add5;
    -webkit-transition: ease-out 0.4s;
    -moz-transition: ease-out 0.4s;
    transition: ease-out 0.4s;
    &:hover {
      box-shadow: inset 400px 0 0 0 #03add5;
    }
  }
`;

const GetStartedText = styled(Typography)`
  && {
    display: flex;
    justify-content: center;
    color: white;
    ${'' /* padding: 0.05rem; */}
    font-weight: 500;
    text-transform: none;
  }
`;

function Login() {
  const navigate = useNavigate();
  return (
    <>
      {/* <NavBar></NavBar> */}
      <ThemeProvider theme={theme}>
        <SplitBoxesGrid
          container
          divider={<Divider orientation="vertical" flexItem />}
        >
          <LayoutGrid item xs={12} sm={7.5}>
            <VertStack>
              {/* LOGIN MAIN TEXT */}
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
                {/* EMAIL TEXT FIELD */}
                <TextFieldStyled
                  type="text"
                  label="Name"
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

                {/* PASSWORD TEXT FIELD */}
                <TextFieldStyled
                  type="password"
                  label="Password"
                  color="primary"
                  variant="outlined"
                  sx={{
                    input: { color: "#A0BFE0" },
                    label: { color: "#A0BFE0" },
                  }}
                />

                <TextFieldStyled
                  type="password"
                  label="Confirm Password"
                  color="primary"
                  variant="outlined"
                  sx={{
                    input: { color: "#A0BFE0" },
                    label: { color: "#A0BFE0" },
                  }}
                />

                {/* FORGOT PWD*/}
                <ColoredLink sx={{margin: "1rem 1rem 1rem 1rem", color: "#A0BFE0"}}>
                  Already have an account? {" "}
                  <span 
                    onClick={() => {
                      navigate("/login");
                    }}
                    style={{textDecoration: "underline", color: "white"}}
                  >
                    Click Here
                  </span>
                </ColoredLink>

                {/* SUBMIT BUTTON*/}
                <SignUpButton
                  variant="contained"
                  type="submit"
                >
                  <GetStartedText variant="h6">Sign Up</GetStartedText>
                </SignUpButton>
              </FormControl>
            </VertStack>
          </LayoutGrid>
        </SplitBoxesGrid>
      </ThemeProvider>
    </>
  );
}

export default Login;
