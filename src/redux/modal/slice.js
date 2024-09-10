import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  headerHeight: 0,
  activeModal: null, // Додаємо новий стейт для контролю активної модалки
};

const slice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setHeaderHeight: (state, action) => {
      state.headerHeight = action.payload;
    },
    openModal: (state, action) => {
      state.activeModal = action.payload; // Зберігаємо тип активної модалки
    },
    closeModal: state => {
      state.activeModal = null; // Закриваємо будь-яку активну модалку
    },
  },
});

export const modalReducer = slice.reducer;
export const { setHeaderHeight, openModal, closeModal } = slice.actions;
