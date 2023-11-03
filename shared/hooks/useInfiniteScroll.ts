import { useEffect, RefObject, useCallback } from 'react';

interface IUseInfiniteScroll {
  callback: () => void;
  ref: RefObject<HTMLDivElement>;
  isLoading: boolean;
  hasMore: boolean;
}

function useInfiniteScroll({
  callback,
  ref,
  isLoading,
  hasMore,
}: IUseInfiniteScroll) {
  const handleScroll = useCallback(() => {
    if (isLoading || !hasMore) {
      return;
    } else {
      callback();
    }
  }, [callback, hasMore, isLoading]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (!hasMore || !ref.current) return;
    if (ref.current.offsetTop < window.innerHeight - 20) {
      callback();
    }
  }, [callback, hasMore, ref, isLoading]);
}

export default useInfiniteScroll;
