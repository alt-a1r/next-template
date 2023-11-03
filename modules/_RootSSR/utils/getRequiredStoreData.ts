// Globals
import { GetServerSidePropsContext } from 'next';
import { getSelectorsByUserAgent } from 'react-device-detect';

// Store
import { AppStore } from '@/store';

// Modules
import { setIsAuthorized } from '@/modules/Auth';
import { setIsMobile } from '@/modules/Adaptive';
import { getUserData } from '@/modules/Profile';

// Helpers
import { AUTHORIZATION_TOKEN_STORAGE_KEY } from '@/constants/common';

const getRequiredStoreData = async (
  store: AppStore,
  context: GetServerSidePropsContext,
) => {
  const { req } = context;
  const userAgent = req.headers['user-agent'];

  const promises: Array<ReturnType<typeof store.dispatch>> = [];

  const { isMobile } = getSelectorsByUserAgent(userAgent || '') || {};
  const authToken = req?.cookies?.[AUTHORIZATION_TOKEN_STORAGE_KEY];

  promises.push(store.dispatch(setIsMobile(isMobile)));
  promises.push(store.dispatch(setIsAuthorized(!!authToken)));

  if (authToken) {
    await store.dispatch(
      getUserData({
        [AUTHORIZATION_TOKEN_STORAGE_KEY]: authToken,
      }),
    );
  }

  await Promise.all(promises);
};

export default getRequiredStoreData;
