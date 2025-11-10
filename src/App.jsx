import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Box } from '@mui/material';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import AppRouter from './routes/AppRouter';
import AppHeader from './components/common/Navigation/AppHeader';
import Sidebar from './components/common/Navigation/Sidebar';
import BottomNav from './components/common/Navigation/BottomNav';

const AppContent = () => {
  const { isAuthenticated } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      {isAuthenticated && (
        <>
          <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
          <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
            <AppHeader onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                bgcolor: 'background.paper',
                pb: { xs: 8, md: 0 },
              }}
            >
              <AppRouter />
            </Box>
            <BottomNav />
          </Box>
        </>
      )}
      {!isAuthenticated && <AppRouter />}
    </Box>
  );
};

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <AppContent />
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

