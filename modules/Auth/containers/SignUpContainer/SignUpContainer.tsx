// Globals
import React, { useCallback, useState } from 'react';
import { useTranslation } from 'next-i18next';

// Store
import { useAppDispatch, useAppState } from '@/store';
import { registerUser } from '../../feature/actionCreators';
import { selectAuthIsLoading } from '../../feature/selectors';

// Components
import { MessageModal, useForm } from '@/components';
import { SignUpForm } from '../../components';
import { StyledMessage } from './SignUpContainerStyles';

// Helpers
import { useModal } from '@/hooks';
import { TSignUpFormValues } from '../../helpers/types';
import RegistrationDTO from '../../dtos/RegistrationDTO';

const SignUpContainer = () => {
  const { t } = useTranslation(['auth']);
  const [form] = useForm();
  const [email, setEmail] = useState('');

  const dispatch = useAppDispatch();
  const isLoading = useAppState(selectAuthIsLoading);

  const { isOpened, openModal, closeModal } = useModal();

  const handleSubmit = useCallback(
    async (values: TSignUpFormValues) => {
      const registerDto = new RegistrationDTO({ ...values });
      try {
        const { data } = await dispatch(registerUser(registerDto)).unwrap();
        setEmail(data.email);
        form.resetFields();
        openModal();
      } catch {}
    },
    [form, dispatch, openModal],
  );

  return (
    <>
      <SignUpForm
        formInstance={form}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
      />

      <MessageModal
        isOpened={isOpened}
        handleClose={closeModal}
        message={t('confirm_email_title')}
        bottomMessage={t('confirm_email_hint')}
        additionalMessage={
          <StyledMessage>
            <div>{t('confirm_email_message')}</div>
            <div>{email}</div>
          </StyledMessage>
        }
      />
    </>
  );
};

export default SignUpContainer;
