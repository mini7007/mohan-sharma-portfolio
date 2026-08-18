import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const AppLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 700;
  text-decoration-color: ${({ theme }) => theme.colors.accent};
  text-decoration-line: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 0.3em;
`;
