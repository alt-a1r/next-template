/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

module.exports = {
  reactStrictMode: true,
  i18n,
  eslint: {
    dirs: ['pages', 'api', 'modules', 'models', 'shared'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: `**.${process.env.NEXT_PUBLIC_IMAGES_HOST}`,
      },
    ],
  },
  compiler: { styledComponents: true },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: { and: [/\.(js|ts)x?$/] },
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            typescript: true,
            ext: 'tsx',
          },
        },
      ],
    });

    return config;
  },
};
