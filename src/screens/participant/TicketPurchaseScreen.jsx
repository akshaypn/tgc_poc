import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Button,
  Paper,
  Divider,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Alert,
} from '@mui/material';
import {
  CreditCard as CardIcon,
  AccountBalance as UPIIcon,
  AccountBalanceWallet as WalletIcon,
} from '@mui/icons-material';
import PageContainer from '../../components/common/Layout/PageContainer';
import { getEventById } from '../../mocks/events';

const TicketPurchaseScreen = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = getEventById(id);
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [processing, setProcessing] = useState(false);

  if (!event) {
    return <PageContainer><Typography>Event not found</Typography></PageContainer>;
  }

  const handlePurchase = () => {
    setProcessing(true);
    // Mock payment processing
    setTimeout(() => {
      setProcessing(false);
      navigate('/tickets');
    }, 2000);
  };

  const isFree = event.fee === 0;
  const isGig = event.fee < 0;
  const amount = Math.abs(event.fee);

  return (
    <PageContainer maxWidth={800}>
      <Typography variant="h2" gutterBottom>
        {isFree ? 'Complete Registration' : isGig ? 'Confirm Participation' : 'Purchase Ticket'}
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3 }}>
        <Box sx={{ flex: 1 }}>
          <Paper sx={{ p: 3, mb: 3 }}>
            <Typography variant="h3" gutterBottom>
              Event Details
            </Typography>
            <Typography variant="subtitle1" fontWeight={600}>
              {event.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {new Date(event.date).toLocaleDateString('en-IN')} • {event.time}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {event.location}
            </Typography>
          </Paper>

          {!isFree && (
            <Paper sx={{ p: 3 }}>
              <FormControl component="fieldset">
                <FormLabel component="legend" sx={{ mb: 2 }}>
                  Payment Method
                </FormLabel>
                <RadioGroup value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                  <FormControlLabel
                    value="upi"
                    control={<Radio />}
                    label={
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <UPIIcon />
                        <Typography>UPI</Typography>
                      </Box>
                    }
                  />
                  <FormControlLabel
                    value="card"
                    control={<Radio />}
                    label={
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <CardIcon />
                        <Typography>Credit/Debit Card</Typography>
                      </Box>
                    }
                  />
                  <FormControlLabel
                    value="wallet"
                    control={<Radio />}
                    label={
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <WalletIcon />
                        <Typography>Wallet</Typography>
                      </Box>
                    }
                  />
                </RadioGroup>
              </FormControl>

              {paymentMethod === 'upi' && (
                <TextField
                  fullWidth
                  label="UPI ID"
                  placeholder="yourname@upi"
                  sx={{ mt: 2 }}
                />
              )}

              {paymentMethod === 'card' && (
                <Box sx={{ mt: 2 }}>
                  <TextField fullWidth label="Card Number" sx={{ mb: 2 }} />
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <TextField label="Expiry (MM/YY)" sx={{ flex: 1 }} />
                    <TextField label="CVV" sx={{ flex: 1 }} />
                  </Box>
                </Box>
              )}
            </Paper>
          )}
        </Box>

        <Box sx={{ width: { xs: '100%', md: 350 } }}>
          <Paper sx={{ p: 3, position: 'sticky', top: 80 }}>
            <Typography variant="h3" gutterBottom>
              Order Summary
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography variant="body2">Ticket Price</Typography>
              <Typography variant="body2">
                {isFree ? 'Free' : `₹${amount}`}
              </Typography>
            </Box>

            {!isFree && !isGig && (
              <>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2">Platform Fee</Typography>
                  <Typography variant="body2">₹{(amount * 0.05).toFixed(0)}</Typography>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2">GST (18%)</Typography>
                  <Typography variant="body2">₹{(amount * 0.05 * 0.18).toFixed(0)}</Typography>
                </Box>
              </>
            )}

            <Divider sx={{ my: 2 }} />

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
              <Typography variant="h3">Total</Typography>
              <Typography variant="h3">
                {isFree
                  ? 'Free'
                  : isGig
                  ? `Earn ₹${amount}`
                  : `₹${(amount * 1.059).toFixed(0)}`}
              </Typography>
            </Box>

            {isGig && (
              <Alert severity="info" sx={{ mb: 2 }}>
                Payment will be processed after event completion
              </Alert>
            )}

            <Button
              fullWidth
              variant="contained"
              color="primary"
              size="large"
              onClick={handlePurchase}
              disabled={processing}
            >
              {processing
                ? 'Processing...'
                : isFree
                ? 'Complete Registration'
                : isGig
                ? 'Confirm Participation'
                : 'Pay Now'}
            </Button>

            <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block', textAlign: 'center' }}>
              You will earn 15 Karma points after attending this event
            </Typography>
          </Paper>
        </Box>
      </Box>
    </PageContainer>
  );
};

export default TicketPurchaseScreen;

