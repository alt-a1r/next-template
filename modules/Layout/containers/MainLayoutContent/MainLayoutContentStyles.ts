import styled from 'styled-components';
import { LayoutContent } from '@/ui';
import { DEVICES } from '@/theme';

export const StyledContent = styled(LayoutContent)`
  width: 100%;
  padding: 0;
  margin: 0 auto;
  position: relative;
  z-index: 1;

  @media screen and ${DEVICES.LAPTOP_S} {
    padding: 0 3rem;
    max-width: 88rem;
  }
`;
