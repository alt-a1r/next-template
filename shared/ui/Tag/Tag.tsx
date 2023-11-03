import React, { ReactNode } from 'react';
import { CloseIcon } from '@/icons';
import { PureIconButton } from '@/ui';
import { useThemeToken } from '@/hooks';
import { StyledTag } from './TagStyles';

interface ITag {
  children: ReactNode;
  onClose?: () => void;
}

const Tag = ({ children, onClose }: ITag) => {
  const token = useThemeToken();
  return (
    <StyledTag $primaryColor={token.colorPrimary}>
      {children}
      {!!onClose && (
        <PureIconButton onClick={onClose} type={'button'}>
          <CloseIcon />
        </PureIconButton>
      )}
    </StyledTag>
  );
};

export default Tag;
