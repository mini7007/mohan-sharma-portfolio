import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const buttonStyles = css<{ $variant?: 'primary' | 'secondary' }>`
  display: inline-flex;
  min-height: 3rem;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme, $variant }) => ($variant === 'primary' ? 'transparent' : theme.colors.border)};
  border-radius: ${({ theme }) => theme.radii.pill};
  padding: 0.85rem 1.15rem;
  background: ${({ theme, $variant }) => ($variant === 'primary' ? theme.colors.text : 'rgba(255, 255, 255, 0.035)')};
  color: ${({ theme, $variant }) => ($variant === 'primary' ? theme.colors.background : theme.colors.text)};
  font-weight: 700;
  letter-spacing: -0.01em;
  transition: transform 180ms ease, border-color 180ms ease, background 180ms ease;

  &:hover {
    transform: translateY(-2px);
    border-color: ${({ theme }) => theme.colors.accent};
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:hover { transform: none; }
  }
`;

export const ButtonLink = styled(Link)<{ $variant?: 'primary' | 'secondary' }>`
  ${buttonStyles}
`;

export const ExternalButtonLink = styled.a<{ $variant?: 'primary' | 'secondary' }>`
  ${buttonStyles}
`;
