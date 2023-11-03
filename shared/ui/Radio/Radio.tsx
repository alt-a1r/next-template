import React from 'react';
import { RadioProps } from 'antd';
import { StyledRadio } from './RadioStyles';

export interface IRadioProps extends RadioProps {
  placeholder?: string;
}

const Radio = ({
  placeholder,
  children,
  ...props
}: IRadioProps): JSX.Element => (
  <StyledRadio {...props}>{placeholder || children}</StyledRadio>
);

export default Radio;
