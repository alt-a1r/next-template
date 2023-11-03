const LOCALES = {
  EN: 'en',
};

const DEFAULT_LOCALE = LOCALES.EN;

const SUPPORTED_LOCALES = [LOCALES.EN];

module.exports = {
  LOCALES,
  DEFAULT_LOCALE,
  SUPPORTED_LOCALES,
  i18n: {
    returnNull: false,
    defaultLocale: DEFAULT_LOCALE,
    locales: SUPPORTED_LOCALES,
  },
};
