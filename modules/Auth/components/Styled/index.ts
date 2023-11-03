import styled from 'styled-components';
import { Button } from '@/ui';
import { DEVICES, pickThemeFontStyles } from '@/theme';

export const StyledTitle = styled.div`
  ${pickThemeFontStyles('18', '24', 'BOLD')};
  margin-bottom: 0.5rem;

  @media screen and ${DEVICES.LAPTOP_S} {
    ${pickThemeFontStyles('24', '32', 'BOLD')};
  }
`;

export const StyledMessage = styled.div`
  ${pickThemeFontStyles('14', '20', 'SEMI_BOLD')};
  margin-bottom: 1.5rem;

  @media screen and ${DEVICES.LAPTOP_S} {
    ${pickThemeFontStyles('16', '24', 'SEMI_BOLD')};
  }
`;

export const StyledLinkBlock = styled.div`
  ${pickThemeFontStyles('14', '18', 'SEMI_BOLD')};
  padding: 0.75rem;
  text-align: center;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  @media screen and ${DEVICES.LAPTOP_S} {
    ${pickThemeFontStyles('16', '24', 'SEMI_BOLD')};

    &:not(:last-child) {
      margin-bottom: 1.5rem;
    }
  }
`;

export const StyledButton = styled(Button)`
  width: 100%;
  margin-bottom: 1rem;

  @media screen and ${DEVICES.LAPTOP_S} {
    margin-bottom: 1.5rem;
  }
`;
