import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  children: {},
};

const slice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.children = action.payload;
    },
    closeModal: state => (state.isOpen = false),
  },
});

export const modalReducer = slice.reducer;
export {};
