import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const monoApi = axios.create({
  baseURL: 'https://api.monobank.ua/',
  headers: {
    'X-Token': 'uicOW3T53MSEggZSuHAq6OQ3n9ijEWHIc9ZMQHi8L9iE',
  },
});

export const fetchCurrencies = createAsyncThunk(
  'currency/fetchCurrencies',
  async (_, thunkApi) => {
    try {
      const { data } = await monoApi.get('bank/currency');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
