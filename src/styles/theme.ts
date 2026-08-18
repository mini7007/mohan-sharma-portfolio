export const theme = {
  colors: {
    background: '#0b0d10',
    backgroundSoft: '#11151b',
    surface: '#151a21',
    surfaceElevated: '#1b212a',
    text: '#f6f1e8',
    textMuted: '#a9a298',
    textSubtle: '#6f756f',
    accent: '#d7a85d',
    accentBlue: '#75a7ff',
    success: '#6de19f',
    border: 'rgba(246, 241, 232, 0.12)',
  },
  fonts: {
    body: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    mono: '"SFMono-Regular", Consolas, "Liberation Mono", monospace',
  },
  space: {
    xs: '0.5rem',
    sm: '0.75rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4.5rem',
    '4xl': '7rem',
  },
  radii: {
    sm: '0.75rem',
    md: '1.25rem',
    lg: '2rem',
    pill: '999px',
  },
  breakpoints: {
    sm: '390px',
    md: '768px',
    lg: '1024px',
    xl: '1440px',
  },
  shadows: {
    nav: '0 18px 70px rgba(0, 0, 0, 0.25)',
    card: '0 24px 80px rgba(0, 0, 0, 0.32)',
  },
} as const;

export type AppTheme = typeof theme;
