import { useEffect } from 'react';
import { useAppDispatch, useAppState } from '@/store';
import { IIndustry } from '@/models/dataLists.model';
import { selectIndustries } from '../feature/selectors';
import { fetchIndustries } from '../feature/actionCreators';
import { DataListState } from '../feature/models';

const useGetIndustries = (): DataListState<IIndustry> => {
  const { list, isLoading, error } = useAppState(selectIndustries);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!list && !isLoading && !error) {
      dispatch(fetchIndustries());
    }
  }, [dispatch, list, isLoading, error]);

  return { list: list || [], isLoading, error };
};

export default useGetIndustries;
