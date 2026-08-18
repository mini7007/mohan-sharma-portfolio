import styled from 'styled-components';

export const Eyebrow = styled.p`
  margin: 0 0 1rem;
  color: ${({ theme }) => theme.colors.accent};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.78rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
`;

export const Heading = styled.h1`
  max-width: 980px;
  margin: 0;
  font-size: clamp(3.2rem, 11vw, 9rem);
  line-height: 0.88;
  letter-spacing: -0.08em;
`;

export const Lead = styled.p`
  max-width: 680px;
  margin: 0;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: clamp(1.05rem, 2vw, 1.35rem);
  line-height: 1.65;
`;
