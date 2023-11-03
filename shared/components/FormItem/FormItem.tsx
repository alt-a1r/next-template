import React from 'react';
import { FormItemProps as AntdFormItemsProps } from 'antd';
import { StyledFormItem } from './FormItemStyles';

export type IFormItemProps = AntdFormItemsProps;

const FormItem = ({ children, ...props }: IFormItemProps): JSX.Element => (
  <StyledFormItem {...props}>{children}</StyledFormItem>
);

export default FormItem;
