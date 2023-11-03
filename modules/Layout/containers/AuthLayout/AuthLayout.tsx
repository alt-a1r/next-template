// Modules
import React, { ReactNode } from 'react';

// Components
import MainLayoutContent from '../MainLayoutContent/MainLayoutContent';
import { StyledLayout } from './AuthLayoutStyles';

interface IMainLayout {
  children: ReactNode;
}

const AuthLayout = ({ children }: IMainLayout): JSX.Element => (
  <StyledLayout>
    <MainLayoutContent>{children}</MainLayoutContent>
  </StyledLayout>
);

export default AuthLayout;
