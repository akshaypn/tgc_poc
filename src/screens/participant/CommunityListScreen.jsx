import React, { useState } from 'react';
import { Box, Typography, Grid, Tabs, Tab, TextField, InputAdornment } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import PageContainer from '../../components/common/Layout/PageContainer';
import Section from '../../components/common/Layout/Section';
import CommunityCard from '../../components/domain/Community/CommunityCard';
import { mockCommunities, getJoinedCommunities } from '../../mocks/communities';

const CommunityListScreen = () => {
  const [tabValue, setTabValue] = useState(0);
  const [search, setSearch] = useState('');

  const joinedCommunities = getJoinedCommunities();
  const allCommunities = mockCommunities;

  const filterCommunities = (communities) => {
    if (!search) return communities;
    return communities.filter(
      (c) =>
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.description.toLowerCase().includes(search.toLowerCase()) ||
        c.category.toLowerCase().includes(search.toLowerCase())
    );
  };

  const displayCommunities =
    tabValue === 0 ? filterCommunities(allCommunities) : filterCommunities(joinedCommunities);

  return (
    <PageContainer>
      <Section
        title="Communities"
        subtitle="Connect with people who share your interests"
      >
        <Tabs value={tabValue} onChange={(e, newValue) => setTabValue(newValue)} sx={{ mb: 3 }}>
          <Tab label="Discover" />
          <Tab label={`My Communities (${joinedCommunities.length})`} />
        </Tabs>

        <TextField
          fullWidth
          placeholder="Search communities..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ mb: 3 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />

        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {displayCommunities.length} communities found
        </Typography>

        <Grid container spacing={3}>
          {displayCommunities.map((community) => (
            <Grid item xs={12} sm={6} md={4} key={community.id}>
              <CommunityCard community={community} />
            </Grid>
          ))}
        </Grid>

        {displayCommunities.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h3" color="text.secondary">
              No communities found
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Try adjusting your search
            </Typography>
          </Box>
        )}
      </Section>
    </PageContainer>
  );
};

export default CommunityListScreen;

