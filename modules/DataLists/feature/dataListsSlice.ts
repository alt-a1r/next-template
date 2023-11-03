import {
  createAction,
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import omitBy from 'lodash.omitby';
import { showErrorToast } from '@/components';
import { fetchIndustries, fetchSubIndustries } from './actionCreators';
import { DATA_LISTS_SLICE_NAME, DataListsState, initialState } from './models';
import { IApiError } from '@/models/apiError.model';

const hydrate = createAction<{ [DATA_LISTS_SLICE_NAME]: DataListsState }>(
  HYDRATE,
);

export const dataListsSlice = createSlice({
  name: DATA_LISTS_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(hydrate, (state: DataListsState, action) => {
        const serverState = omitBy(
          action.payload[DATA_LISTS_SLICE_NAME],
          ({ list }) => !list,
        );
        return {
          ...state,
          ...serverState,
        };
      })
      .addMatcher(
        isFulfilled(fetchIndustries, fetchSubIndustries),
        (state: DataListsState, action) => {
          const { meta, payload } = action;
          state[meta.listType].isLoading = false;
          state[meta.listType].list = payload.data;
        },
      )
      .addMatcher(
        isPending(fetchIndustries, fetchSubIndustries),
        (state: DataListsState, action) => {
          const { meta } = action;
          state[meta.listType].isLoading = true;
          state[meta.listType].error = null;
        },
      )
      .addMatcher(
        isRejected(fetchIndustries, fetchSubIndustries),
        (state: DataListsState, action) => {
          const { meta, payload } = action;

          if (meta.listType) {
            state[meta.listType].isLoading = false;
            state[meta.listType].error = payload as IApiError;
          }

          showErrorToast({ message: (payload as IApiError).message });
        },
      );
  },
});

export default dataListsSlice.reducer;
