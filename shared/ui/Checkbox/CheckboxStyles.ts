import { Checkbox } from 'antd';
import styled from 'styled-components';
import { pickThemeFontStyles } from '@/theme';

export const StyledCheckbox = styled(Checkbox)`
  &.ant-checkbox-wrapper {
    ${pickThemeFontStyles('14', '20')};
    align-items: center;

    & .ant-checkbox {
      top: 0;
    }
  }

  & .ant-checkbox-inner {
    width: 1.25rem;
    height: 1.25rem;
  }

  & .ant-checkbox-checked .ant-checkbox-inner {
    &::after {
      width: 6.7px;
      height: 11.42px;
    }
  }

  & .ant-checkbox + span {
    padding-right: 1rem;
    padding-left: 1rem;
  }
`;
