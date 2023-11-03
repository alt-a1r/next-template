import styled from 'styled-components';
import { DEVICES } from '@/theme';

export const StyledButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;

  & button {
    width: 100%;
  }

  @media screen and ${DEVICES.LAPTOP_S} {
    & button {
      width: auto;
    }
  }
`;
