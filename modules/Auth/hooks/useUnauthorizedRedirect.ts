import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAppState } from '@/store';
import { selectIsAuthorized } from '../feature/selectors';
import { Routes } from '@/constants/routes';

interface IUseUnauthorizedRedirect {
  pathname?: Routes;
  query?: Record<string, string>;
}

const useUnauthorizedRedirect = ({
  pathname = Routes.HOME,
  query = {},
}: IUseUnauthorizedRedirect) => {
  const router = useRouter();
  const isAuthorized = useAppState(selectIsAuthorized);

  useEffect(() => {
    if (!isAuthorized) {
      router.push({
        pathname,
        query,
      });
    }
  }, [isAuthorized, pathname, query, router]);
};

export default useUnauthorizedRedirect;
