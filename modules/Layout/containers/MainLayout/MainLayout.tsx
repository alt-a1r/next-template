// Modules
import React, { ReactNode } from 'react';

// Components
import MainLayoutContent from '../MainLayoutContent/MainLayoutContent';
import { StyledLayout } from './MainLayoutStyles';
import SideBar from '../SideBar/SideBar';

interface IMainLayout {
  children: ReactNode;
}

const MainLayout = ({ children }: IMainLayout): JSX.Element => (
  <StyledLayout>
    <SideBar />
    <MainLayoutContent>{children}</MainLayoutContent>
  </StyledLayout>
);

export default MainLayout;
