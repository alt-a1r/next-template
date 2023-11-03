import { createAction, createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { ADAPTIVE_SLICE_NAME, initialState, AdaptiveState } from './models';

const hydrate = createAction<{ [ADAPTIVE_SLICE_NAME]: AdaptiveState }>(HYDRATE);

export const slice = createSlice({
  name: ADAPTIVE_SLICE_NAME,
  initialState,
  reducers: {
    setIsMobile(state, action) {
      state.isMobile = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(hydrate, (state: AdaptiveState, action) => ({
      ...state,
      ...action.payload[ADAPTIVE_SLICE_NAME],
    }));
  },
});

export const { setIsMobile } = slice.actions;

export default slice.reducer;
