import { createAsyncThunk } from '@reduxjs/toolkit';
import { PROFILE_SLICE_NAME } from './models';
import { ProfileAPI } from '@/api';
import { formatApiError } from '@/utils';
import { IApiError } from '@/models/apiError.model';
import {
  IGetUserDataDTO,
  IProfileResponse,
  IUpdateUserDTO,
} from '@/models/profile.model';

export const getUserData = createAsyncThunk<
  IProfileResponse,
  IGetUserDataDTO | undefined,
  { serializedErrorType: IApiError }
>(
  `${PROFILE_SLICE_NAME}/getUserData`,
  async (data?: IGetUserDataDTO) => {
    const response = await ProfileAPI.getUserData(data);
    return response.data;
  },
  { serializeError: formatApiError },
);

export const updateUserData = createAsyncThunk<
  IProfileResponse,
  IUpdateUserDTO,
  { serializedErrorType: IApiError }
>(
  `${PROFILE_SLICE_NAME}/updateUserData`,
  async (data?: IUpdateUserDTO) => {
    const response = await ProfileAPI.updateUserData(data);
    return response.data;
  },
  { serializeError: formatApiError },
);
