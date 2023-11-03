import React from 'react';
import { Form } from 'antd';
import { FormListFieldData, FormListProps } from 'antd/es/form';

export type IFormListProps = FormListProps;
export type IFormListField = FormListFieldData;

const FormList = ({ children, ...props }: IFormListProps): JSX.Element => (
  <Form.List {...props}>{children}</Form.List>
);

export default FormList;
