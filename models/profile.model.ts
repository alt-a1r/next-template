import { IAuthorizedRequestDTO } from './auth.model';
import { IUser } from './user.model';

export enum ProfileEndpoints {
  ROOT = '/profile',
  CHANGE_PASSWORD = '/profile/update-password',
}

// ============== DTO ==============

export type IGetUserDataDTO = IAuthorizedRequestDTO;

export interface IUpdateUserDTO {
  first_name?: string;
  last_name?: string;
  industry?: string;
}

// ============== Response ==============

export interface IProfileResponse {
  data: IUser;
}
