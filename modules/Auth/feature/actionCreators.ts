import { createAsyncThunk } from '@reduxjs/toolkit';
import { AUTH_SLICE_NAME } from './models';
import { AuthAPI } from '@/api';
import { formatApiError } from '@/utils';
import { IApiError } from '@/models/apiError.model';
import {
  IAuthResponse,
  IChangePasswordDTO,
  IForgotPasswordDTO,
  ILoginDTO,
  IRegistrationDTO,
  IRegistrationResponse,
  IResetPasswordDTO,
  IVerifyEmailDTO,
} from '@/models/auth.model';

export const registerUser = createAsyncThunk<
  IRegistrationResponse,
  IRegistrationDTO,
  { serializedErrorType: IApiError }
>(
  `${AUTH_SLICE_NAME}/register`,
  async (data: IRegistrationDTO) => {
    const response = await AuthAPI.register(data);
    return response.data;
  },
  { serializeError: formatApiError },
);

export const loginUser = createAsyncThunk<
  IAuthResponse,
  ILoginDTO,
  { serializedErrorType: IApiError }
>(
  `${AUTH_SLICE_NAME}/login`,
  async (data: ILoginDTO) => {
    const response = await AuthAPI.login(data);
    return response.data;
  },
  { serializeError: formatApiError },
);

export const forgotPassword = createAsyncThunk<
  unknown,
  IForgotPasswordDTO,
  { serializedErrorType: IApiError }
>(
  `${AUTH_SLICE_NAME}/forgotPassword`,
  async (data: IForgotPasswordDTO) => {
    const response = await AuthAPI.forgotPassword(data);
    return response.data;
  },
  { serializeError: formatApiError },
);

export const resetPassword = createAsyncThunk<
  unknown,
  IResetPasswordDTO,
  { serializedErrorType: IApiError }
>(
  `${AUTH_SLICE_NAME}/resetPassword`,
  async (data: IResetPasswordDTO) => {
    const response = await AuthAPI.resetPassword(data);
    return response.data;
  },
  { serializeError: formatApiError },
);

export const verifyEmail = createAsyncThunk<
  IAuthResponse,
  IVerifyEmailDTO,
  { serializedErrorType: IApiError }
>(
  `${AUTH_SLICE_NAME}/verifyEmail`,
  async (data: IVerifyEmailDTO) => {
    const response = await AuthAPI.verifyEmail(data);
    return response.data;
  },
  { serializeError: formatApiError },
);

export const changePassword = createAsyncThunk<
  unknown,
  IChangePasswordDTO,
  { serializedErrorType: IApiError }
>(
  `${AUTH_SLICE_NAME}/changePassword`,
  async (data: IChangePasswordDTO) => {
    const response = await AuthAPI.changePassword(data);
    return response.data;
  },
  { serializeError: formatApiError },
);
