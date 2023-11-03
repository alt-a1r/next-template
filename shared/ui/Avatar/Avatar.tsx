import React, { useMemo } from 'react';
import { AvatarProps } from 'antd';
import Image from '../Image/Image';
import { StyledAvatar, StyledAvatarWrapper } from './AvatarStyles';

export interface IAvatarProps extends AvatarProps {
  src?: string | null;
  name?: string;
  size?: 'large' | 'small' | 'default' | number;
  className?: string;
  onClick?: () => void;
}

const Avatar = ({
  src,
  name = '',
  size = 'default',
  className,
  ...props
}: IAvatarProps): JSX.Element => {
  const initials = useMemo(() => {
    if (src || !name) {
      return '';
    }

    return name
      .split(' ')
      .reduce((acc, item) => acc + (item[0] || '').toUpperCase(), '');
  }, [src, name]);

  return src ? (
    <StyledAvatarWrapper className={className} $size={size}>
      <Image src={src} alt={initials} {...props} />
    </StyledAvatarWrapper>
  ) : (
    <StyledAvatar size={size} className={className} {...props}>
      {initials}
    </StyledAvatar>
  );
};

export default Avatar;
