import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Box,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  Home as HomeIcon,
  Event as EventsIcon,
  Groups as GroupsIcon,
  ConfirmationNumber as TicketIcon,
  Person as PersonIcon,
  Star as KarmaIcon,
  Notifications as NotificationsIcon,
  Dashboard as DashboardIcon,
  EventNote as EventIcon,
  Place as VenueIcon,
  Payment as PaymentIcon,
} from '@mui/icons-material';
import { useAuth } from '../../../context/AuthContext';

const drawerWidth = 280;

const Sidebar = ({ open, onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { user } = useAuth();

  const participantItems = [
    { text: 'Home', icon: <HomeIcon />, path: '/' },
    { text: 'Events', icon: <EventsIcon />, path: '/events' },
    { text: 'Communities', icon: <GroupsIcon />, path: '/communities' },
    { text: 'My Tickets', icon: <TicketIcon />, path: '/tickets' },
    { text: 'Profile', icon: <PersonIcon />, path: '/profile' },
    { text: 'Karma', icon: <KarmaIcon />, path: '/karma' },
    { text: 'Notifications', icon: <NotificationsIcon />, path: '/notifications' },
  ];

  const adminItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/admin' },
    { text: 'Create Event', icon: <EventIcon />, path: '/admin/create-event' },
    { text: 'Venues', icon: <VenueIcon />, path: '/admin/venues' },
    { text: 'Payouts', icon: <PaymentIcon />, path: '/admin/payouts' },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    if (isMobile) {
      onClose();
    }
  };

  const drawerContent = (
    <Box>
      <Box sx={{ p: 3, textAlign: 'center' }}>
        <Box
          sx={{
            fontSize: '2rem',
            fontWeight: 800,
            background: 'linear-gradient(135deg, #6366F1, #EC4899)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          TGC
        </Box>
        <Box sx={{ fontSize: '0.75rem', color: 'text.secondary', mt: 0.5 }}>
          Learn • Earn • Grow
        </Box>
      </Box>

      <Divider />

      <List>
        {participantItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              selected={location.pathname === item.path}
              onClick={() => handleNavigation(item.path)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      {user?.role === 'superadmin' && (
        <>
          <Divider sx={{ my: 2 }} />
          <List>
            <ListItem>
              <ListItemText
                primary="Admin"
                primaryTypographyProps={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'text.secondary',
                  px: 2,
                }}
              />
            </ListItem>
            {adminItems.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton
                  selected={location.pathname === item.path}
                  onClick={() => handleNavigation(item.path)}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </>
      )}
    </Box>
  );

  if (isMobile) {
    return (
      <Drawer anchor="left" open={open} onClose={onClose}>
        <Box sx={{ width: drawerWidth }}>{drawerContent}</Box>
      </Drawer>
    );
  }

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          borderRight: '1px solid',
          borderColor: 'divider',
        },
        display: { xs: 'none', md: 'block' },
      }}
    >
      {drawerContent}
    </Drawer>
  );
};

export default Sidebar;

