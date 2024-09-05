import { createSlice } from '@reduxjs/toolkit';
import { fetchCurrencies } from './operations';

const initialState = {
  currencies: [],
  isLoading: false,
  isError: false,
  lastRequestTime: '',
};

const slice = createSlice({
  name: 'currency',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchCurrencies.fulfilled, (state, action) => {
        state.currencies = action.payload;
        state.lastRequestTime = action.payload[0].date;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(fetchCurrencies.rejected, state => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(fetchCurrencies.pending, state => {
        state.isLoading = true;
        state.isError = false;
      });
  },
});

export const currencyReducer = slice.reducer;
