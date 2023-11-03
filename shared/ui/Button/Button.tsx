import React, { ForwardedRef, forwardRef } from 'react';
import { ButtonProps } from 'antd';
import { StyledButton } from './ButtonStyles';
import { useThemeToken } from '@/hooks';

export type IButtonProps = ButtonProps;

const Button = (
  {
    children,
    size = 'large',
    loading,
    disabled,
    className,
    ...props
  }: IButtonProps,
  ref: ForwardedRef<HTMLButtonElement>,
): JSX.Element => {
  const token = useThemeToken();
  return (
    <StyledButton
      $primaryColor={token.colorPrimary}
      ref={ref}
      size={size}
      {...props}
      loading={loading}
      disabled={disabled || !!loading}
      className={`${className} template-button`}
    >
      {children}
    </StyledButton>
  );
};

export default forwardRef<HTMLButtonElement, IButtonProps>(Button);
