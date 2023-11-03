import { DataLists, IIndustry, ISubIndustry } from '@/models/dataLists.model';
import { IApiError } from '@/models/apiError.model';

export const DATA_LISTS_SLICE_NAME = 'data_lists';

export interface DataListState<T> {
  list: T[] | null;
  isLoading: boolean;
  error: IApiError | null;
}

export interface DataListsState {
  [DataLists.INDUSTRIES]: DataListState<IIndustry>;
  [DataLists.SUB_INDUSTRIES]: DataListState<ISubIndustry>;
}

const initialSubState = {
  list: null,
  isLoading: false,
  error: null,
};

export const initialState: DataListsState = {
  [DataLists.INDUSTRIES]: initialSubState,
  [DataLists.SUB_INDUSTRIES]: initialSubState,
};
