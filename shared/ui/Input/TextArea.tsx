import React from 'react';
import { TextAreaProps } from 'antd/es/input';
import { StyledTextArea } from './InputStyles';

export type ITextAreaProps = TextAreaProps;

const TextArea = ({ value, ...props }: ITextAreaProps): JSX.Element => (
  <StyledTextArea {...props} value={value} />
);

export default TextArea;
