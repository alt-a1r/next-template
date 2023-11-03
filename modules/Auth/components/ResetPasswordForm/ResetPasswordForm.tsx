// Globals
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import React from 'react';

// Components
import { Form, FormItem } from '@/components';
import { PasswordInput } from '@/ui';
import { StyledButton, StyledLinkBlock, StyledTitle } from '../Styled';

// Models
import { AuthForms } from '@/models/auth.model';

// Helpers
import buildPathname from '../../helpers/buildPathname';
import { AuthFieldsNames, TResetPasswordFormValues } from '../../helpers/types';

interface IResetPasswordForm {
  handleSubmit: (values: TResetPasswordFormValues) => void;
  isLoading: boolean;
}

const ResetPasswordForm = ({ handleSubmit, isLoading }: IResetPasswordForm) => {
  const { t } = useTranslation(['auth', 'common']);

  const placeholder = t('common_placeholder_input', { ns: 'common' });

  return (
    <>
      <StyledTitle>{t('reset_password_title')}</StyledTitle>

      <Form onFinish={handleSubmit}>
        <FormItem
          name={AuthFieldsNames.CREATE_PASSWORD}
          label={t('create_password')}
        >
          <PasswordInput placeholder={placeholder} />
        </FormItem>

        <FormItem
          name={AuthFieldsNames.CONFIRM_PASSWORD}
          dependencies={[AuthFieldsNames.CREATE_PASSWORD]}
          label={t('confirm_password')}
          rules={[
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (
                  !value ||
                  getFieldValue(AuthFieldsNames.CREATE_PASSWORD) === value
                ) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  t('validation_message_confirm_password', { ns: 'common' }),
                );
              },
            }),
          ]}
        >
          <PasswordInput placeholder={placeholder} />
        </FormItem>

        <StyledButton type='primary' htmlType='submit' loading={isLoading}>
          {t('create_password')}
        </StyledButton>
      </Form>

      <StyledLinkBlock>
        <span>{t('have_account_message')}</span>&nbsp;
        <Link href={buildPathname(AuthForms.LOG_IN)} shallow>
          {t('log_in')}
        </Link>
      </StyledLinkBlock>
    </>
  );
};

export default ResetPasswordForm;
