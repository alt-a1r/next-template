import styled, { css } from 'styled-components';
import { Input, Input as AntInput, InputNumber } from 'antd';
import {
  COLORS,
  DEVICES,
  pickThemeFontSize,
  pickThemeFontStyles,
} from '@/theme';

export const inputStyles = css`
  &.ant-input {
    width: 100%;
    background: ${COLORS.LIGHTEST_GRAY};
    ${pickThemeFontStyles('14', '20')};
  }

  &.ant-input-affix-wrapper {
    overflow: hidden;

    & .ant-input {
      background: ${COLORS.LIGHTEST_GRAY};
      ${pickThemeFontStyles('14', '20')};
    }

    & .ant-input-suffix {
      font-size: ${pickThemeFontSize('20')};
      background: ${COLORS.LIGHTEST_GRAY};
      margin: 0;
    }

    & .ant-input-prefix {
      font-size: ${pickThemeFontSize('20')};
      background: ${COLORS.LIGHTEST_GRAY};
      margin: 0;
      //padding: 0 0.625rem 0 1rem;

      & + .ant-input {
        //padding: 1.375rem 1rem 0.5rem 0;
      }
    }
  }

  @media screen and ${DEVICES.LAPTOP_S} {
    &.ant-input {
      ${pickThemeFontStyles('16', '24')};
    }

    &.ant-input-affix-wrapper {
      & .ant-input {
        ${pickThemeFontStyles('16', '24')};
      }

      & .ant-input-prefix + .ant-input {
        //padding: 1.625rem 1rem 0.5rem 0;
      }
    }
  }
`;

export const StyledInput = styled(AntInput)`
  ${inputStyles};
`;

export const StyledInputNumber = styled(InputNumber)`
  &.ant-input-number {
    width: 100%;
    background: ${COLORS.LIGHTEST_GRAY};
    ${pickThemeFontStyles('14', '20')};

    & .ant-input-number-input-wrap {
      & input {
        //padding: 1.625rem 1rem 0.5rem;
        //height: auto;
        color: ${COLORS.DARKEST_GRAY};
        ${pickThemeFontStyles('16', '20', 'SEMI_BOLD')};
      }
    }
  }
`;

export const StyledPasswordInput = styled(AntInput.Password)`
  ${inputStyles};
`;

export const StyledTextArea = styled(Input.TextArea)`
  ${inputStyles}
`;
