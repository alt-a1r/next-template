import { createAsyncThunk } from '@reduxjs/toolkit';
import { DataListsAPI } from '@/api';
import { formatApiError } from '@/utils';
import { IApiError } from '@/models/apiError.model';
import {
  DataLists,
  IDataListsMeta,
  IDataListsResponse,
  IIndustry,
  ISubIndustry,
} from '@/models/dataLists.model';
import { DATA_LISTS_SLICE_NAME } from './models';

const industriesMeta = { listType: DataLists.INDUSTRIES };
const subIndustriesMeta = { listType: DataLists.SUB_INDUSTRIES };

export const fetchIndustries = createAsyncThunk<
  IDataListsResponse<IIndustry>,
  void,
  {
    serializedErrorType: IApiError;
    pendingMeta: IDataListsMeta;
    fulfilledMeta: IDataListsMeta;
    rejectedMeta: IDataListsMeta;
  }
>(
  `${DATA_LISTS_SLICE_NAME}/fetchIndustries`,
  async (_, thunkAPI) => {
    try {
      const response = await DataListsAPI.fetchIndustries();
      return thunkAPI.fulfillWithValue(response.data, industriesMeta);
    } catch (error) {
      throw thunkAPI.rejectWithValue(formatApiError(error), industriesMeta);
    }
  },
  {
    serializeError: formatApiError,
    getPendingMeta: () => industriesMeta,
  },
);

export const fetchSubIndustries = createAsyncThunk<
  IDataListsResponse<ISubIndustry>,
  void,
  {
    serializedErrorType: IApiError;
    pendingMeta: IDataListsMeta;
    fulfilledMeta: IDataListsMeta;
    rejectedMeta: IDataListsMeta;
  }
>(
  `${DATA_LISTS_SLICE_NAME}/fetchSubIndustries`,
  async (_, thunkAPI) => {
    try {
      const response = await DataListsAPI.fetchSubIndustries();
      return thunkAPI.fulfillWithValue(response.data, subIndustriesMeta);
    } catch (error) {
      throw thunkAPI.rejectWithValue(formatApiError(error), subIndustriesMeta);
    }
  },
  {
    serializeError: formatApiError,
    getPendingMeta: () => subIndustriesMeta,
  },
);
