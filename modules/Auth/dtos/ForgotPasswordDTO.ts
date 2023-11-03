import { IForgotPasswordDTO } from '@/models/auth.model';
import { AuthFieldsNames, TForgotPasswordFormValues } from '../helpers/types';

class ForgotPasswordDTO implements IForgotPasswordDTO {
  email;

  constructor(values: TForgotPasswordFormValues) {
    this.email = values[AuthFieldsNames.EMAIL];
  }
}

export default ForgotPasswordDTO;
