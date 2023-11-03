// Globals
import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

// Store
import { useAppDispatch, useAppState } from '@/store';
import { resetPassword } from '../../feature/actionCreators';
import { selectAuthIsLoading } from '../../feature/selectors';

// Components
import { MessageModal, useForm } from '@/components';
import { ResetPasswordForm } from '../../components';

// Models
import { AuthForms } from '@/models/auth.model';

// Helpers
import { useModal } from '@/hooks';
import { TResetPasswordFormValues } from '../../helpers/types';
import ResetPasswordDTO from '../../dtos/ResetPasswordDTO';
import buildPathname from '../../helpers/buildPathname';

const ResetPasswordContainer = () => {
  const { t } = useTranslation(['auth']);
  const [form] = useForm();
  const { query, replace } = useRouter();

  const dispatch = useAppDispatch();
  const isLoading = useAppState(selectAuthIsLoading);

  const { isOpened, openModal, closeModal } = useModal();

  const { email, token } = query;

  const goToLogin = useCallback(() => {
    replace(buildPathname(AuthForms.LOG_IN));
  }, [replace]);

  const handleSubmit = useCallback(
    async (values: TResetPasswordFormValues) => {
      const resetDto = new ResetPasswordDTO({
        ...values,
        email: email as string,
        token: token as string,
      });

      try {
        await dispatch(resetPassword(resetDto)).unwrap();
        form.resetFields();
        openModal();
      } catch {}
    },
    [dispatch, email, form, openModal, token],
  );

  return (
    <>
      <ResetPasswordForm handleSubmit={handleSubmit} isLoading={isLoading} />

      <MessageModal
        isOpened={isOpened}
        handleClose={closeModal}
        message={t('reset_password_success_title')}
        additionalMessage={t('reset_password_success_message')}
        afterClose={goToLogin}
      />
    </>
  );
};

export default ResetPasswordContainer;
