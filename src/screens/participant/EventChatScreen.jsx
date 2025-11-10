import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Typography,
  Paper,
  TextField,
  IconButton,
  Avatar,
  Chip,
} from '@mui/material';
import { Send as SendIcon, EmojiEmotions as EmojiIcon } from '@mui/icons-material';
import PageContainer from '../../components/common/Layout/PageContainer';
import { getEventById } from '../../mocks/events';
import { mockEventMessages } from '../../mocks/messages';

const EventChatScreen = () => {
  const { id } = useParams();
  const [message, setMessage] = useState('');
  const event = getEventById(id);

  if (!event) {
    return (
      <PageContainer>
        <Typography>Event not found</Typography>
      </PageContainer>
    );
  }

  const handleSend = () => {
    if (message.trim()) {
      // Mock send message
      setMessage('');
    }
  };

  return (
    <PageContainer maxWidth={900}>
      <Paper sx={{ height: 'calc(100vh - 200px)', display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
          <Typography variant="h3">{event.title}</Typography>
          <Typography variant="caption" color="text.secondary">
            {event.currentParticipants} participants
          </Typography>
        </Box>

        <Box sx={{ flexGrow: 1, overflowY: 'auto', p: 2 }}>
          {mockEventMessages.map((msg) => (
            <Box key={msg.id} sx={{ mb: 2 }}>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Avatar src={msg.user.avatar} />
                <Box sx={{ flex: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                    <Typography variant="body2" fontWeight={600}>
                      {msg.user.name}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {new Date(msg.timestamp).toLocaleTimeString('en-IN', {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </Typography>
                  </Box>
                  <Typography variant="body2">{msg.content}</Typography>
                  {msg.reactions && Object.keys(msg.reactions).length > 0 && (
                    <Box sx={{ display: 'flex', gap: 0.5, mt: 0.5 }}>
                      {Object.entries(msg.reactions).map(([emoji, count]) => (
                        <Chip
                          key={emoji}
                          label={`${emoji} ${count}`}
                          size="small"
                          sx={{ height: 24, fontSize: '0.75rem' }}
                        />
                      ))}
                    </Box>
                  )}
                </Box>
              </Box>
            </Box>
          ))}
        </Box>

        <Box sx={{ p: 2, borderTop: 1, borderColor: 'divider' }}>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <TextField
              fullWidth
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              size="small"
            />
            <IconButton color="primary">
              <EmojiIcon />
            </IconButton>
            <IconButton color="primary" onClick={handleSend} disabled={!message.trim()}>
              <SendIcon />
            </IconButton>
          </Box>
        </Box>
      </Paper>
    </PageContainer>
  );
};

export default EventChatScreen;

