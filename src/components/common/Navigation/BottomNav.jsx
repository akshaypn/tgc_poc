import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import {
  Home as HomeIcon,
  Event as EventIcon,
  Groups as GroupsIcon,
  ConfirmationNumber as TicketIcon,
  Person as PersonIcon,
} from '@mui/icons-material';

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getActiveIndex = () => {
    const path = location.pathname;
    if (path.startsWith('/events')) return 1;
    if (path.startsWith('/communities')) return 2;
    if (path.startsWith('/tickets')) return 3;
    if (path.startsWith('/profile')) return 4;
    return 0;
  };

  const handleChange = (event, newValue) => {
    const routes = ['/', '/events', '/communities', '/tickets', '/profile'];
    navigate(routes[newValue]);
  };

  return (
    <Paper
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        display: { xs: 'block', md: 'none' },
      }}
      elevation={3}
    >
      <BottomNavigation value={getActiveIndex()} onChange={handleChange} showLabels>
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Events" icon={<EventIcon />} />
        <BottomNavigationAction label="Communities" icon={<GroupsIcon />} />
        <BottomNavigationAction label="Tickets" icon={<TicketIcon />} />
        <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNav;

