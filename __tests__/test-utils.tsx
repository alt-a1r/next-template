import React, { ReactNode } from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Store, AnyAction } from '@reduxjs/toolkit';

const pause = (time = 0): Promise<unknown> =>
  new Promise((res) => {
    setTimeout(res, time);
  });

const makeRenderWithStore =
  (store: Store<unknown, AnyAction>) =>
  (ui: React.ReactElement, { ...renderOptions } = {}) => {
    const Wrapper = ({ children }: { children: ReactNode }) => {
      return <Provider store={store}>{children}</Provider>;
    };
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
  };

// re-export everything
export * from '@testing-library/react';
// override render method
export { makeRenderWithStore, pause };

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

/**
 * mockNextUseRouter
 * Mocks the useRouter React hook from Next.js on a test-case by test-case basis
 */
export function mockNextUseRouter<T>(props: {
  route?: string;
  pathname?: string;
  query?: T;
  asPath?: string;
  replace?: () => void;
  push?: () => void;
}) {
  useRouter.mockImplementation(() => ({
    route: props.route,
    pathname: props.pathname,
    query: props.query,
    asPath: props.asPath,
    replace: props.replace,
    push: props.push,
  }));
}

export function makeApiMockResponse<T>(data: T) {
  return {
    data,
    status: 200,
    statusText: 'OK',
    config: {},
    headers: {},
  };
}

describe.skip('Workaround', () => {
  it('should skip', () => {});
});
