import { httpClient, ApiResponse } from '@/utils';
import {
  IGetUserDataDTO,
  IProfileResponse,
  IUpdateUserDTO,
  ProfileEndpoints,
} from '@/models/profile.model';

class ProfileAPI {
  static getUserData(params?: IGetUserDataDTO): ApiResponse<IProfileResponse> {
    return httpClient.get<IProfileResponse>(ProfileEndpoints.ROOT, { params });
  }

  static updateUserData(data?: IUpdateUserDTO): ApiResponse<IProfileResponse> {
    let formData;
    return httpClient.post<IProfileResponse>(
      ProfileEndpoints.ROOT,
      formData || data,
    );
  }
}

export default ProfileAPI;
