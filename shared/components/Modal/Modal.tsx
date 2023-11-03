import React from 'react';
import { ModalProps } from 'antd';
import { StyledModal } from './ModalStyles';

export enum ModalSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
  HUGE = 'huge',
}

const modalWidths: { [key in ModalSize]: string } = {
  [ModalSize.SMALL]: '20.5rem',
  [ModalSize.MEDIUM]: '25rem',
  [ModalSize.LARGE]: '40rem',
  [ModalSize.HUGE]: '65rem',
};

export interface IModal extends ModalProps {
  children: React.ReactNode;
  size?: ModalSize;
  withFooter?: boolean;
  visible: boolean;
}

const Modal = ({
  children,
  size = ModalSize.MEDIUM,
  withFooter,
  visible,
  ...props
}: IModal): JSX.Element => (
  <StyledModal
    {...props}
    width={modalWidths[size]}
    {...(withFooter ? {} : { footer: null })}
    open={visible}
  >
    {children}
  </StyledModal>
);

export default Modal;
