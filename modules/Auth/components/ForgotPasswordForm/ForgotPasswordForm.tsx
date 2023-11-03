// Globals
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import React from 'react';

// Components
import { Input } from '@/ui';
import { Form, FormItem, IFormInstance } from '@/components';
import { AuthForms } from '@/models/auth.model';
import {
  StyledButton,
  StyledLinkBlock,
  StyledMessage,
  StyledTitle,
} from '../Styled';

// Helpers
import buildPathname from '../../helpers/buildPathname';
import {
  AuthFieldsNames,
  TForgotPasswordFormValues,
} from '../../helpers/types';

interface IForgotPasswordForm {
  formInstance: IFormInstance;
  handleSubmit: (values: TForgotPasswordFormValues) => void;
  isLoading: boolean;
}

const ForgotPasswordForm = ({
  formInstance,
  handleSubmit,
  isLoading,
}: IForgotPasswordForm) => {
  const { t } = useTranslation(['auth', 'common']);

  return (
    <>
      <StyledTitle>{t('forgot_password')}</StyledTitle>
      <StyledMessage>{t('forgot_password_message')}</StyledMessage>

      <Form onFinish={handleSubmit} form={formInstance}>
        <FormItem name={AuthFieldsNames.EMAIL} label={t('email_label')}>
          <Input
            placeholder={t('common_placeholder_input', { ns: 'common' })}
            type='email'
          />
        </FormItem>

        <StyledButton type='primary' htmlType='submit' loading={isLoading}>
          {t('forgot_password_send')}
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

export default ForgotPasswordForm;
