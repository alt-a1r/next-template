// Globals
import React from 'react';
import styled from 'styled-components';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// Components
import { PageHead } from '@/components';
import * as icons from '@/icons';

// Helpers
import { COLORS, pickThemeFontSize } from '@/theme';
import { DEFAULT_LOCALE } from '@/config/locales';
import nextI18NextConfig from '../next-i18next.config';

export const StyledIconsWrapper = styled.div`
  max-width: 70rem;
  margin: 5rem auto;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(5, 1fr);
`;

export const StyledIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  background: ${COLORS.WHITE};
  padding: 1rem;

  & .anticon {
    font-size: ${pickThemeFontSize('24')};
    color: ${COLORS.BLUE_PRIMARY};
  }
`;

const Icons = () => {
  return (
    <>
      <PageHead title='Icons' />
      <StyledIconsWrapper>
        {Object.entries(icons).map(([iconName, Icon], idx) => (
          <StyledIconWrapper key={idx}>
            <Icon />
            {iconName}
          </StyledIconWrapper>
        ))}
      </StyledIconsWrapper>
    </>
  );
};

export default Icons;

export const getStaticProps: GetStaticProps = async ({
  locale = DEFAULT_LOCALE,
}) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'], nextI18NextConfig)),
    },
    notFound: process.env.NODE_ENV !== 'development',
  };
};
