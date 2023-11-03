import React, { ReactNode } from 'react';
import { ConfigProvider } from 'antd';

// Helpers
import baseTheme from '../../helpers/baseTheme';

interface IThemeContextProvider {
  children: ReactNode;
}

const ThemeConfigProvider = ({ children }: IThemeContextProvider) => {
  return <ConfigProvider theme={baseTheme}>{children}</ConfigProvider>;
};

export default ThemeConfigProvider;
