import React from 'react';
import { Form as AntdForm, FormProps, FormInstance } from 'antd';

export interface IFormProps extends FormProps {
  children: React.ReactNode;
}

export type IFormInstance = FormInstance;
export type TFieldsErrors = ReturnType<IFormInstance['getFieldsError']>;

export const { useForm, useWatch: useWatchForm, useFormInstance } = AntdForm;

const Form = ({ children, ...props }: IFormProps): JSX.Element => {
  return (
    <AntdForm layout='vertical' {...props}>
      {children}
    </AntdForm>
  );
};

export default Form;
