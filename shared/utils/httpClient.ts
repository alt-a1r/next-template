// Global modules
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import { i18n } from 'next-i18next';
import omit from 'lodash.omit';

// Utils/Helpers
import {
  API_URL,
  AUTHORIZATION_TOKEN_STORAGE_KEY,
  REFRESH_TOKEN_STORAGE_KEY,
  ResponseStatusCodes,
} from '@/constants/common';
import { DEFAULT_LOCALE } from '@/config/locales';
import appCookiesStorage from './appCookies';

const defaultConfigs: AxiosRequestConfig = {
  baseURL: API_URL,
  // TODO: Needs for Refresh Token
  // withCredentials: true,
};

// TODO: Change to real Refresh Token Response
interface RefreshTokenResponse {
  refresh_token: string;
}

interface HttpClientRequestConfig extends AxiosRequestConfig {
  isRetry?: boolean;
}

interface HttpClientError extends AxiosError {
  config: HttpClientRequestConfig;
}

class HttpClient<TClient extends AxiosInstance> {
  private readonly client;
  private refreshRequest: Promise<AxiosResponse<RefreshTokenResponse>> | null;
  private refreshToken;

  get;
  post;
  put;
  patch;
  delete;

  constructor(client: TClient) {
    this.client = client;
    this.refreshRequest = null;
    this.refreshToken = appCookiesStorage.getItem(REFRESH_TOKEN_STORAGE_KEY);

    if (this.refreshToken) {
      appCookiesStorage.removeItem(REFRESH_TOKEN_STORAGE_KEY);
    }

    const requestInterceptor = (config: AxiosRequestConfig) => {
      const isUrlSearchParams = config.params instanceof URLSearchParams;

      const authToken =
        appCookiesStorage.getItem(AUTHORIZATION_TOKEN_STORAGE_KEY) ||
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        (isUrlSearchParams
          ? config.params.get(AUTHORIZATION_TOKEN_STORAGE_KEY)
          : (config?.params?.[AUTHORIZATION_TOKEN_STORAGE_KEY] as string)) ||
        '';

      if (isUrlSearchParams) {
        config.params.delete(AUTHORIZATION_TOKEN_STORAGE_KEY);
      }

      const updated = {
        headers: {},
        ...config,
        params: isUrlSearchParams
          ? config.params
          : omit(config.params || {}, [AUTHORIZATION_TOKEN_STORAGE_KEY]),
      };

      updated.headers['Accept-Language'] = i18n?.language || DEFAULT_LOCALE;

      if (authToken) {
        updated.headers.Authorization = `Bearer ${authToken}`;
      }

      return updated;
    };

    const errorResponseInterceptor = async (error: HttpClientError) => {
      if (!error || !error.response) {
        throw new Error('Server error');
      }

      if (
        !this.refreshToken ||
        error.response.status !== ResponseStatusCodes.SESSION_ENDED ||
        error.config.isRetry
      ) {
        this.refreshRequest = null;
        throw error as Error;
      }

      if (!this.refreshRequest) {
        // TODO Update refresh logic when it will be ready on the backend side
        this.refreshRequest = this.client.get(
          '/refresh',
          // TODO: Maybe pass refresh through cookies
          { params: { refresh_token: this.refreshToken } },
        );
      }

      appCookiesStorage.removeItem(REFRESH_TOKEN_STORAGE_KEY);

      const { data } = await this.refreshRequest;

      this.refreshToken = data?.refresh_token;
      appCookiesStorage.setItem(REFRESH_TOKEN_STORAGE_KEY, this.refreshToken);

      const newRequest = {
        ...error.config,
        isRetry: true,
      };

      return this.client(newRequest);
    };

    /** Adding the request interceptors */
    this.client.interceptors.request.use(requestInterceptor);

    /** Adding the response interceptors */
    this.client.interceptors.response.use(
      (r: AxiosResponse) => r,
      errorResponseInterceptor,
    );

    this.get = this.client.get.bind(this);
    this.post = this.client.post.bind(this);
    this.put = this.client.put.bind(this);
    this.patch = this.client.patch.bind(this);
    this.delete = this.client.delete.bind(this);
  }
}

const defaultClient = axios.create(defaultConfigs);

export const isHttpClientError = axios.isAxiosError;

export default new HttpClient(defaultClient);

export type { AxiosError as HttpClientError };
export type ApiResponse<Response> = Promise<AxiosResponse<Response>>;
