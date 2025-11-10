import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Chip,
  Tabs,
  Tab,
  IconButton,
} from '@mui/material';
import { MoreVert as MoreIcon } from '@mui/icons-material';
import PageContainer from '../../components/common/Layout/PageContainer';
import Section from '../../components/common/Layout/Section';
import { mockNotifications } from '../../mocks/messages';

const NotificationsScreen = () => {
  const navigate = useNavigate();
  const [tabValue, setTabValue] = useState(0);

  const unreadNotifications = mockNotifications.filter((n) => !n.read);
  const allNotifications = mockNotifications;

  const displayNotifications = tabValue === 0 ? unreadNotifications : allNotifications;

  const getTimeAgo = (timestamp) => {
    const now = new Date();
    const time = new Date(timestamp);
    const diff = Math.floor((now - time) / 1000); // seconds

    if (diff < 60) return 'Just now';
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
    return `${Math.floor(diff / 86400)}d ago`;
  };

  return (
    <PageContainer>
      <Section title="Notifications">
        <Tabs value={tabValue} onChange={(e, newValue) => setTabValue(newValue)} sx={{ mb: 3 }}>
          <Tab label={`Unread (${unreadNotifications.length})`} />
          <Tab label="All" />
        </Tabs>

        <Paper>
          <List>
            {displayNotifications.map((notification) => (
              <ListItem
                key={notification.id}
                sx={{
                  bgcolor: notification.read ? 'transparent' : 'action.hover',
                  cursor: 'pointer',
                  '&:hover': {
                    bgcolor: 'action.selected',
                  },
                }}
                onClick={() => navigate(notification.link)}
                secondaryAction={
                  <IconButton edge="end">
                    <MoreIcon />
                  </IconButton>
                }
              >
                <Avatar sx={{ mr: 2, bgcolor: 'primary.main' }}>
                  {notification.icon}
                </Avatar>
                <ListItemText
                  primary={
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Typography variant="subtitle2" fontWeight={notification.read ? 400 : 600}>
                        {notification.title}
                      </Typography>
                      {!notification.read && (
                        <Chip label="New" size="small" color="primary" sx={{ height: 20 }} />
                      )}
                    </Box>
                  }
                  secondary={
                    <>
                      <Typography variant="body2" color="text.secondary">
                        {notification.message}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {getTimeAgo(notification.timestamp)}
                      </Typography>
                    </>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Paper>

        {displayNotifications.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h3" color="text.secondary" gutterBottom>
              No notifications
            </Typography>
            <Typography variant="body2" color="text.secondary">
              You're all caught up!
            </Typography>
          </Box>
        )}
      </Section>
    </PageContainer>
  );
};

export default NotificationsScreen;

