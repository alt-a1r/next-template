// Globals
import React, { useCallback } from 'react';

// Store
import { useAppDispatch, useAppState } from '@/store';
import { loginUser } from '../../feature/actionCreators';
import { selectAuthIsLoading } from '../../feature/selectors';

// Components
import { LogInForm } from '../../components';

// Helpers
import { TLogInFormValues } from '../../helpers/types';
import LoginDTO from '../../dtos/LoginDTO';

const LogInContainer = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppState(selectAuthIsLoading);

  const handleSubmit = useCallback(
    (values: TLogInFormValues) => {
      const loginDto = new LoginDTO(values);
      dispatch(loginUser(loginDto));
    },
    [dispatch],
  );

  return <LogInForm handleSubmit={handleSubmit} isLoading={isLoading} />;
};

export default LogInContainer;
