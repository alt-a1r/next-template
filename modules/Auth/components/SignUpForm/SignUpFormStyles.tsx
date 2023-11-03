import styled from 'styled-components';
import { DEVICES, pickThemeFontStyles } from '@/theme';

export const StyledTermsWrap = styled.div`
  ${pickThemeFontStyles('12', '18')};
  margin-bottom: 1rem;

  & a {
    font-weight: 600;
  }

  @media screen and ${DEVICES.LAPTOP_S} {
    ${pickThemeFontStyles('14', '16')};
    margin-bottom: 1.5rem;
  }
`;
