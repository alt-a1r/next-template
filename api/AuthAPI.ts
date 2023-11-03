import { httpClient, ApiResponse } from '@/utils';
import {
  AuthEndpoints,
  IAuthResponse,
  IChangePasswordDTO,
  IForgotPasswordDTO,
  ILoginDTO,
  IRegistrationDTO,
  IRegistrationResponse,
  IResetPasswordDTO,
  IVerifyEmailDTO,
} from '@/models/auth.model';

class AuthAPI {
  static login(data: ILoginDTO): ApiResponse<IAuthResponse> {
    return httpClient.post<IAuthResponse>(AuthEndpoints.LOGIN, data);
  }

  static register(data: IRegistrationDTO): ApiResponse<IRegistrationResponse> {
    return httpClient.post<IRegistrationResponse>(AuthEndpoints.REGISTER, data);
  }

  static verifyEmail(data: IVerifyEmailDTO): ApiResponse<IAuthResponse> {
    return httpClient.post<IAuthResponse>(AuthEndpoints.VERIFY_EMAIL, data);
  }

  static forgotPassword(data: IForgotPasswordDTO): ApiResponse<unknown> {
    return httpClient.post<unknown>(AuthEndpoints.FORGOT_PASSWORD, data);
  }

  static resetPassword(data: IResetPasswordDTO): ApiResponse<unknown> {
    return httpClient.post<unknown>(AuthEndpoints.RESET_PASSWORD, data);
  }

  static changePassword(data: IChangePasswordDTO): ApiResponse<unknown> {
    return httpClient.post<unknown>(AuthEndpoints.CHANGE_PASSWORD, data);
  }
}

export default AuthAPI;
