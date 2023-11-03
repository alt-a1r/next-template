import React from 'react';
import { CheckboxProps } from 'antd';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { StyledCheckbox } from './CheckboxStyles';

export type ICheckboxChangeEvent = CheckboxChangeEvent;
export interface ICheckboxProps extends CheckboxProps {
  placeholder?: string;
}

const Checkbox = ({
  placeholder,
  children,
  ...props
}: ICheckboxProps): JSX.Element => (
  <StyledCheckbox {...props}>{placeholder || children}</StyledCheckbox>
);

export default Checkbox;
