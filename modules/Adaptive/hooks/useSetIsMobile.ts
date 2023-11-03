import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useAppDispatch, useAppState } from '@/store';
import { MOBILE_LAYOUT_MAX_WIDTH } from '@/theme';
import { setIsMobile } from '../feature/slice';
import { selectIsMobile } from '../feature/selectors';

const useSetIsMobile = () => {
  const dispatch = useAppDispatch();
  const isMobileState = useAppState(selectIsMobile);

  const isMobileByMediaQuery = useMediaQuery({
    maxWidth: MOBILE_LAYOUT_MAX_WIDTH,
  });

  useEffect(() => {
    if (isMobileByMediaQuery !== isMobileState) {
      dispatch(setIsMobile(isMobileByMediaQuery));
    }
  }, [dispatch, isMobileByMediaQuery, isMobileState]);
};

export default useSetIsMobile;
