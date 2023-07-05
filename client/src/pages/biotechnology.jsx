import { React, useState } from "react";
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
import DisplayCard from "./website-constants/DisplayInfo.jsx";

const TitleText = styled(Typography)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    letter-spacing: .3rem;
    ${"" /* font-size: 9vw; */}
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

const HolderGrid = styled(Grid)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const CardHolder = styled(Grid)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80vh;
    padding: 1rem 2rem 1rem 2rem;
    overflow-y: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
  }
  &::-webkit-scrollbar-track {
      background-color: #f1f1f1;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #888;
      border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: #555;
    }
`;

const UnitCircle = styled(Button)`
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
    text-align: center;
    color: "#C5DFF8";
  }
`;

const units = [
  {
    id: "1",
    name: "otweun",
    lessons: ["rammywammy", "sweetie cupcake", "aditya ladoo"],
    description:
      "Fugiat esse pariatur deserunt eu reprehenderit officia irure.",
  },
  {
    id: "2",
    name: "Fatty",
    lessons: ["hellooooo", "fadisfios", "heyyyyyyyy"],
    description:
      "Fugiat esse pariatur deserunt eu reprehenderit officia irure.",
  },
  {
    id: "3",
    name: "Fatty",
    lessons: ["hellooooo", "fadisfios", "heyyyyyyyy"],
    description:
      "Fugiat esse pariatur deserunt eu reprehenderit officia irure.",
  },
  {
    id: "4",
    name: "Fatty",
    lessons: ["hellooooo", "fadisfios", "heyyyyyyyy"],
    description:
      "Fugiat esse pariatur deserunt eu reprehenderit officia irure.",
  },
  {
    id: "5",
    name: "Fatty",
    lessons: ["hellooooo", "fadisfios", "heyyyyyyyy"],
    description:
      "Fugiat esse pariatur deserunt eu reprehenderit officia irure.",
  },
  {
    id: "6",
    name: "Fatty",
    lessons: ["hellooooo", "fadisfios", "heyyyyyyyy"],
    description:
      "Fugiat esse pariatur deserunt eu reprehenderit officia irure.",
  },
  {
    id: "7",
    name: "Fatty",
    lessons: ["hellooooo", "fadisfios", "heyyyyyyyy"],
    description:
      "Fugiat esse pariatur deserunt eu reprehenderit officia irure.",
  },
  {
    id: "8",
    name: "Fatty",
    lessons: ["hellooooo", "fadisfios", "heyyyyyyyy"],
    description:
      "Fugiat esse pariatur deserunt eu reprehenderit officia irure.",
  },
];

function BiotechnologyPage() {
  const [selectedUnit, setSelectedUnit] = useState(units[0]);

  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <TitleText variant="h1" sx={{ color: "white" }}>
        Biotechnology
      </TitleText>
      <HolderGrid container sm={12}>
        <UnitStack item sm={2} xs={2}>
          {units &&
            units.map((unit) => (
              <UnitCircle
                sx={{ bgcolor: "#4A55A2", borderRadius: "15%" }}
                onClick={() => {
                  setSelectedUnit(unit);
                }}
              >
                <UnitCircleText sx={{ color: "#C5DFF8" }} variant="h4">
                  {unit.id}
                </UnitCircleText>
              </UnitCircle>
            ))}
        </UnitStack>
        <CardHolder item sm={9} xs={9}>
          <DisplayCard unit={selectedUnit}></DisplayCard>
        </CardHolder>
      </HolderGrid>
    </ThemeProvider>
  );
}

export default BiotechnologyPage;
