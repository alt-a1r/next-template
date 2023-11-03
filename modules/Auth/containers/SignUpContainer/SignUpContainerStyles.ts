import styled from 'styled-components';
import { COLORS, pickThemeFontStyles } from '@/theme';

export const StyledMessage = styled.div`
  ${pickThemeFontStyles('18', '22', 'SEMI_BOLD')};
  color: ${COLORS.DARK_GRAY};
  text-align: center;

  & > div:last-child {
    ${pickThemeFontStyles('16', '20', 'SEMI_BOLD')};
    color: ${COLORS.DARKEST_GRAY};
    margin-top: 0.5rem;
  }
`;
