import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { AppError } from '@/modules/Errors';
import nextI18NextConfig, { DEFAULT_LOCALE } from '../next-i18next.config';

const Custom500: NextPage = () => {
  return <AppError />;
};

export default Custom500;

export const getStaticProps: GetStaticProps = async ({
  locale = DEFAULT_LOCALE,
}) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'], nextI18NextConfig)),
  },
});
