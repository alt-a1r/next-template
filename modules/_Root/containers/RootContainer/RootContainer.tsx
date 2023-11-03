// Globals
import React, { ReactNode } from 'react';
import { GoogleAnalytics } from 'nextjs-google-analytics';

// Modules
import { RouterProgressBar } from '@/modules/Layout';
import { useSetIsMobile } from '@/modules/Adaptive';

// Components
import { ToastGlobalStyle } from '@/components';

interface IRootContainer {
  children: ReactNode;
}

const RootContainer = ({ children }: IRootContainer) => {
  useSetIsMobile();

  return (
    <>
      {children}
      <GoogleAnalytics trackPageViews />
      <ToastGlobalStyle />
      <RouterProgressBar />
    </>
  );
};

export default RootContainer;
