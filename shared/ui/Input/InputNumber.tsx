import React, { useEffect, useState } from 'react';
import { InputNumberProps } from 'antd';
import { StyledInputNumber } from './InputStyles';

export type IInputNumberProps = InputNumberProps;

const InputNumber = ({
  prefix,
  value,
  min = 0,
  ...props
}: IInputNumberProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <StyledInputNumber
      {...props}
      value={value}
      bordered={false}
      prefix={prefix}
      min={min}
      inputMode='numeric'
    />
  );
};

export default InputNumber;
