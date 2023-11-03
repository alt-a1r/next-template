// Globals
import React from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// Store
import { wrapper } from '@/store';

// Modules
import { getRequiredStoreData } from '@/modules/_RootSSR';

// Components
import { PageHead } from '@/components';
import { HeartFilledIcon } from '@/icons';

// Helpers
import { DEFAULT_LOCALE } from '@/config/locales';
import nextI18NextConfig from '../next-i18next.config';
import { COLORS } from '@/theme';

const Home: NextPage = () => {
  return (
    <>
      <PageHead title={'Home'} />

      <div style={{ margin: '3rem auto', textAlign: 'center' }}>
        <h1 style={{ fontWeight: '700' }}>
          Welcome to Artjoker family{' '}
          <HeartFilledIcon style={{ color: COLORS.ORANGE_PRIMARY }} />
        </h1>
        <h2 style={{ fontWeight: '400' }}>Be brave like Ukraine!</h2>
      </div>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (context) => {
    await getRequiredStoreData(store, context);
    const { locale = DEFAULT_LOCALE, res } = context;

    res.setHeader(
      'Cache-Control',
      'public, s-maxage=60, stale-while-revalidate=59',
    );

    const i18nProps = await serverSideTranslations(
      locale,
      ['common'],
      nextI18NextConfig,
    );

    return {
      props: {
        ...i18nProps,
      },
    };
  });
