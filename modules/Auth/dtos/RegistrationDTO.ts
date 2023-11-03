import { IRegistrationDTO } from '@/models/auth.model';
import { AuthFieldsNames, TSignUpFormValues } from '../helpers/types';

class RegistrationDTO implements IRegistrationDTO {
  full_name;
  email;
  password;

  constructor(values: TSignUpFormValues) {
    this.full_name = values[AuthFieldsNames.FULL_NAME];
    this.email = values[AuthFieldsNames.EMAIL];
    this.password = values[AuthFieldsNames.CREATE_PASSWORD];
  }
}

export default RegistrationDTO;
