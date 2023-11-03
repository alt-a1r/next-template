import {
  createAction,
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
  PayloadAction,
} from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { appCookiesStorage, showApiErrors } from '@/utils';
import { AuthState, AUTH_SLICE_NAME, initialState } from './models';
import {
  changePassword,
  forgotPassword,
  loginUser,
  registerUser,
  resetPassword,
  verifyEmail,
} from './actionCreators';
import { IApiError } from '@/models/apiError.model';
import {
  AUTHORIZATION_TOKEN_EXPIRES,
  AUTHORIZATION_TOKEN_STORAGE_KEY,
  ResponseStatusCodes,
} from '@/constants/common';

const hydrate = createAction<{ [AUTH_SLICE_NAME]: AuthState }>(HYDRATE);

export const slice = createSlice({
  name: AUTH_SLICE_NAME,
  initialState,
  reducers: {
    setIsAuthorized(state, action: PayloadAction<boolean>) {
      state.isAuthorized = action.payload;
    },
    resetAuthState() {
      return { ...initialState };
    },
    logOut() {
      appCookiesStorage.removeItem(AUTHORIZATION_TOKEN_STORAGE_KEY);
      localStorage.clear();
      return { ...initialState };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(hydrate, (state: AuthState, action) => {
        const serverState = action.payload[AUTH_SLICE_NAME];

        if (serverState?.error?.status === ResponseStatusCodes.NOT_AUTHORIZED) {
          appCookiesStorage.removeItem(AUTHORIZATION_TOKEN_STORAGE_KEY);
          return {
            ...state,
            ...serverState,
            user: null,
            isAuthorized: false,
            authToken: null,
          };
        }

        if (serverState.authToken) {
          appCookiesStorage.setItem(
            AUTHORIZATION_TOKEN_STORAGE_KEY,
            serverState.authToken,
            { expires: AUTHORIZATION_TOKEN_EXPIRES },
          );
        }

        if (serverState.isAuthorized && serverState.user) {
          return {
            ...state,
            ...serverState,
          };
        }

        return {
          ...state,
        };
      })
      .addMatcher(
        isFulfilled(loginUser, verifyEmail),
        (state: AuthState, action) => {
          const { payload } = action;

          if (!payload.data.token) {
            return;
          }

          state.isLoading = false;
          state.isAuthorized = true;
          state.user = payload.data.client;
          state.authToken = payload.data.token;

          appCookiesStorage.setItem(
            AUTHORIZATION_TOKEN_STORAGE_KEY,
            payload.data.token,
            { expires: AUTHORIZATION_TOKEN_EXPIRES },
          );
        },
      )
      .addMatcher(
        isFulfilled(
          forgotPassword,
          registerUser,
          changePassword,
          resetPassword,
        ),
        (state: AuthState) => {
          state.isLoading = false;
        },
      )
      .addMatcher(
        isPending(
          registerUser,
          loginUser,
          forgotPassword,
          verifyEmail,
          changePassword,
          resetPassword,
        ),
        (state: AuthState) => {
          state.isLoading = true;
          state.error = null;
        },
      )
      .addMatcher(
        isRejected(
          registerUser,
          loginUser,
          forgotPassword,
          verifyEmail,
          changePassword,
          resetPassword,
        ),
        (state: AuthState, action) => {
          const { error } = action;
          state.isLoading = false;
          state.error = error;

          showApiErrors(error);
        },
      )
      .addMatcher(isRejected(), (state: AuthState, action) => {
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

export const { setIsAuthorized, logOut, resetAuthState } = slice.actions;

export default slice.reducer;
