// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import Container from "@mui/material/Container";
// import Grid from "@mui/material/Grid";
// import Button from "@mui/material/Button";
// import MenuItem from "@mui/material/MenuItem";
// import BiotechIcon from "@mui/icons-material/Biotech";
// import { useNavigate } from "react-router-dom";
// import styled from "styled-components";

// const pages = [
//   "Log In",
//   "Sign Up"
// ];

// function NavBar(props) {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const navigate = useNavigate();

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };

//   const handleCloseNavMenu = (event) => {
//     setAnchorElNav(null);
//     if (event.currentTarget.role != null) {
//       navigate("/" + event.currentTarget.role);
//     }
//   };

//   const GetStartedText = styled(Typography)`
//   && {
//     display: flex;
//     justify-content: center;
//     color: white;
//     font-weight: 500;
//   }
// `;

// // const SignupButtonTop = styled(Button)`
// //   && {
// //     display: flex;
// //     justify-content: center;
// //     align-items: center;
// //     background:transparent;
// //     &:hover, &:focus {
// //       background: linear-gradient(
// //         to right,
// //         #b200ff,
// //         #a300ea,
// //         #9500d5,
// //         #8600c0,
// //         #7800ac
// //       );
// //     }
// //   }
// // `;

// const SignupButtonTop = styled(Button)`
//   && {
//     background-color: transparent;
//     border: 2px solid;
//     cursor: pointer;
//     box-shadow: inset 0 0 0 0 #03add5;
//     -webkit-transition: ease-out 0.4s;
//     -moz-transition: ease-out 0.4s;
//     transition: ease-out 0.4s;
//     &:hover {
//       box-shadow: inset 400px 0 0 0 #03add5;
//     }
//   }
// `;

// const LoginButtonTop = styled(Button)`
//   && {
//     background-color: transparent;
//     cursor: pointer;
//     box-shadow: inset 0 0 0 0 #03add5;
//     -webkit-transition: ease-out 0.4s;
//     -moz-transition: ease-out 0.4s;
//     transition: ease-out 0.4s;
//     &:hover {
//       box-shadow: inset 400px 0 0 0 #03add5;
//     }
//   }
// `;

//   return (
//     <AppBar
//       position="static"
//       sx={{ backgroundColor: "transparent", boxShadow: "none" }}
//     >
//       <Grid item xs={11} sx={{ margin: "1.5rem 2rem 1rem 2rem", padding: "0 1rem 0 1rem" }}>
//         <Toolbar disableGutters>
//           {/* <BiotechIcon
//             fontSize="large"
//             sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
//           />
//           <Typography
//             variant="h4"
//             noWrap
//             component="a"
//             href="/"
//             sx={{
//               mr: 2,
//               display: { xs: "none", md: "flex" },
//               fontFamily: "avenir",
//               fontWeight: 700,
//               letterSpacing: ".1rem",
//               color: "inherit",
//               textDecoration: "none",
//             }}
//           >
//             BIOMATH
//           </Typography> */}
//           <div style={{display: "flex", flexGrow: 1, alignItems: "center"}}>
//             <BiotechIcon sx={{ display: { xs: "flex" }, fontSize: "2.5rem" }} />
//             <Typography
//               variant="h4"
//               noWrap
//               component="a"
//               href="/"
//               sx={{
//                 mr: 1,
//                 display: { xs: "flex" },
//                 flexGrow: 1,
//                 fontWeight: 700,
//                 letterSpacing: ".1rem",
//                 color: "inherit",
//                 textDecoration: "none",
//               }}
//             >
//               BIOMATH
//             </Typography>
//           </div>
//           <Box sx={{ display: { xs: "none", md: "flex" }, gap:"2rem" }}>
//             <LoginButtonTop
//                 variant="contained"
//                 onClick={() => {
//                   navigate("/login");
//                 }}
//             >
//               <GetStartedText variant="h6">Log In</GetStartedText>
//             </LoginButtonTop>
//             <SignupButtonTop
//                 variant="contained"
//                 onClick={() => {
//                   navigate("/signup");
//                 }}
//               >
//               <GetStartedText variant="h6">Sign Up</GetStartedText>
//             </SignupButtonTop>
//           </Box>
//           <Box
//             sx={{ flexGrow: 0, display: { xs: "flex", md: "none"} }}
//           >
//             <IconButton
//               size="large"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: "bottom",
//                 horizontal: "left",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "left",
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: "block" },
//               }}
//             >
//               {pages.map((page) => (
//                 <MenuItem
//                   key={page}
//                   onClick={handleCloseNavMenu}
//                   role={page.replaceAll(" ", "").toLowerCase()}
//                 >
//                   <Typography textAlign="center">{page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>

//           {/* <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 onClick={handleCloseNavMenu}
//                 sx={{
//                   my: 2,
//                   color: "white",
//                   display: "flex",
//                   fontWeight: 700,
//                   border: 0,
//                 }}
//                 size="large"
//                 variant="outlined"
//                 role={page.replaceAll(" ", "").toLowerCase()}
//               >
//                 {page}
//               </Button>
//             ))}
//           </Box> */}
//         </Toolbar>
//       </Grid>
//     </AppBar>
//   );
// }
// export default NavBar;

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
