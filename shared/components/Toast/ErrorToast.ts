import { message as AntdMessage } from 'antd';
import { createGlobalStyle } from 'styled-components';
import { DEVICES } from '@/theme';

interface IShowErrorToast {
  message: string;
}

export const ToastGlobalStyle = createGlobalStyle`
  .template-toast-notification {
    text-align: end;
    margin: 0 1rem;

    &:first-child {
      margin: 3.5rem 1rem 0;
    }

    @media screen and ${DEVICES.LAPTOP_S} {
      margin: 0 3rem;

      &:first-child {
        margin: 4rem 3rem 0;
      }
    }
  }
`;

const showErrorToast = ({ message }: IShowErrorToast) => {
  if (typeof window === 'undefined') {
    return null;
  }

  return AntdMessage.error({
    content: message || 'Error',
    className: 'template-toast-notification',
  });
};

export default showErrorToast;
