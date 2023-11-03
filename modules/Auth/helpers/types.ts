export enum AuthFieldsNames {
  FULL_NAME = 'full_name',
  EMAIL = 'email',
  PASSWORD = 'password',
  CREATE_PASSWORD = 'create_password',
  CONFIRM_PASSWORD = 'confirm_password',
}

export type TLogInFormValues = {
  [AuthFieldsNames.EMAIL]: string;
  [AuthFieldsNames.PASSWORD]: string;
};

export type TSignUpFormValues = {
  [AuthFieldsNames.FULL_NAME]: string;
  [AuthFieldsNames.EMAIL]: string;
  [AuthFieldsNames.CREATE_PASSWORD]: string;
};

export type TForgotPasswordFormValues = {
  [AuthFieldsNames.EMAIL]: string;
};

export type TResetPasswordFormValues = {
  [AuthFieldsNames.CREATE_PASSWORD]: string;
  [AuthFieldsNames.CONFIRM_PASSWORD]: string;
};
