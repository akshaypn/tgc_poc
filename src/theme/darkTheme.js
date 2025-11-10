import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#818CF8',
    },
    secondary: {
      main: '#F472B6',
    },
    warning: {
      main: '#FBBF24',
    },
    success: {
      main: '#34D399',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
});

