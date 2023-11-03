import { AUTHORIZATION_TOKEN_STORAGE_KEY } from '@/constants/common';
import { IUser } from './user.model';

export enum AuthForms {
  LOG_IN = 'login',
  SIGN_UP = 'sign-up',
  FORGOT_PASSWORD = 'forgot',
  RESET_PASSWORD = 'reset',
}

export enum AuthEndpoints {
  REGISTER = '/auth/register',
  VERIFY_EMAIL = '/auth/verification/register',
  LOGIN = '/auth/login',
  CHANGE_PASSWORD = '/auth/change_password',
  FORGOT_PASSWORD = '/auth/reset_password/send',
  RESET_PASSWORD = '/auth/reset_password/reset',
}

// ============== DTO ==============

export interface IAuthorizedRequestDTO {
  [AUTHORIZATION_TOKEN_STORAGE_KEY]?: string;
}

export interface ILoginDTO {
  email: string;
  password: string;
}

export interface IRegistrationDTO {
  full_name: string;
  email: string;
  password: string;
}

export interface IForgotPasswordDTO {
  email: string;
}

export interface IResetPasswordDTO {
  token: string;
  email: string;
  password: string;
}

export interface IVerifyEmailDTO {
  id: string;
  expires: string;
  signature: string;
}

export interface IChangePasswordDTO {
  current_password: string;
  password: string;
}

// ============== Response ==============

export interface IRegistrationResponse {
  data: {
    email: string;
  };
}

export interface IAuthResponse {
  data: {
    token: string;
    client: IUser;
  };
}

export interface IVerifyEmailResponse {
  data: IUser;
}
