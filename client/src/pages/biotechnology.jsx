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

const HolderGrid = styled(Grid)`
  && {
    display: flex;
    justify-content: left;
    align-items: left;
    font-size: 25px;
    ${"" /* padding-bottom: 5rem; */}
    padding: 1rem 2rem 1rem 2rem;
  }
`;

const UnitsBar = styled(Grid)`
  && {
    display: flex;
    justify-content: left;
    align-items: left;
    font-size: 25px;
    ${"" /* padding-bottom: 5rem; */}
    padding: 1rem 2rem 1rem 2rem;
  }
`;

const CardHolder = styled(Grid)`
  && {
    display: flex;
    justify-content: left;
    align-items: left;
    font-size: 25px;
    ${"" /* padding-bottom: 5rem; */}
    padding: 1rem 2rem 1rem 2rem;
  }
`;
const ColoredLink = styled(Link)`
  &:visited {
    color: #068fff; /* Same color as the initial color */
  }
`;

const UnitStack = styled(Stack)`
  && {
    display: flex;
    justify-content: center;
    align-items: left;
  }
`;

const UnitCircle = styled(Container)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2vw 0vw 0vw 0vw;
  }
`;

const UnitCircleText = styled(Typography)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 4vw;
    text-align: center;
    color: "#C5DFF8";
  }
`;

const Units = [
  { unit: "1" },
  { unit: "2" },
  { unit: "3" },
  { unit: "4" },
  { unit: "5" },
  { unit: "6" },
  { unit: "7" },
  { unit: "8" },
];

function BiotechnologyPage() {
  return (
    <>
      <NavBar />
      <ThemeProvider theme={theme}>
        <HolderGrid container>
          <UnitsBar
            item
            sm={2}
            xs={2}
            sx={{
              // maxWidth: "110rem",
              overflow: "auto",
              "&::-webkit-scrollbar": { display: "none" },
              scrollbarWidth: "none",
            }}
          >
            <UnitStack>
              {Units.map((IndivUnit) => (
                <UnitCircle
                  sx={{
                    bgcolor: "#4A55A2",
                    borderRadius: "15%",
                  }}
                >
                  <UnitCircleText sx={{ color: "#C5DFF8" }}>
                    {IndivUnit.unit}
                  </UnitCircleText>
                </UnitCircle>
              ))}
            </UnitStack>
          </UnitsBar>
          <CardHolder item sm={10} xs={10}></CardHolder>
        </HolderGrid>
      </ThemeProvider>
    </>
  );
}

export default BiotechnologyPage;
