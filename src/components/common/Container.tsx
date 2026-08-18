import styled from 'styled-components';

export const Container = styled.div`
  width: min(100% - 2rem, 1240px);
  margin-inline: auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: min(100% - 4rem, 1240px);
  }
`;
