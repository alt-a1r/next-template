import { createSelector } from '@reduxjs/toolkit';
import { IUser } from '@/models/user.model';
import { RootState } from '@/store';
import { AuthState, AUTH_SLICE_NAME } from './models';

const authSelector = (state: RootState): AuthState => state[AUTH_SLICE_NAME];

export const selectIsAuthorized = createSelector(
  authSelector,
  (state: AuthState) => state.isAuthorized,
);

export const selectAuthIsLoading = createSelector(
  authSelector,
  (state: AuthState) => state.isLoading,
);

export const selectAuthError = createSelector(
  authSelector,
  (state: AuthState) => state.error,
);

export const selectUserData = createSelector(
  authSelector,
  (state: AuthState) => state.user,
);

export const selectUserId = createSelector(
  selectUserData,
  (user: IUser | null) => user?.id,
);
