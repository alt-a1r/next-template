import dynamic from 'next/dynamic';

export { ModalSize } from './Modal/Modal';
export { useForm, useWatchForm, useFormInstance } from './Form/Form';
export { default as showSuccessToast } from './Toast/SuccessToast';
export {
  default as showErrorToast,
  ToastGlobalStyle,
} from './Toast/ErrorToast';

export const PageHead = dynamic(() => import('./PageHead/PageHead'));
export const Form = dynamic(() => import('./Form/Form'));
export const FormItem = dynamic(() => import('./FormItem/FormItem'));
export const FormList = dynamic(() => import('./FormList/FormList'));
export const Modal = dynamic(() => import('./Modal/Modal'));
export const MessageModal = dynamic(
  () => import('./MessageModal/MessageModal'),
);

export const Image = dynamic(() => import('./Image/Image'));

export type { IFormProps, IFormInstance, TFieldsErrors } from './Form/Form';
export type { IFormItemProps } from './FormItem/FormItem';
export type { IFormListProps, IFormListField } from './FormList/FormList';
