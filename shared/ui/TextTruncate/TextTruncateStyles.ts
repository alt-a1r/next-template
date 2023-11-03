import styled from 'styled-components';
import { Typography } from 'antd';
import {
  COLORS,
  DEVICES,
  pickThemeFontSize,
  pickThemeFontStyles,
} from '@/theme';
import { ChevronIcon } from '@/icons';

const { Paragraph } = Typography;

export const StyledParagraph = styled(Paragraph)`
  &.ant-typography {
    margin: 0;
  }
`;

export const StyledMoreButton = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  ${pickThemeFontStyles('14', '20', 'SEMI_BOLD')};

  & .anticon {
    font-size: ${pickThemeFontSize('24')};
    color: ${COLORS.DARK_GRAY};
  }

  @media screen and ${DEVICES.LAPTOP_S} {
    ${pickThemeFontStyles('16', '24', 'BOLD')};
  }
`;

export const StyledUpIcon = styled(ChevronIcon)`
  transform: rotate(180deg);
`;
