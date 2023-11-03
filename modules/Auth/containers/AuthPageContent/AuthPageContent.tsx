// Globals
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

// Store
import { useAppState } from '@/store';
import { selectIsAuthorized } from '../../feature/selectors';

// Components
import SignUpContainer from '../SignUpContainer/SignUpContainer';
import LogInContainer from '../LogInContainer/LogInContainer';
import ForgotPasswordContainer from '../ForgotPasswordContainer/ForgotPasswordContainer';
import ResetPasswordContainer from '../ResetPasswordContainer/ResetPasswordContainer';
import { StyledFormWrapper, StyledPageWrapper } from './AuthPageContentStyles';

// Models
import { AuthForms } from '@/models/auth.model';

// Helpers
import { Routes } from '@/constants/routes';
import { assertUnreachable } from '@/utils';

const getFormByType = (type: AuthForms) => {
  switch (type) {
    case AuthForms.SIGN_UP:
      return <SignUpContainer />;
    case AuthForms.LOG_IN:
      return <LogInContainer />;
    case AuthForms.FORGOT_PASSWORD:
      return <ForgotPasswordContainer />;
    case AuthForms.RESET_PASSWORD:
      return <ResetPasswordContainer />;
    default:
      return assertUnreachable(type);
  }
};

interface IAuthPageContent {
  authType?: AuthForms;
}

const AuthPageContent = ({ authType = AuthForms.LOG_IN }: IAuthPageContent) => {
  const isAuthorized = useAppState(selectIsAuthorized);
  const { push } = useRouter();

  useEffect(() => {
    if (isAuthorized) {
      push(Routes.HOME);
    }
  }, [push, isAuthorized]);

  return (
    <StyledPageWrapper>
      <StyledFormWrapper>{getFormByType(authType)}</StyledFormWrapper>
    </StyledPageWrapper>
  );
};

export default AuthPageContent;
