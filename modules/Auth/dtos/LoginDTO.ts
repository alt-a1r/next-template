import { ILoginDTO } from '@/models/auth.model';
import { AuthFieldsNames, TLogInFormValues } from '../helpers/types';

class LoginDTO implements ILoginDTO {
  email;
  password;

  constructor(values: TLogInFormValues) {
    this.email = values[AuthFieldsNames.EMAIL];
    this.password = values[AuthFieldsNames.PASSWORD];
  }
}

export default LoginDTO;
