import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import nextI18NextConfig, { DEFAULT_LOCALE } from '../next-i18next.config';
import { NotFound } from '@/modules/Errors';

const Custom404: NextPage = () => {
  return <NotFound />;
};

export default Custom404;

export const getStaticProps: GetStaticProps = async ({
  locale = DEFAULT_LOCALE,
}) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'], nextI18NextConfig)),
  },
});
