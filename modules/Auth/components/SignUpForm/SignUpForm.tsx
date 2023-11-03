// Globals
import { Trans, useTranslation } from 'next-i18next';
import Link from 'next/link';
import React from 'react';

// Components
import { Form, FormItem, IFormInstance } from '@/components';
import { Input, PasswordInput } from '@/ui';
import { StyledTermsWrap } from './SignUpFormStyles';
import {
  StyledButton,
  StyledLinkBlock,
  StyledMessage,
  StyledTitle,
} from '../Styled';

// Models
import { AuthForms } from '@/models/auth.model';

// Helpers
import { Routes } from '@/constants/routes';
import buildPathname from '../../helpers/buildPathname';
import { AuthFieldsNames, TSignUpFormValues } from '../../helpers/types';

interface ISignUpForm {
  handleSubmit: (values: TSignUpFormValues) => void;
  isLoading: boolean;
  formInstance: IFormInstance;
}

const SignUpForm = ({ handleSubmit, isLoading, formInstance }: ISignUpForm) => {
  const { t } = useTranslation(['auth', 'common']);

  const placeholder = t('common_placeholder_input', { ns: 'common' });

  return (
    <>
      <StyledTitle>{t('sign_up_title')}</StyledTitle>
      <StyledMessage>{t('sign_up_message')}</StyledMessage>

      <Form onFinish={handleSubmit} form={formInstance}>
        <FormItem
          name={AuthFieldsNames.FULL_NAME}
          label={t('first_name_label')}
        >
          <Input placeholder={placeholder} />
        </FormItem>

        <FormItem name={AuthFieldsNames.EMAIL} label={t('email_label')}>
          <Input type='email' placeholder={placeholder} />
        </FormItem>

        <FormItem
          name={AuthFieldsNames.CREATE_PASSWORD}
          label={t('password_label')}
        >
          <PasswordInput placeholder={placeholder} />
        </FormItem>

        <FormItem
          name={AuthFieldsNames.CONFIRM_PASSWORD}
          dependencies={[AuthFieldsNames.CREATE_PASSWORD]}
          label={t('password_repeat_label')}
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
          {t('sign_up')}
        </StyledButton>
      </Form>

      <StyledTermsWrap>
        <Trans
          t={t}
          ns={'common'}
          i18nKey='privacy_policy_message'
          components={{
            privacy: (
              <a href={Routes.PRIVACY} target='_blank' rel='noreferrer' />
            ),
          }}
        />
      </StyledTermsWrap>

      <StyledLinkBlock>
        <span>{t('have_account_message')}</span>&nbsp;
        <Link href={buildPathname(AuthForms.LOG_IN)} shallow>
          {t('log_in')}
        </Link>
      </StyledLinkBlock>
    </>
  );
};

export default SignUpForm;
