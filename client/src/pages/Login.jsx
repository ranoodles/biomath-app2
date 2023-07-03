import React from 'react'
import styled from 'styled-components';
import { Box, Button, Typography, Container, Stack, Divider, Grid } from '@mui/material';
import { motion } from "framer-motion";
import theme from "./website-constants/Theme.jsx"
import { FormControl, TextField } from '@mui/material';

const SplitBoxesGrid = styled(Grid)`
  && {
    display: flex;
    ${'' /* justify-content: center; */}
    align-items: center;
    font-size: 25px;
    height: 100vh;
    background-image:url("https://wallpaperboat.com/wp-content/uploads/2019/10/free-website-background-07.jpg");
  }
`;

const LayoutGrid = styled(Grid)`
  && {
    display: flex;
    justify-content: left;
    align-items: left;
    font-size: 25px;
    ${'' /* padding-bottom: 5rem; */}
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
  width:50vw;
}
`;

function Login() {
  return (
    <>
    <SplitBoxesGrid container divider={<Divider orientation="vertical" flexItem />}>
        <LayoutGrid item xs={12} sm={7.5} sx={{backgroundColor:"white"}}>
          <VertStack>
            <Typography variant="h2" sx={{textAlign:"left", paddingBottom:"1rem", fontWeight:700, margin:"1rem"}}>Log In</Typography>
            <FormControl>
              <TextFieldStyled type="email" label="Email" />
              <TextFieldStyled type="password" label="Password" />
              <Button variant="contained" type="submit" sx={{margin:"1rem", width:"80px"}}>Login</Button>
            </FormControl>
          </VertStack>
        </LayoutGrid>
    </SplitBoxesGrid>
    </>
  )
}

export default Login