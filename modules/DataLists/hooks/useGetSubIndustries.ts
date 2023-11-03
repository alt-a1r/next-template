import { useEffect } from 'react';
import { useAppDispatch, useAppState } from '@/store';
import { ISubIndustry } from '@/models/dataLists.model';
import { selectSubIndustries } from '../feature/selectors';
import { fetchSubIndustries } from '../feature/actionCreators';
import { DataListState } from '../feature/models';

const useGetSubIndustries = (): DataListState<ISubIndustry> => {
  const { list, isLoading, error } = useAppState(selectSubIndustries);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!list && !isLoading && !error) {
      dispatch(fetchSubIndustries());
    }
  }, [dispatch, list, isLoading, error]);

  return { list: list || [], isLoading, error };
};

export default useGetSubIndustries;
