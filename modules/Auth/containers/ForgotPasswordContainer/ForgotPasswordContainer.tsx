// Globals
import React, { useCallback } from 'react';
import { useTranslation } from 'next-i18next';

// Store
import { useAppDispatch, useAppState } from '@/store';
import { forgotPassword } from '../../feature/actionCreators';
import { selectAuthIsLoading } from '../../feature/selectors';

// Components
import { MessageModal, useForm } from '@/components';
import { ForgotPasswordForm } from '../../components';

// Helpers
import { useModal } from '@/hooks';
import { TForgotPasswordFormValues } from '../../helpers/types';
import ForgotPasswordDTO from '../../dtos/ForgotPasswordDTO';

const ForgotPasswordContainer = () => {
  const { t } = useTranslation(['auth']);
  const [form] = useForm();

  const dispatch = useAppDispatch();
  const isLoading = useAppState(selectAuthIsLoading);

  const { isOpened, openModal, closeModal } = useModal();

  const handleSubmit = useCallback(
    async (values: TForgotPasswordFormValues) => {
      const forgotPasswordDto = new ForgotPasswordDTO(values);

      try {
        await dispatch(forgotPassword(forgotPasswordDto)).unwrap();
        form.resetFields();
        openModal();
      } catch {}
    },
    [dispatch, form, openModal],
  );

  return (
    <>
      <ForgotPasswordForm
        formInstance={form}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
      />

      <MessageModal
        isOpened={isOpened}
        handleClose={closeModal}
        message={t('forgot_password_sent_title')}
        additionalMessage={t('forgot_password_sent_message')}
      />
    </>
  );
};

export default ForgotPasswordContainer;
