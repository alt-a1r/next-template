import { useMemo } from 'react';
import { useAppState } from '@/store';
import { selectUserData } from '../feature/selectors';
import { UserData } from '@/models/user.model';

const useUserData = () => {
  const user = useAppState(selectUserData);

  return useMemo(() => (user ? new UserData(user) : null), [user]);
};

export default useUserData;
