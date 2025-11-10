import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Button,
  Grid,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  List,
  ListItem,
  ListItemText,
  Chip,
} from '@mui/material';
import { Add as AddIcon, Edit as EditIcon } from '@mui/icons-material';
import PageContainer from '../../components/common/Layout/PageContainer';
import Section from '../../components/common/Layout/Section';

const VenueManagementScreen = () => {
  const [venues, setVenues] = useState([
    {
      id: 1,
      name: 'TGC Innovation Hub',
      address: '123 MG Road, Bangalore',
      capacity: 50,
      availability: 'Available',
      eventsHosted: 15,
    },
    {
      id: 2,
      name: 'Skyline Cafe & Terrace',
      address: '45 Indiranagar, Bangalore',
      capacity: 60,
      availability: 'Booked',
      eventsHosted: 22,
    },
    {
      id: 3,
      name: 'Cubbon Park Pavilion',
      address: 'Cubbon Park, Bangalore',
      capacity: 30,
      availability: 'Available',
      eventsHosted: 8,
    },
  ]);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    capacity: '',
  });

  const handleAddVenue = () => {
    // Mock add venue
    setDialogOpen(false);
    setFormData({ name: '', address: '', capacity: '' });
  };

  return (
    <PageContainer>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h2">Venue Management</Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={() => setDialogOpen(true)}
        >
          Add Venue
        </Button>
      </Box>

      <Grid container spacing={3}>
        {venues.map((venue) => (
          <Grid item xs={12} md={6} key={venue.id}>
            <Paper sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                <Box>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    {venue.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {venue.address}
                  </Typography>
                </Box>
                <Chip
                  label={venue.availability}
                  size="small"
                  color={venue.availability === 'Available' ? 'success' : 'warning'}
                />
              </Box>

              <Grid container spacing={2} sx={{ mb: 2 }}>
                <Grid item xs={6}>
                  <Typography variant="caption" color="text.secondary">
                    Capacity
                  </Typography>
                  <Typography variant="subtitle2" fontWeight={600}>
                    {venue.capacity} people
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="caption" color="text.secondary">
                    Events Hosted
                  </Typography>
                  <Typography variant="subtitle2" fontWeight={600}>
                    {venue.eventsHosted}
                  </Typography>
                </Grid>
              </Grid>

              <Box sx={{ display: 'flex', gap: 1 }}>
                <Button variant="outlined" size="small" fullWidth startIcon={<EditIcon />}>
                  Edit
                </Button>
                <Button variant="outlined" size="small" fullWidth>
                  View Details
                </Button>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Add New Venue</DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
            <TextField
              fullWidth
              label="Venue Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <TextField
              fullWidth
              label="Address"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            />
            <TextField
              fullWidth
              label="Capacity"
              type="number"
              value={formData.capacity}
              onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
          <Button
            variant="contained"
            onClick={handleAddVenue}
            disabled={!formData.name || !formData.address || !formData.capacity}
          >
            Add Venue
          </Button>
        </DialogActions>
      </Dialog>
    </PageContainer>
  );
};

export default VenueManagementScreen;

