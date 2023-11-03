import { createSelector } from '@reduxjs/toolkit';
import { DataLists } from '@/models/dataLists.model';
import { DataListsState, DATA_LISTS_SLICE_NAME } from './models';
import { RootState } from '@/store';

const dataListsSelector = (state: RootState): DataListsState =>
  state[DATA_LISTS_SLICE_NAME];

export const selectIndustries = createSelector(
  dataListsSelector,
  (dataLists: DataListsState) => dataLists[DataLists.INDUSTRIES],
);

export const selectSubIndustries = createSelector(
  dataListsSelector,
  (dataLists: DataListsState) => dataLists[DataLists.SUB_INDUSTRIES],
);
