export const environments = {
  DEV: 'development',
  STAGE: 'stage',
  PROD: 'production',
};

export const env = {
  environment: process.env.NEXT_PUBLIC_ENVIRONMENT || environments.DEV,
  BASE_API_URL: process.env.NEXT_PUBLIC_API_URL || '',
  BASE_URL: process.env.NEXT_PUBLIC_FRONT_END_URL || '',
  API_URL: process.env.NEXT_PUBLIC_API_URL || '',
  IMAGES_HOST: process.env.NEXT_PUBLIC_IMAGES_HOST || '',
};
