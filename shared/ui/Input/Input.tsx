import React from 'react';
import { InputProps } from 'antd';
import { StyledInput } from './InputStyles';

export type IInputProps = InputProps;

const Input = ({ prefix, value, ...props }: IInputProps): JSX.Element => (
  <StyledInput {...props} value={value} prefix={prefix} />
);

export default Input;
