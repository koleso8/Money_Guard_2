import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  headerHeight: 0,
  activeModal: null,
};

const slice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setHeaderHeight: (state, action) => {
      state.headerHeight = action.payload;
    },
    openModal: (state, action) => {
      state.activeModal = action.payload;
    },
    closeModal: state => {
      state.activeModal = null;
    },
  },
});

export const modalReducer = slice.reducer;
export const { setHeaderHeight, openModal, closeModal } = slice.actions;
