import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useNavigate } from "react-router-dom";

import { BlogContext, useBlogContext } from "../contexts/BlogContext";
import { logouth } from "../helpers/firebase";
import { AuthContext, useAuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
import Avatar from "@mui/material/Avatar";

const initialValues = {
  title: "",
  imageUrl: "",
  context: "",
};

const NavbarComp = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const { setBlogInfo } = useContext(BlogContext);

  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogin = () => {
    navigate("login");
    setAnchorEl(null);
  };
  const handleRegister = () => {
    navigate("register");
    setAnchorEl(null);
  };
  const handleProfile = () => {
    navigate("profile");
    setAnchorEl(null);
  };
  const handleNewBlog = () => {
    setBlogInfo(initialValues);
    navigate("newblog");
    setAnchorEl(null);
  };
  const handleLogout = () => {
    logouth();
    navigate("login");
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }} color="primary">
      <AppBar position="fixed">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Avatar
            className="bjkicon"
            alt="Remy Sharp"
            src="https://i.pinimg.com/originals/f7/6d/1c/f76d1c3bffcd5e8599e8f7cc10bd2c00.gif"
            sx={{ height: "auto", m: 1, cursor: "Pointer" }}
            onClick={() => navigate("/")}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", sm: "flex" },
              flexGrow: 1,
              fontFamily: "arial",
              cursor: "Pointer",
              color: "inherit",
              textDecoration: "none",
            }}
            onClick={() => navigate("/")}
          >
            Sekunev Fire Blog App
          </Typography>
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "flex", sm: "none" },
              flexGrow: 1,
              fontFamily: "arial",
              cursor: "Pointer",
              color: "inherit",
              textDecoration: "none",
            }}
            onClick={() => navigate("/")}
          >
            Fire Blog App
          </Typography>

          {
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                {currentUser?.photoURL ? (
                  <Avatar
                    alt="Remy Sharp"
                    src={currentUser?.photoURL}
                    sx={{ width: 56, height: 56 }}
                  />
                ) : (
                  <AccountCircle sx={{ fontSize: 56 }} />
                )}
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {!currentUser && (
                  <MenuItem onClick={handleLogin}>Login</MenuItem>
                )}
                {!currentUser && (
                  <MenuItem onClick={handleRegister}>Register</MenuItem>
                )}

                {currentUser && (
                  <MenuItem onClick={handleProfile}>Profile</MenuItem>
                )}
                {currentUser && (
                  <MenuItem onClick={handleNewBlog}>New Blog</MenuItem>
                )}
                {currentUser && (
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                )}
              </Menu>
            </div>
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavbarComp;
