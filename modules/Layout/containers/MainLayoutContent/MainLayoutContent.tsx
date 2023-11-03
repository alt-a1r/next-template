// Modules
import React, { ReactNode } from 'react';

// Components
import { StyledContent } from './MainLayoutContentStyles';

interface IMainLayout {
  children: ReactNode;
}

const MainLayoutContent = ({ children }: IMainLayout): JSX.Element => (
  <>
    <StyledContent>{children}</StyledContent>
  </>
);

export default MainLayoutContent;
