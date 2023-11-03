import { createGlobalStyle } from 'styled-components';
import { COLORS } from '@/theme';

export const TooltipGlobalStyle = createGlobalStyle`
  .ant-tooltip-inner {
    color: ${COLORS.DARKEST_GRAY}!important;
  }
`;
