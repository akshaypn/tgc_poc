import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// Auth Screens
import WelcomeScreen from '../screens/auth/WelcomeScreen';
import ProfileSetupScreen from '../screens/auth/ProfileSetupScreen';

// Participant Screens
import HomeScreen from '../screens/participant/HomeScreen';
import EventsScreen from '../screens/participant/EventsScreen';
import EventDetailScreen from '../screens/participant/EventDetailScreen';
import TicketPurchaseScreen from '../screens/participant/TicketPurchaseScreen';
import MyTicketsScreen from '../screens/participant/MyTicketsScreen';
import ProfileScreen from '../screens/participant/ProfileScreen';
import EditProfileScreen from '../screens/participant/EditProfileScreen';
import CommunityListScreen from '../screens/participant/CommunityListScreen';
import CommunityDetailScreen from '../screens/participant/CommunityDetailScreen';
import CommunityChatScreen from '../screens/participant/CommunityChatScreen';
import EventChatScreen from '../screens/participant/EventChatScreen';
import KarmaHistoryScreen from '../screens/participant/KarmaHistoryScreen';
import RatingScreen from '../screens/participant/RatingScreen';
import NotificationsScreen from '../screens/participant/NotificationsScreen';

// Admin Screens
import AdminDashboard from '../screens/admin/AdminDashboard';
import CreateEventScreen from '../screens/admin/CreateEventScreen';
import VenueManagementScreen from '../screens/admin/VenueManagementScreen';
import PayoutsScreen from '../screens/admin/PayoutsScreen';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

const AdminRoute = ({ children }) => {
  const { user } = useAuth();
  return user?.role === 'superadmin' ? children : <Navigate to="/" replace />;
};

const AppRouter = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      {/* Public Routes */}
      <Route
        path="/login"
        element={isAuthenticated ? <Navigate to="/" replace /> : <WelcomeScreen />}
      />
      <Route path="/signup" element={<ProfileSetupScreen />} />
      <Route path="/setup-profile" element={<ProfileSetupScreen />} />

      {/* Protected Participant Routes */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <HomeScreen />
          </ProtectedRoute>
        }
      />
      <Route
        path="/events"
        element={
          <ProtectedRoute>
            <EventsScreen />
          </ProtectedRoute>
        }
      />
      <Route
        path="/events/:id"
        element={
          <ProtectedRoute>
            <EventDetailScreen />
          </ProtectedRoute>
        }
      />
      <Route
        path="/events/:id/purchase"
        element={
          <ProtectedRoute>
            <TicketPurchaseScreen />
          </ProtectedRoute>
        }
      />
      <Route
        path="/events/:id/chat"
        element={
          <ProtectedRoute>
            <EventChatScreen />
          </ProtectedRoute>
        }
      />
      <Route
        path="/events/:id/review"
        element={
          <ProtectedRoute>
            <RatingScreen />
          </ProtectedRoute>
        }
      />
      <Route
        path="/tickets"
        element={
          <ProtectedRoute>
            <MyTicketsScreen />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <ProfileScreen />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile/edit"
        element={
          <ProtectedRoute>
            <EditProfileScreen />
          </ProtectedRoute>
        }
      />
      <Route
        path="/communities"
        element={
          <ProtectedRoute>
            <CommunityListScreen />
          </ProtectedRoute>
        }
      />
      <Route
        path="/communities/:id"
        element={
          <ProtectedRoute>
            <CommunityDetailScreen />
          </ProtectedRoute>
        }
      />
      <Route
        path="/communities/:id/chat"
        element={
          <ProtectedRoute>
            <CommunityChatScreen />
          </ProtectedRoute>
        }
      />
      <Route
        path="/karma"
        element={
          <ProtectedRoute>
            <KarmaHistoryScreen />
          </ProtectedRoute>
        }
      />
      <Route
        path="/notifications"
        element={
          <ProtectedRoute>
            <NotificationsScreen />
          </ProtectedRoute>
        }
      />

      {/* Admin Routes */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/create-event"
        element={
          <ProtectedRoute>
            <AdminRoute>
              <CreateEventScreen />
            </AdminRoute>
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/venues"
        element={
          <ProtectedRoute>
            <AdminRoute>
              <VenueManagementScreen />
            </AdminRoute>
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/payouts"
        element={
          <ProtectedRoute>
            <AdminRoute>
              <PayoutsScreen />
            </AdminRoute>
          </ProtectedRoute>
        }
      />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRouter;

