import React from 'react';
import { InputProps } from 'antd';
import { StyledPasswordInput } from './InputStyles';

export type IInputProps = InputProps;

const PasswordInput = ({
  prefix,
  value,
  ...props
}: IInputProps): JSX.Element => (
  <StyledPasswordInput {...props} value={value} prefix={prefix} />
);

export default PasswordInput;
