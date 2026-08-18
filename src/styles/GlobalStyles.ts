import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; }
  html { scroll-behavior: smooth; color-scheme: dark; }
  @media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } }
  body {
    margin: 0;
    min-width: 320px;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.body};
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }
  a { color: inherit; text-decoration: none; }
  button, input, textarea { font: inherit; }
  img, svg { display: block; max-width: 100%; }
  :focus-visible { outline: 2px solid ${({ theme }) => theme.colors.accent}; outline-offset: 4px; }
  ::selection { background: ${({ theme }) => theme.colors.accent}; color: ${({ theme }) => theme.colors.background}; }
`;
