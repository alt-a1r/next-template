// Globals
import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

// Components
import { Input, PasswordInput } from '@/ui';
import { Form, FormItem } from '@/components';
import { StyledButton, StyledLinkBlock, StyledTitle } from '../Styled';

// Models
import { AuthForms } from '@/models/auth.model';

// Helpers
import buildPathname from '../../helpers/buildPathname';
import { AuthFieldsNames, TLogInFormValues } from '../../helpers/types';

interface ILogInForm {
  handleSubmit: (values: TLogInFormValues) => void;
  isLoading: boolean;
}

const LogInForm = ({ handleSubmit, isLoading }: ILogInForm) => {
  const { t } = useTranslation(['auth', 'common']);

  const placeholder = t('common_placeholder_input', { ns: 'common' });

  return (
    <>
      <StyledTitle>{t('log_in')}</StyledTitle>

      <Form onFinish={handleSubmit}>
        <FormItem name={AuthFieldsNames.EMAIL} label={t('email_label')}>
          <Input placeholder={placeholder} type='email' />
        </FormItem>

        <FormItem name={AuthFieldsNames.PASSWORD} label={t('password_label')}>
          <PasswordInput placeholder={placeholder} />
        </FormItem>

        <StyledLinkBlock>
          <span>{t('forgot_password')}</span>&nbsp;
          <Link href={buildPathname(AuthForms.FORGOT_PASSWORD)} shallow>
            {t('reset_password')}
          </Link>
        </StyledLinkBlock>

        <StyledButton type='primary' htmlType='submit' loading={isLoading}>
          {t('log_in')}
        </StyledButton>
      </Form>

      <StyledLinkBlock>
        <span>{t('need_account_message')}</span>&nbsp;
        <Link href={buildPathname(AuthForms.SIGN_UP)} shallow>
          {t('sign_up')}
        </Link>
      </StyledLinkBlock>
    </>
  );
};

export default LogInForm;
