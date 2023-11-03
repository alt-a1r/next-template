import { useAppState } from '@/store';
import { selectIsMobile } from '../feature/selectors';

const useIsMobile = () => {
  const isMobileState = useAppState(selectIsMobile);

  return { isMobile: isMobileState };
};

export default useIsMobile;
