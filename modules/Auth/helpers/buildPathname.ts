import { AuthForms } from '@/models/auth.model';
import { Routes } from '@/constants/routes';

const buildPathname = (authFormType: AuthForms) => ({
  pathname: Routes.AUTH,
  query: { type: authFormType },
});

export default buildPathname;
