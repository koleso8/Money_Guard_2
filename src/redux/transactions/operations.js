import { createAsyncThunk } from '@reduxjs/toolkit';

import { getBalanceThunk, goitApi } from '../auth/operations';
import toast from 'react-hot-toast';
import { toastStyles } from '../../helpers/toastStyles';

export const fetchAllTrnThunk = createAsyncThunk(
  'transactions/fetchAllTransactions',
  async (_, thunkAPI) => {
    try {
      const { data } = await goitApi.get('/transactions');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchPeriodTrnThunk = createAsyncThunk(
  'transactions/fetchByPeriodTransactions',
  async (period, thunkAPI) => {
    try {
      const { month, year } = period;
      if (month || year) {
        const { data } = await goitApi.get('/transactions-summary', {
          params: { month, year },
        });
        return data;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addTrnThunk = createAsyncThunk(
  'transactions/addTransaction',
  async (transaction, thunkAPI) => {
    try {
      const { data } = await goitApi.post('/transactions', transaction);
      await thunkAPI.dispatch(getBalanceThunk());
      toast.success('Transaction added!', toastStyles);

      return data;
    } catch (error) {
      toast.error('transaction was not added !', toastStyles);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editTrnThunk = createAsyncThunk(
  'transactions/editTransaction',
  async (transaction, thunkAPI) => {
    try {
      const { id, transactionDate, type, comment, amount } = transaction;
      const { data } = await goitApi.patch(`/transactions/${id}`, {
        transactionDate,
        type,
        comment,
        amount,
      });
      await thunkAPI.dispatch(getBalanceThunk());
      toast.success('transaction was modified !', toastStyles);
      return data;
    } catch (error) {
      toast.error('the transaction was not modified !', toastStyles);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTrnThunk = createAsyncThunk(
  'transactions/deleteTransaction',
  async (transactionId, thunkAPI) => {
    try {
      await goitApi.delete(`/transactions/${transactionId}`);
      await thunkAPI.dispatch(getBalanceThunk());
      toast.success('transaction was deleted !', toastStyles);
      return transactionId;
    } catch (error) {
      toast.error('the transaction was not deleted !', toastStyles);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCategoriesThunk = createAsyncThunk(
  'transactions/getCategories',
  async (_, thunkAPI) => {
    try {
      const { data } = await goitApi.get('/transaction-categories');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
