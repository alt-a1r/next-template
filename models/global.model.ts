import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';

type TCommonLayoutProps = { isMobileFromServer: boolean };

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement, props?: TCommonLayoutProps) => ReactNode;
};
