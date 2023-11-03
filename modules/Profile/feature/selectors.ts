import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/store';
import { ProfileState, PROFILE_SLICE_NAME } from './models';

const profileSelector = (state: RootState): ProfileState =>
  state[PROFILE_SLICE_NAME];
export const selectProfileIsLoading = createSelector(
  profileSelector,
  (state: ProfileState) => state.isLoading,
);

export const selectUserData = createSelector(
  profileSelector,
  (state: ProfileState) => state.user,
);
