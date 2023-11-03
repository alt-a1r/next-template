import styled from 'styled-components';
import { DEVICES, pickThemeFontStyles } from '@/theme';

export const StyledWrapper = styled.div`
  text-align: center;
  padding: 2.5rem 1rem;
  max-width: 40rem;
  margin: 0 auto;

  @media screen and ${DEVICES.LAPTOP_S} {
    padding: 6.75rem;
  }
`;

export const StyledImageWrapper = styled.div`
  position: relative;
  height: 14.75rem;
  margin-bottom: 2rem;

  & img {
    object-fit: contain;
  }

  @media screen and ${DEVICES.LAPTOP_S} {
    height: 21.75rem;
    margin-bottom: 1.5rem;
  }
`;

export const StyledTitle = styled.div`
  ${pickThemeFontStyles('24', '32', 'BOLD')};
  margin-bottom: 0.5rem;

  @media screen and ${DEVICES.LAPTOP_S} {
    ${pickThemeFontStyles('48', '56', 'BOLD')};
    margin-bottom: 1.5rem;
  }
`;

export const StyledMessage = styled.div`
  ${pickThemeFontStyles('14', '20')};
  margin-bottom: 1.5rem;

  @media screen and ${DEVICES.LAPTOP_S} {
    ${pickThemeFontStyles('16', '24')};
    margin-bottom: 2rem;
  }
`;
