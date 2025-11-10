// Design tokens based on TGC Figma Guide

export const tokens = {
  // Spacing system (base unit: 4px)
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    '2xl': 40,
    '3xl': 48,
    '4xl': 64,
  },

  // Border radius
  borderRadius: {
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    full: 50,
  },

  // Typography scale
  typography: {
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    fontFamilyMono: "'SF Mono', Monaco, 'Cascadia Code', 'Courier New', monospace",
    
    heading: {
      xl: { fontSize: '2.5rem', fontWeight: 800, lineHeight: 1.2 },
      lg: { fontSize: '1.75rem', fontWeight: 700, lineHeight: 1.3 },
      md: { fontSize: '1.25rem', fontWeight: 700, lineHeight: 1.4 },
    },
    body: {
      lg: { fontSize: '1.125rem', fontWeight: 400, lineHeight: 1.6 },
      md: { fontSize: '1rem', fontWeight: 400, lineHeight: 1.6 },
      sm: { fontSize: '0.875rem', fontWeight: 400, lineHeight: 1.5 },
    },
    caption: { fontSize: '0.75rem', fontWeight: 400, lineHeight: 1.4 },
  },

  // Colors - Light Theme
  light: {
    primary: {
      main: '#6366F1',
      light: '#818CF8',
      dark: '#4F46E5',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#EC4899',
      light: '#F472B6',
      dark: '#DB2777',
      contrastText: '#FFFFFF',
    },
    accent: {
      main: '#10B981',
      light: '#34D399',
      dark: '#059669',
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#F59E0B',
      light: '#FBBF24',
      dark: '#D97706',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#FAFAFA',
      paper: '#FFFFFF',
      elevated: '#FFFFFF',
    },
    text: {
      primary: '#1F2937',
      secondary: '#6B7280',
      disabled: '#9CA3AF',
    },
    border: {
      default: '#E5E7EB',
    },
    divider: '#E5E7EB',
  },

  // Colors - Dark Theme
  dark: {
    primary: {
      main: '#818CF8',
      light: '#A5B4FC',
      dark: '#6366F1',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#F472B6',
      light: '#F9A8D4',
      dark: '#EC4899',
      contrastText: '#FFFFFF',
    },
    accent: {
      main: '#34D399',
      light: '#6EE7B7',
      dark: '#10B981',
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#FBBF24',
      light: '#FCD34D',
      dark: '#F59E0B',
      contrastText: '#000000',
    },
    background: {
      default: '#111827',
      paper: '#1F2937',
      elevated: '#1F2937',
    },
    text: {
      primary: '#F9FAFB',
      secondary: '#9CA3AF',
      disabled: '#6B7280',
    },
    border: {
      default: '#374151',
    },
    divider: '#374151',
  },

  // Shadows
  shadows: {
    light: {
      sm: '0 4px 6px rgba(0, 0, 0, 0.05)',
      md: '0 12px 24px rgba(0, 0, 0, 0.1)',
      primary: '0 4px 12px rgba(99, 102, 241, 0.3)',
      secondary: '0 4px 12px rgba(236, 72, 153, 0.3)',
      accent: '0 4px 12px rgba(16, 185, 129, 0.3)',
    },
    dark: {
      sm: '0 4px 6px rgba(0, 0, 0, 0.3)',
      md: '0 12px 24px rgba(0, 0, 0, 0.5)',
      primary: '0 4px 12px rgba(129, 140, 248, 0.3)',
      secondary: '0 4px 12px rgba(244, 114, 182, 0.3)',
      accent: '0 4px 12px rgba(52, 211, 153, 0.3)',
    },
  },

  // Gradients
  gradients: {
    light: {
      primarySecondary: 'linear-gradient(135deg, #6366F1, #EC4899)',
      primaryAccent: 'linear-gradient(135deg, #6366F1, #10B981)',
      secondaryAccent: 'linear-gradient(135deg, #EC4899, #10B981)',
    },
    dark: {
      primarySecondary: 'linear-gradient(135deg, #818CF8, #F472B6)',
      primaryAccent: 'linear-gradient(135deg, #818CF8, #34D399)',
      secondaryAccent: 'linear-gradient(135deg, #F472B6, #34D399)',
    },
  },

  // Transitions
  transitions: {
    standard: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  },
};

