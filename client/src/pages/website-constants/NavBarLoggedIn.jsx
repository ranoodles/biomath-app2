import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/icons-material/Person2";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import BiotechIcon from "@mui/icons-material/Biotech";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Menu from "@mui/material/Menu";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const pages = [
  { label: "Courses", path: "/courses" },
  { label: "Biotechnology", path: "/biotechnology" },
  { label: "Applied Math", path: "/appliedmath" },
];

const MenuButton = styled(Button)`
  && {
    background-color: transparent;
    ${'' /* border: 2px solid; */}
    cursor: pointer;
    font-size: 110%;
    box-shadow: inset 0 0 0 0 #5383ec;
    -webkit-transition: ease-out 0.4s;
    -moz-transition: ease-out 0.4s;
    transition: ease-out 0.4s;
    &:hover {
      box-shadow: inset 400px 0 0 0 #5383ec;
    }
  }
`;

const ButtonText = styled(Typography)`
  && {
    display: flex;
    justify-content: center;
    color: white;
    font-weight: 500;
    font-size: 100%;
  }
`;

function NavBar(props) {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleLogOut = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get("http://localhost:8001/clear", {
        withCredentials: true,
        credentials: "include",
      });
      if (res.data) {
        window.location.reload();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AppBar position="static" sx={{ background: "transparent", boxShadow: "none", padding:"1rem" }}>
      <Container maxWidth="xxl">
        <Toolbar disableGutters>
          {/* Hamburger Menu Icon (centered on XS breakpoint) */}
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Tooltip title="Open Menu">
              <IconButton onClick={toggleDrawer} sx={{ p: 0 }}>
                <MenuIcon sx={{ color: "white" }} />
              </IconButton>
            </Tooltip>
          </Box>

          <BiotechIcon
            fontSize="large"
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "avenir",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            BIOMATH
          </Typography>

          {/* User settings (right corner on XS breakpoint) */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, paddingLeft: "1rem" }}>
            {pages.map((page) => (
              <MenuButton
                key={page.label}
                onClick={() => navigate(page.path)}
                sx={{ color: "white", display: "block", marginRight:"1rem" }}
                variant="h4"
              >
                <ButtonText>{page.label}</ButtonText>
              </MenuButton>
            ))}
          </Box>

          {/* User settings (right corner on XS breakpoint) */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar sx={{ color: "white" }} />
              </IconButton>
            </Tooltip>
            <Menu
              anchorEl={anchorElUser}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleLogOut}>Logout</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>

      {/* Drawer for XS breakpoint */}
      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
        <List>
          {pages.map((page) => (
            <ListItem
              // button
              key={page.label}
              onClick={() => {
                toggleDrawer();
                navigate(page.path);
              }}
            >
              <ListItemText primary={page.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
}

export default NavBar;
