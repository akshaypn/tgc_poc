import React from 'react';
import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Chip,
  Grid,
  Divider,
} from '@mui/material';
import {
  TrendingUp as TrendingUpIcon,
  Event as EventIcon,
} from '@mui/icons-material';
import PageContainer from '../../components/common/Layout/PageContainer';
import Section from '../../components/common/Layout/Section';
import KarmaBadge from '../../components/domain/Profile/KarmaBadge';
import { mockKarmaTransactions, karmaRules, karmaBadges } from '../../mocks/karma';
import { useAuth } from '../../context/AuthContext';

const KarmaHistoryScreen = () => {
  const { user } = useAuth();

  return (
    <PageContainer>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <KarmaBadge karma={user?.karma || 0} size="large" />

          <Paper sx={{ p: 3, mt: 3 }}>
            <Typography variant="h3" gutterBottom>
              How to Earn Karma
            </Typography>
            <List dense>
              <ListItem>
                <ListItemText
                  primary={`+${karmaRules.attendEvent} points`}
                  secondary="Attend an event"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={`+${karmaRules.hostEvent} points`}
                  secondary="Host an event"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={`+${karmaRules.firstReview} points`}
                  secondary="Leave a review"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={`+${karmaRules.joinCommunity} points`}
                  secondary="Join a community"
                />
              </ListItem>
            </List>
          </Paper>

          <Paper sx={{ p: 3, mt: 3 }}>
            <Typography variant="h3" gutterBottom>
              Badges
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {karmaBadges.map((badge) => (
                <Box
                  key={badge.id}
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    bgcolor: (user?.karma || 0) >= badge.threshold ? 'primary.light' : 'background.default',
                    opacity: (user?.karma || 0) >= badge.threshold ? 1 : 0.5,
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                    <Box sx={{ fontSize: '1.5rem' }}>
                      {badge.icon}
                    </Box>
                    <Typography variant="subtitle1" fontWeight={600}>
                      {badge.name}
                    </Typography>
                  </Box>
                  <Typography variant="caption" color="text.secondary">
                    {badge.description}
                  </Typography>
                  <Typography variant="caption" display="block" color="text.secondary">
                    {badge.threshold} points required
                  </Typography>
                </Box>
              ))}
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={8}>
          <Section title="Transaction History" subtitle="Your karma earning activity">
            <Paper>
              <List>
                {mockKarmaTransactions.map((transaction, index) => (
                  <React.Fragment key={transaction.id}>
                    <ListItem>
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: '50%',
                          bgcolor: transaction.type === 'earned' ? 'success.light' : 'error.light',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mr: 2,
                        }}
                      >
                        {transaction.type === 'earned' ? (
                          <TrendingUpIcon sx={{ color: 'success.main' }} />
                        ) : (
                          <EventIcon sx={{ color: 'error.main' }} />
                        )}
                      </Box>
                      <ListItemText
                        primary={
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Typography variant="body1">{transaction.reason}</Typography>
                            <Chip
                              label={`${transaction.type === 'earned' ? '+' : '-'}${transaction.amount}`}
                              size="small"
                              color={transaction.type === 'earned' ? 'success' : 'error'}
                            />
                          </Box>
                        }
                        secondary={
                          <>
                            <Typography variant="body2" color="text.secondary">
                              {transaction.event}
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                              {new Date(transaction.date).toLocaleDateString('en-IN')} • Balance: {transaction.balance}
                            </Typography>
                          </>
                        }
                      />
                    </ListItem>
                    {index < mockKarmaTransactions.length - 1 && <Divider />}
                  </React.Fragment>
                ))}
              </List>
            </Paper>
          </Section>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default KarmaHistoryScreen;

