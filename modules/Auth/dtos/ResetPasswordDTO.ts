import { IResetPasswordDTO } from '@/models/auth.model';
import { AuthFieldsNames, TResetPasswordFormValues } from '../helpers/types';

class ResetPasswordDTO implements IResetPasswordDTO {
  email;
  token;
  password;
  password_confirmed;

  constructor(
    values: TResetPasswordFormValues & { email: string; token: string },
  ) {
    this.email = values.email;
    this.token = values.token;
    this.password = values[AuthFieldsNames.CREATE_PASSWORD];
    this.password_confirmed = values[AuthFieldsNames.CONFIRM_PASSWORD];
  }
}

export default ResetPasswordDTO;
