export const ADAPTIVE_SLICE_NAME = 'adaptive';

export interface AdaptiveState {
  isMobile: boolean;
}

export const initialState: AdaptiveState = {
  isMobile: false,
};
