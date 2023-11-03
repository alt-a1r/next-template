import styled from 'styled-components';
import { Layout } from '@/ui';
import { COLORS } from '@/theme';

export const StyledLayout = styled(Layout)`
  &.ant-layout {
    min-height: 100vh;
    background: ${COLORS.WHITE};
  }
`;
