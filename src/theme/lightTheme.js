import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#6366F1",
    },
    secondary: {
      main: "#EC4899",
    },
    warning: {
      main: "#F59E0B",
    },
    success: {
      main: "#10B981",
    },
    background: {
      default: "#F5F5F7",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
});
