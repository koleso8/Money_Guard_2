import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTransactionsThunk = createAsyncThunk(
  'transactions/fetchTransactions',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/api/transactions');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addTransactionsThunk = createAsyncThunk(
  'transactions/addTransactions',
  async (card, thunkAPI) => {
    try {
      const { data } = await axios.post('/api/transactions', card);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTransactionsThunk = createAsyncThunk(
  'transactions/deleteTransactions',
  async (id, thunkAPI) => {
    try {
      await axios.delete(`/api/transactions/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editTransactionsThunk = createAsyncThunk(
  'transactions/editTransactions',
  async (card, thunkAPI) => {
    try {
      await axios.patch(`/api/transactions/${card.id}`, {
        transactionDate: card.date,
        type: card.type,
        categoryId: card.id,
        comment: card.comment,
        amount: card.amount,
      });
      return card;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
