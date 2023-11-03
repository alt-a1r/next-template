// Globals
import { ReactElement } from 'react';
import type { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

// Store
import { wrapper } from '@/store';

// Modules
import { AuthLayout } from '@/modules/Layout';
import { getRequiredStoreData } from '@/modules/_RootSSR';
import { AuthPageContent, authPageTitleKeyMap } from '@/modules/Auth';

// Components
import { PageHead } from '@/components';

// Models
import { NextPageWithLayout } from '@/models/global.model';
import { AuthForms } from '@/models/auth.model';

// Helpers
import { DEFAULT_LOCALE } from '@/config/locales';
import nextI18NextConfig from '../../next-i18next.config';

const Authentication: NextPageWithLayout = () => {
  const { t } = useTranslation(['auth']);
  const router = useRouter();

  const { type = AuthForms.LOG_IN } = router.query;
  const title = t(authPageTitleKeyMap[type as AuthForms]);

  return (
    <>
      <PageHead title={title} />
      <AuthPageContent authType={type as AuthForms} />
    </>
  );
};

export default Authentication;

Authentication.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
};

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (context) => {
    const { locale = DEFAULT_LOCALE, params } = context;
    await getRequiredStoreData(store, context);

    const i18nProps = await serverSideTranslations(
      locale,
      ['common', 'auth'],
      nextI18NextConfig,
    );

    const authType = params?.type;
    const possibleTypes = Object.values(AuthForms);

    if (!possibleTypes.includes(authType as AuthForms)) {
      return {
        props: { ...i18nProps },
        notFound: true,
      };
    }

    return {
      props: {
        ...i18nProps,
      },
    };
  });
