import { AuthForms } from '@/models/auth.model';

export const authPageTitleKeyMap: Record<AuthForms, string> = {
  [AuthForms.LOG_IN]: 'log_in',
  [AuthForms.SIGN_UP]: 'sign_up',
  [AuthForms.FORGOT_PASSWORD]: 'forgot_password',
  [AuthForms.RESET_PASSWORD]: 'reset_password',
};
