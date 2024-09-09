import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';
import { toastStyles } from '../../helpers/toastStyles';

export const goitApi = axios.create({
  baseURL: 'https://wallet.b.goit.study/',
});

const setAuthHeader = token => {
  goitApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  goitApi.defaults.headers.common.Authorization = '';
};

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (userData, thunkAPI) => {
    try {
      const { data } = await goitApi.post('/api/auth/sign-up', userData);
      setAuthHeader(data.token);
      toast.success('Registration successful!', toastStyles);
      return data;
    } catch (error) {
      toast.error('Failed to register!', toastStyles);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (userData, thunkAPI) => {
    try {
      const { data } = await goitApi.post('/api/auth/sign-in', userData);
      setAuthHeader(data.token);
      toast.success('Login successful!', toastStyles);
      return data;
    } catch (error) {
      toast.error('Failed to login!', toastStyles);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await goitApi.delete('/api/auth/sign-out');
      clearAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUserThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persisToken = state.auth.token;

    if (persisToken === null) thunkAPI.rejectWithValue('NO USER');
    try {
      console.log(persisToken);

      setAuthHeader(persisToken);

      const { data } = await goitApi.get('/api/users/current');

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getBalanceThunk = createAsyncThunk(
  'auth/getBalance',
  async (_, thunkAPI) => {
    try {
      const { data } = await goitApi.get('/api/users/current');

      return data.balance;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
