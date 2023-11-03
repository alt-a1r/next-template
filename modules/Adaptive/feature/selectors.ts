import { createSelector } from '@reduxjs/toolkit';
import { ADAPTIVE_SLICE_NAME, AdaptiveState } from './models';

type RootState = {
  [ADAPTIVE_SLICE_NAME]: AdaptiveState;
};

const layoutSelector = (state: RootState): AdaptiveState =>
  state[ADAPTIVE_SLICE_NAME];

export const selectIsMobile = createSelector(
  layoutSelector,
  (state: AdaptiveState) => state.isMobile,
);
