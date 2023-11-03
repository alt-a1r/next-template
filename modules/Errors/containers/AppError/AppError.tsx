// Globals
import React from 'react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

// Components
import { Button } from '@/ui';
import Result from '../../components/Result';

// Helpers
import { Routes } from '@/constants/routes';

const AppError = () => {
  const { t } = useTranslation(['common']);
  const router = useRouter();

  const goHome = () => {
    router.push(Routes.HOME);
  };

  return (
    <Result
      image={'/images/error-500.png'}
      title={t('error_app_title')}
      message={t('error_app_message')}
    >
      <Button type={'primary'} onClick={goHome}>
        {t('error_app_go_home')}
      </Button>
    </Result>
  );
};

export default AppError;
