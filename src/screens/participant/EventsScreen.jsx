import React, { useState } from 'react';
import { Box, Typography, Grid, Tab, Tabs } from '@mui/material';
import PageContainer from '../../components/common/Layout/PageContainer';
import Section from '../../components/common/Layout/Section';
import EventCard from '../../components/domain/Event/EventCard';
import EventFilters from '../../components/domain/Event/EventFilters';
import { mockEvents } from '../../mocks/events';

const EventsScreen = () => {
  const [tabValue, setTabValue] = useState(0);
  const [filteredEvents, setFilteredEvents] = useState(mockEvents);

  const handleFilterChange = (filters) => {
    let filtered = [...mockEvents];

    // Search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter(
        (event) =>
          event.title.toLowerCase().includes(searchLower) ||
          event.description.toLowerCase().includes(searchLower)
      );
    }

    // Category filter
    if (filters.category !== 'all') {
      filtered = filtered.filter(
        (event) => event.category.toLowerCase() === filters.category
      );
    }

    // Type filter
    if (filters.type !== 'all') {
      filtered = filtered.filter(
        (event) => event.type.toLowerCase() === filters.type
      );
    }

    // Fee filter
    if (filters.fee === 'free') {
      filtered = filtered.filter((event) => event.fee === 0);
    } else if (filters.fee === 'paid') {
      filtered = filtered.filter((event) => event.fee > 0);
    } else if (filters.fee === 'gig') {
      filtered = filtered.filter((event) => event.fee < 0);
    }

    setFilteredEvents(filtered);
  };

  const getEventsByTab = () => {
    switch (tabValue) {
      case 1:
        return filteredEvents.filter((e) => e.fee === 0);
      case 2:
        return filteredEvents.filter((e) => e.fee < 0);
      default:
        return filteredEvents;
    }
  };

  const displayEvents = getEventsByTab();

  return (
    <PageContainer>
      <Section
        title="Discover Events"
        subtitle="Find workshops, gigs, and experiences in your city"
      >
        <Tabs
          value={tabValue}
          onChange={(e, newValue) => setTabValue(newValue)}
          sx={{ mb: 3 }}
        >
          <Tab label="All Events" />
          <Tab label="Free Events" />
          <Tab label="Paid Gigs" />
        </Tabs>

        <EventFilters onFilterChange={handleFilterChange} />

        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {displayEvents.length} events found
        </Typography>

        <Grid container spacing={3}>
          {displayEvents.map((event) => (
            <Grid item xs={12} sm={6} md={4} key={event.id}>
              <EventCard event={event} />
            </Grid>
          ))}
        </Grid>

        {displayEvents.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h6" color="text.secondary">
              No events found
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Try adjusting your filters
            </Typography>
          </Box>
        )}
      </Section>
    </PageContainer>
  );
};

export default EventsScreen;

