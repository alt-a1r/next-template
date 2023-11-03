import { Button, ButtonProps } from 'antd';
import styled, { css } from 'styled-components';
import { pickThemeFontSize, pickThemeFontStyles } from '@/theme';

const getStylesByType = (size: ButtonProps['type'], primaryColor: string) => {
  switch (size) {
    case 'primary':
    case 'ghost':
    case 'dashed':
    case 'link':
    case 'text':
      return css``;
    case 'default':
    default:
      return css`
        border: 2px solid ${primaryColor};
      `;
  }
};

const getStylesBySize = (size: ButtonProps['size']) => {
  switch (size) {
    case 'small': {
      return css``;
    }
    case 'large':
      return css`
        height: 3rem;
      `;
    case 'middle':
      return css`
        height: 2rem;
      `;
    default:
      return css``;
  }
};

export const StyledButton = styled(Button)<
  ButtonProps & { $primaryColor: string }
>`
  &.ant-btn.template-button {
    ${pickThemeFontStyles('14', '18', 'BOLD')};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-shadow: none;
    height: auto;
    padding: 0 1rem;
    border-radius: 0.5rem;

    & .anticon {
      ${pickThemeFontStyles('24', '24')};
      height: ${pickThemeFontSize('24')};
    }

    ${(props) => getStylesBySize(props.size)}
    ${(props) => getStylesByType(props.type, props.$primaryColor)}
  }
`;
