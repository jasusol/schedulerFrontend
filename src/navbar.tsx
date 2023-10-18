import React from "react";
import AppBar from '@mui/material/AppBar';
import { Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from "react-router-dom";

function navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <NavLink to="/" className="link" style={{ color: '#FFF', flexGrow: 1}}>
              <Button color="inherit" style={{textTransform:"none", fontSize:"20px"}}>
                Scheduler</Button>
            </NavLink>
          
          
          <Button color="inherit" href="/signIn">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
    // <nav className="navbar navbar-expand-lg bg-body-tertiary">
    //   <div className="container-fluid">
    //     <a className="navbar-brand" href="/">
    //       Navbar
    //     </a>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarNav"
    //       aria-controls="navbarNav"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarNav">
    //       <ul className="navbar-nav">
    //         <li className="nav-item">
    //           <a className="nav-link active" aria-current="page" href="/">
    //             Home
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="/about">
    //             About
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="/dashboard">
    //             Dashboard
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
}

export default navbar;
