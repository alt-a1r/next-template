import {
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from '@reduxjs/toolkit';
import { appCookiesStorage, showApiErrors } from '@/utils';
import { IApiError } from '@/models/apiError.model';
import {
  AUTHORIZATION_TOKEN_STORAGE_KEY,
  ResponseStatusCodes,
} from '@/constants/common';
import { ProfileState, PROFILE_SLICE_NAME, initialState } from './models';
import { getUserData, updateUserData } from './actionCreators';

export const slice = createSlice({
  name: PROFILE_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        isFulfilled(getUserData, updateUserData),
        (state: ProfileState, action) => {
          const { payload } = action;
          state.isLoading = false;
          state.user = payload.data;
        },
      )
      .addMatcher(
        isPending(getUserData, updateUserData),
        (state: ProfileState) => {
          state.isLoading = true;
          state.error = null;
        },
      )
      .addMatcher(
        isRejected(getUserData, updateUserData),
        (state: ProfileState, action) => {
          const { error } = action;
          state.isLoading = false;
          state.error = error;

          showApiErrors(error);
        },
      )
      .addMatcher(isRejected(), (state: ProfileState, action) => {
        const { error } = action;
        if (
          (error as IApiError)?.status === ResponseStatusCodes.NOT_AUTHORIZED
        ) {
          state.user = null;
          state.isAuthorized = false;
          state.authToken = null;
          appCookiesStorage.removeItem(AUTHORIZATION_TOKEN_STORAGE_KEY);
        }
      });
  },
});

export default slice.reducer;
