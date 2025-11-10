import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Box,
  Chip,
  Button,
  Avatar,
} from '@mui/material';
import { People as PeopleIcon, Event as EventIcon, Lock as LockIcon } from '@mui/icons-material';

const CommunityCard = ({ community }) => {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
      }}
      onClick={() => navigate(`/communities/${community.id}`)}
    >
      <CardMedia
        component="img"
        height="180"
        image={community.image}
        alt={community.name}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Box sx={{ display: 'flex', gap: 1, mb: 1, flexWrap: 'wrap' }}>
          <Chip label={community.category} size="small" color="primary" />
          {community.privacy === 'private' && (
            <Chip icon={<LockIcon />} label="Private" size="small" />
          )}
          {community.isJoined && (
            <Chip label="Joined" size="small" color="success" />
          )}
        </Box>

        <Typography variant="h6" gutterBottom>
          {community.name}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mb: 2,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {community.description}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <PeopleIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
            <Typography variant="body2" color="text.secondary">
              {community.members.toLocaleString()}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <EventIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
            <Typography variant="body2" color="text.secondary">
              {community.events} events
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Avatar src={community.createdBy.avatar} sx={{ width: 24, height: 24 }} />
          <Typography variant="caption" color="text.secondary">
            by {community.createdBy.name}
          </Typography>
        </Box>
      </CardContent>

      <CardActions sx={{ p: 2, pt: 0 }}>
        <Button
          fullWidth
          variant={community.isJoined ? 'outlined' : 'contained'}
          color="primary"
        >
          {community.isJoined ? 'View Community' : 'Join Community'}
        </Button>
      </CardActions>
    </Card>
  );
};

export default CommunityCard;

