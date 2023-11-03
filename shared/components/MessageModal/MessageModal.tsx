import React, { ReactNode } from 'react';
import {
  StyledAdditionalMessage,
  StyledBottomMessageMessage,
  StyledContent,
  StyledErrorIcon,
  StyledMessage,
  StyledMessageModal,
  StyledSuccessIcon,
} from './MessageModalStyles';

export enum MessageModalTypes {
  SUCCESS = 'SUCCESS',
  WARNING = 'WARNING',
  ERROR = 'ERROR',
}

export interface IMessageModal {
  isOpened: boolean;
  type?: MessageModalTypes;
  message: string;
  additionalMessage?: string | ReactNode;
  bottomMessage?: string | ReactNode;
  handleClose?: () => void;
  afterClose?: () => void;
}

const MessageModal = ({
  isOpened,
  type = MessageModalTypes.SUCCESS,
  message,
  additionalMessage,
  bottomMessage,
  handleClose,
  afterClose,
  ...props
}: IMessageModal): JSX.Element => {
  return (
    <StyledMessageModal
      {...props}
      open={isOpened}
      afterClose={afterClose}
      destroyOnClose
      onCancel={handleClose}
      footer={null}
      maskStyle={{ background: 'rgba(0, 0, 0, 0.78)' }}
    >
      <StyledContent>
        {type === MessageModalTypes.SUCCESS && <StyledSuccessIcon />}
        {type === MessageModalTypes.ERROR && <StyledErrorIcon />}
        <StyledMessage>{message}</StyledMessage>

        {additionalMessage &&
          (typeof additionalMessage === 'string' ? (
            <StyledAdditionalMessage>
              {additionalMessage}
            </StyledAdditionalMessage>
          ) : (
            additionalMessage
          ))}

        {bottomMessage &&
          (typeof bottomMessage === 'string' ? (
            <StyledBottomMessageMessage>
              {bottomMessage}
            </StyledBottomMessageMessage>
          ) : (
            bottomMessage
          ))}
      </StyledContent>
    </StyledMessageModal>
  );
};

export default MessageModal;
