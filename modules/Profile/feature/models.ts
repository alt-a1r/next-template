import { IApiError } from '@/models/apiError.model';
import { IUser } from '@/models/user.model';

export const PROFILE_SLICE_NAME = 'profile';

export interface ProfileState {
  isAuthorized: boolean;
  authToken: string | null;
  user: IUser | null;
  isLoading: boolean;
  error: IApiError | null;
}

export const initialState: ProfileState = {
  isAuthorized: false,
  authToken: null,
  user: null,
  isLoading: false,
  error: null,
};
