import { createSlice } from '@reduxjs/toolkit';

const initialState = { name: '' };

const slice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilter: (state, actions) => {
      state.name = actions.payload;
    },
  },
});

export const filtersReducer = slice.reducer;

export const { changeFilter } = slice.actions;
