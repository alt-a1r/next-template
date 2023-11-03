import React from 'react';
import NextNprogress from 'nextjs-progressbar';
import { useThemeToken } from '@/hooks';

const RouterProgressBar = () => {
  const token = useThemeToken();

  return (
    <NextNprogress
      color={token.colorPrimary}
      height={5}
      showOnShallow={false}
      options={{ showSpinner: false }}
    />
  );
};

export default RouterProgressBar;
