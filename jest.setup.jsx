import React, { Fragment } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@testing-library/jest-dom/extend-expect';

const renderComponents = (components, transKey) => {
  const children = Object.keys(components).map((key) => (
    <Fragment key={key}>{components[key]}</Fragment>
  ));
  return (
    <>
      {transKey}
      {children}
    </>
  );
};

jest.mock('next-i18next', () => ({
  Trans: ({ components, i18nKey }) => renderComponents(components, i18nKey),
  useTranslation: () => ({
    t: (str) => str,
    i18n: {
      changeLanguage: () => Promise.resolve(),
    },
  }),
}));

jest.mock('@/utils', () => {
  const original = jest.requireActual('@/utils');
  return {
    ...original,
    httpClient: {
      get: jest.fn(),
      post: jest.fn(),
      put: jest.fn(),
      delete: jest.fn(),
    },
  };
});
