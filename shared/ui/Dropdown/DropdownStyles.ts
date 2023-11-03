import { createGlobalStyle } from 'styled-components';
import { COLORS, pickThemeFontSize, pickThemeFontStyles } from '@/theme';

export const DropdownGlobalStyle = createGlobalStyle`
  .template-dropdown-overlay {
    & .ant-dropdown-menu.ant-dropdown-menu-vertical {
      & .ant-dropdown-menu-item {
        ${pickThemeFontStyles('16', '24', 'SEMI_BOLD')};
        padding: 0.5rem 0.75rem;

        & .anticon {
          font-size: ${pickThemeFontSize('24')};
          color: ${COLORS.DARK_GRAY};
        }
      }
    }

  }
`;
