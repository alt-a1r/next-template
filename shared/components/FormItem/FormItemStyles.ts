import { Form } from 'antd';
import styled from 'styled-components';

export const StyledFormItem = styled(Form.Item)`
  & .ant-form-item-label {
    padding-bottom: 0.25rem;
  }
  .ant-form-item-control-input {
    min-height: auto;
  }
`;
