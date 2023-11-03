// Globals
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { Provider } from 'react-redux';

// Store
import { wrapper } from '@/store';

// Modules
import { ThemeConfigProvider } from '@/modules/_Theme';
import { RootContainer } from '@/modules/_Root';
import { MainLayout } from '@/modules/Layout';

// Models
import { NextPageWithLayout } from '@/models/global.model';

// Helpers
import GlobalStyles from '../styles/global';
import 'antd/dist/reset.css';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  isMobileFromSSR: boolean;
};

const AppRoot = ({
  Component,
  isMobileFromSSR,
  ...rest
}: AppPropsWithLayout) => {
  const { store, props } = wrapper.useWrappedStore(rest);

  const getLayout =
    Component.getLayout ?? ((page) => <MainLayout>{page}</MainLayout>);

  return (
    <>
      <Head>
        <title>next-template</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=1'
        />
      </Head>

      <GlobalStyles />

      <Provider store={store}>
        <ThemeConfigProvider>
          <RootContainer>
            {getLayout(<Component {...props.pageProps} />, {
              isMobileFromServer: isMobileFromSSR,
            })}
          </RootContainer>
        </ThemeConfigProvider>
      </Provider>
    </>
  );
};

export default appWithTranslation(AppRoot);
