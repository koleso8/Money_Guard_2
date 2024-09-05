import { createSlice } from '@reduxjs/toolkit';

const initialState = { current: null };

const slice = createSlice({
  name: 'editing',
  initialState,
  reducers: {
    onEdit: (state, actions) => {
      state.current = actions.payload;
    },
    cancelEdit: state => {
      state.current = null;
    },
  },
});

export const editingReducer = slice.reducer;

export const { onEdit, cancelEdit } = slice.actions;
