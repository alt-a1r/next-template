import { IApiError } from '@/models/apiError.model';
import { showErrorToast } from '@/components';

const showApiErrors = ({ message, errors }: IApiError) => {
  console.warn('=====> message, errors', message, errors);
  if (errors) {
    return Object.values(errors).map((value) =>
      showErrorToast({ message: value || message }),
    );
  }

  return showErrorToast({ message });
};

export default showApiErrors;
