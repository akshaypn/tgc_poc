import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Paper,
  Button,
  Chip,
  Tabs,
  Tab,
  Grid,
  Avatar,
} from '@mui/material';
import { QRCodeSVG } from 'qrcode.react';
import {
  CalendarToday as CalendarIcon,
  Place as LocationIcon,
  QrCode as QRIcon,
} from '@mui/icons-material';
import PageContainer from '../../components/common/Layout/PageContainer';
import Section from '../../components/common/Layout/Section';
import { mockEvents } from '../../mocks/events';

const MyTicketsScreen = () => {
  const navigate = useNavigate();
  const [tabValue, setTabValue] = useState(0);

  // Mock tickets - first 3 events
  const myTickets = mockEvents.slice(0, 5).map((event) => ({
    ...event,
    ticketId: `TGC-${event.id}-${Date.now()}`,
    purchaseDate: '2024-11-01',
  }));

  const upcomingTickets = myTickets.filter((t) => new Date(t.date) >= new Date());
  const pastTickets = myTickets.filter((t) => new Date(t.date) < new Date());

  const displayTickets = tabValue === 0 ? upcomingTickets : pastTickets;

  return (
    <PageContainer>
      <Section title="My Tickets" subtitle="Your registered events and QR passes">
        <Tabs value={tabValue} onChange={(e, newValue) => setTabValue(newValue)} sx={{ mb: 3 }}>
          <Tab label={`Upcoming (${upcomingTickets.length})`} />
          <Tab label={`Past (${pastTickets.length})`} />
        </Tabs>

        <Grid container spacing={3}>
          {displayTickets.map((ticket) => (
            <Grid item xs={12} md={6} key={ticket.id}>
              <Paper sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                  <Box
                    component="img"
                    src={ticket.image}
                    sx={{
                      width: 100,
                      height: 100,
                      borderRadius: 2,
                      objectFit: 'cover',
                    }}
                  />
                  <Box sx={{ flex: 1 }}>
                    <Chip label={ticket.type} size="small" color="primary" sx={{ mb: 1 }} />
                    <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 1 }}>
                      {ticket.title}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 0.5 }}>
                      <CalendarIcon sx={{ fontSize: 14, color: 'text.secondary' }} />
                      <Typography variant="caption" color="text.secondary">
                        {new Date(ticket.date).toLocaleDateString('en-IN')} • {ticket.time}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <LocationIcon sx={{ fontSize: 14, color: 'text.secondary' }} />
                      <Typography variant="caption" color="text.secondary" noWrap>
                        {ticket.location}
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                {tabValue === 0 && (
                  <>
                    <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
                      <QRCodeSVG value={ticket.ticketId} size={120} />
                    </Box>
                    <Typography variant="caption" color="text.secondary" sx={{ display: 'block', textAlign: 'center', mb: 2 }}>
                      Ticket ID: {ticket.ticketId}
                    </Typography>
                  </>
                )}

                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Button
                    variant="outlined"
                    size="small"
                    fullWidth
                    onClick={() => navigate(`/events/${ticket.id}`)}
                  >
                    View Details
                  </Button>
                  {tabValue === 0 && (
                    <Button
                      variant="contained"
                      size="small"
                      fullWidth
                      startIcon={<QRIcon />}
                    >
                      Show QR
                    </Button>
                  )}
                  {tabValue === 1 && (
                    <Button
                      variant="contained"
                      size="small"
                      fullWidth
                      onClick={() => navigate(`/events/${ticket.id}/review`)}
                    >
                      Rate Event
                    </Button>
                  )}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {displayTickets.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h3" color="text.secondary" gutterBottom>
              No {tabValue === 0 ? 'upcoming' : 'past'} tickets
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              {tabValue === 0 ? 'Register for events to see your tickets here' : 'No past events yet'}
            </Typography>
            {tabValue === 0 && (
              <Button variant="contained" onClick={() => navigate('/')}>
                Discover Events
              </Button>
            )}
          </Box>
        )}
      </Section>
    </PageContainer>
  );
};

export default MyTicketsScreen;

