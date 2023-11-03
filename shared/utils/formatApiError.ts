import { IApiError, IApiResponseError } from '@/models/apiError.model';
import { ResponseStatusCodes } from '@/constants/common';
import { isHttpClientError } from './httpClient';

const formatApiError = (err: unknown): IApiError => {
  const error: IApiError = {
    status: ResponseStatusCodes.SOMETHING_WRONG,
    message: (err as Error)?.message || 'Error',
    errors: null,
  };

  if (isHttpClientError(err)) {
    const apiResponse = err.response?.data as IApiResponseError;
    error.status = err.response?.status || ResponseStatusCodes.SERVER_ERROR;
    error.message = apiResponse?.message || 'Error';

    if (apiResponse?.errors && Object.keys(apiResponse.errors).length) {
      error.errors = Object.keys(apiResponse.errors).reduce((acc, key) => {
        const message = apiResponse.errors?.[key]?.[0];
        acc[key] = message || error.message;
        return acc;
      }, {} as Record<string, string>);
    }
  }

  return error;
};

export default formatApiError;
