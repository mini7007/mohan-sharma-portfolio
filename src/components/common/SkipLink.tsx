import styled from 'styled-components';

export const SkipLink = styled.a`
  position: fixed;
  left: 1rem;
  top: 1rem;
  z-index: 100;
  transform: translateY(-150%);
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.background};
  padding: 0.75rem 1rem;
  font-weight: 800;

  &:focus { transform: translateY(0); }
`;
