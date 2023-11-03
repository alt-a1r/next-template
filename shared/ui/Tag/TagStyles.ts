import styled from 'styled-components';
import {
  COLORS,
  DEVICES,
  pickThemeFontSize,
  pickThemeFontStyles,
} from '@/theme';

export const StyledTag = styled.div<{ $primaryColor: string }>`
  ${pickThemeFontStyles('12', '22', 'SEMI_BOLD')};
  border: 1px solid ${({ $primaryColor }) => $primaryColor};
  border-radius: 3rem;
  padding: 0 0.625rem;
  display: inline-flex;
  gap: 0.25rem;
  align-items: center;

  & .anticon {
    font-size: ${pickThemeFontSize('16')};
    color: ${COLORS.DARK_GRAY};
  }

  @media screen and ${DEVICES.LAPTOP_S} {
    ${pickThemeFontStyles('16', '30', 'SEMI_BOLD')};
    padding: 0 0.75rem;

    & .anticon {
      font-size: ${pickThemeFontSize('24')};
      color: ${COLORS.DARK_GRAY};
    }
  }
`;
