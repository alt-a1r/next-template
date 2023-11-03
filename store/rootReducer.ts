import { combineReducers } from '@reduxjs/toolkit';
import { ADAPTIVE_SLICE_NAME, adaptiveReducer } from '@/modules/Adaptive';
import { AUTH_SLICE_NAME, authReducer } from '@/modules/Auth';
import { DATA_LISTS_SLICE_NAME, dataListsReducer } from '@/modules/DataLists';
import { PROFILE_SLICE_NAME, profileReducer } from '@/modules/Profile';

export const rootReducer = combineReducers({
  [ADAPTIVE_SLICE_NAME]: adaptiveReducer,
  [AUTH_SLICE_NAME]: authReducer,
  [DATA_LISTS_SLICE_NAME]: dataListsReducer,
  [PROFILE_SLICE_NAME]: profileReducer,
});
