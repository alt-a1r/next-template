// Globals
import React from 'react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

// Components
import { Button } from '@/ui';
import Result from '../../components/Result';
import { StyledButtons } from './NotFoundStyles';

// Helpers
import { Routes } from '@/constants/routes';

const NotFound = () => {
  const { t } = useTranslation(['common']);
  const router = useRouter();

  const goHome = () => {
    router.push(Routes.HOME);
  };

  const goBack = () => {
    router.back();
  };

  return (
    <Result
      image={'/images/error-404.png'}
      title={t('error_not_found_title')}
      message={t('error_not_found_message')}
    >
      <StyledButtons>
        <Button onClick={goBack}>{t('error_not_found_go_back')}</Button>
        <Button type={'primary'} onClick={goHome}>
          {t('error_not_found_go_home')}
        </Button>
      </StyledButtons>
    </Result>
  );
};

export default NotFound;
