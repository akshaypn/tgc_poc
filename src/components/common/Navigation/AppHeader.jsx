import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Avatar,
  Menu,
  MenuItem,
  Badge,
  useMediaQuery,
  useTheme as useMuiTheme,
} from "@mui/material";
import {
  LightMode,
  DarkMode,
  Notifications as NotificationsIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { useTheme } from "../../../context/ThemeContext";
import { useAuth } from "../../../context/AuthContext";

const AppHeader = ({ onMenuClick }) => {
  const navigate = useNavigate();
  const muiTheme = useMuiTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down("md"));
  const { mode, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    handleProfileMenuClose();
    navigate("/login");
  };

  return (
    <AppBar
      position="sticky"
      sx={(theme) => ({
        backgroundColor:
          theme.palette.mode === "dark"
            ? "rgba(18, 18, 18, 0.7)"
            : "rgba(255, 255, 255, 0.7)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      })}
      elevation={1}
    >
      <Toolbar>
        {isMobile && (
          <IconButton
            edge="start"
            aria-label="menu"
            onClick={onMenuClick}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        )}

        <Typography
          variant="h3"
          component="div"
          sx={{
            flexGrow: 0,
            mr: 4,
            cursor: "pointer",
            background: "linear-gradient(135deg, #6366F1, #EC4899)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: 800,
          }}
          onClick={() => navigate("/")}
        >
          TGC
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

        <IconButton onClick={toggleTheme}>
          {mode === "light" ? <DarkMode /> : <LightMode />}
        </IconButton>

        <IconButton onClick={() => navigate("/notifications")}>
          <Badge badgeContent={2} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>

        {user && (
          <>
            <IconButton onClick={handleProfileMenuOpen} sx={{ ml: 1 }}>
              <Avatar
                src={user.avatar}
                alt={user.name}
                sx={{ width: 32, height: 32 }}
              />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleProfileMenuClose}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem
                onClick={() => {
                  navigate("/profile");
                  handleProfileMenuClose();
                }}
              >
                Profile
              </MenuItem>
              <MenuItem
                onClick={() => {
                  navigate("/profile/edit");
                  handleProfileMenuClose();
                }}
              >
                Edit Profile
              </MenuItem>
              <MenuItem
                onClick={() => {
                  navigate("/karma");
                  handleProfileMenuClose();
                }}
              >
                Karma History
              </MenuItem>
              {user.role === "superadmin" && (
                <MenuItem
                  onClick={() => {
                    navigate("/admin");
                    handleProfileMenuClose();
                  }}
                >
                  Admin Dashboard
                </MenuItem>
              )}
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
