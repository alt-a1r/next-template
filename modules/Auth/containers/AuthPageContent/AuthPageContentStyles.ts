import styled from 'styled-components';
import { COLORS, DEVICES } from '@/theme';

export const StyledPageWrapper = styled.div`
  padding: 1.5rem 1rem;
  background: ${COLORS.WHITE};
  min-height: 100vh;

  @media screen and ${DEVICES.LAPTOP_S} {
    padding: 2.5rem;
    background: initial;
    min-height: 85vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledFormWrapper = styled.div`
  width: 100%;
  background: ${COLORS.WHITE};

  @media screen and ${DEVICES.LAPTOP_S} {
    max-width: 30rem;
    padding: 2rem;
    box-shadow: 0 0 4px rgba(151, 151, 151, 0.32);
    border-radius: 0.5rem;
  }
`;
