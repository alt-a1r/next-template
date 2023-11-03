import { Avatar } from 'antd';
import styled, { css } from 'styled-components';
import { pickThemeFontSize } from '@/theme';

export const sizeMap: Record<'large' | 'small' | 'default', number> = {
  small: 24,
  default: 32,
  large: 40,
};

const getSize = (size: 'large' | 'small' | 'default' | number) => {
  const sizePx = typeof size === 'string' ? sizeMap[size] : size;
  return css`
    width: ${sizePx}px;
    height: ${sizePx}px;
  `;
};

export const StyledAvatarWrapper = styled.div<{
  $size: 'large' | 'small' | 'default' | number;
}>`
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  ${({ $size }) => getSize($size)}
  position: relative;
`;

export const StyledAvatar = styled(Avatar)`
  flex-shrink: 0;
  ${({ size }) =>
    typeof size === 'number' &&
    size < 24 &&
    css`
      font-size: ${pickThemeFontSize('12')}!important;
    `};
`;
