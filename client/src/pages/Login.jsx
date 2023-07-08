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
import { Link } from "react-router-dom";
import NavBar from "./website-constants/NavBarLoggedOut.jsx";

const SplitBoxesGrid = styled(Grid)`
  && {
    display: flex;
    ${"" /* justify-content: center; */}
    align-items: center;
    font-size: 25px;
    height: 100vh;
    background-image: url("https://wallpaperboat.com/wp-content/uploads/2019/10/free-website-background-07.jpg");
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
      border-color: #7895cb; /* Replace 'red' with your desired color */
    }
    &:hover fieldset {
      border-color: #7895cb; /* Replace 'green' with your desired color on hover */
    }
    &.Mui-focused fieldset {
      border-color: #7895cb; /* Replace 'blue' with your desired color when focused */
    }
  }
`;

const ColoredLink = styled(Link)`
  color: #FFFFFF;
  &:visited {
    color: #FFFFFF; /* Same color as the initial color */
  }
`;

function Login() {
  return (
    <>
      <NavBar></NavBar>
      <ThemeProvider theme={theme}>
        <SplitBoxesGrid
          container
          divider={<Divider orientation="vertical" flexItem />}
        >
          <LayoutGrid item xs={12} sm={7.5} sx={{ backgroundColor: "black" }}>
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
                Log In
              </Typography>

              <FormControl>
                {/* EMAIL TEXT FIELD */}
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

                {/* FORGOT PWD*/}
                <Typography
                  sx={{
                    textAlign: "left",
                    margin: "0 1rem 1rem 1rem",
                    fontWeight: 200,
                    fontSize: 15,
                  }}
                >
                  <ColoredLink to="/forgotmypassword">
                    Forgot my Password
                  </ColoredLink>
                </Typography>

                {/* SUBMIT BUTTON*/}
                <Button
                  variant="contained"
                  type="submit"
                  sx={{
                    margin: "1rem",
                    width: "80px",
                  }}
                >
                  Login
                </Button>

                {/* DONT HAVE ACCT LINK*/}
                <Typography
                  sx={{
                    textAlign: "left",
                    margin: "0 1rem 1rem 1rem",
                    fontWeight: 200,
                    fontSize: 15,
                    color: "#A0BFE0",
                  }}
                >
                  Don't have an account?{" "}
                  <ColoredLink to="/signup"> Click Here</ColoredLink>
                </Typography>
              </FormControl>
            </VertStack>
          </LayoutGrid>
        </SplitBoxesGrid>
      </ThemeProvider>
    </>
  );
}

export default Login;
