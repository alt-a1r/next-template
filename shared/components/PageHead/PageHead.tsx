import React from 'react';
import Head from 'next/head';
import { SEO_TITLE_SITE } from '@/constants/common';
import { buildPageHeadTitle } from '@/utils';

interface IPageSeoTags {
  title: string;
  description?: string;
  image?: string;
  website?: string;
  isPublic?: boolean;
}

const PageHead = ({
  title,
  description,
  image,
  website = SEO_TITLE_SITE,
  isPublic = false,
}: IPageSeoTags) => {
  const formattedTitle = buildPageHeadTitle(title, website);

  return (
    <Head>
      <title>{formattedTitle}</title>
      {!!description && <meta name='description' content={description} />}
      <meta name='og:title' content={formattedTitle} />
      <meta name='og:site_name' content={website} />
      {!!description && <meta name='og:description' content={description} />}
      {!!image && <meta name='og:image' content={image} />}
      {!isPublic && (
        <meta key='googlebot' name='googlebot' content='noindex,follow' />
      )}
    </Head>
  );
};

export default PageHead;
