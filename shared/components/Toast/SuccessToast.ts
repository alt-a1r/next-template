import { message as AntdMessage } from 'antd';

interface IShowSuccessToast {
  message: string;
}

const showSuccessToast = ({ message }: IShowSuccessToast) =>
  AntdMessage.success({
    content: message || 'Success',
    className: 'template-toast-notification',
  });

export default showSuccessToast;
