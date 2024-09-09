import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  headerHeight: 0,
};

const slice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setHeaderHeight: (state, action) => {
      state.headerHeight = action.payload;
    },
  },
});

export const modalReducer = slice.reducer;
export const { setHeaderHeight } = slice.actions;
