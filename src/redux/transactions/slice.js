import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addTransactionsThunk,
  deleteTransactionsThunk,
  editTransactionsThunk,
  fetchTransactionsThunk,
} from './operations';
// import { success } from '../../components/success';

const initialState = {
  transactions: [],
  loading: false,
  error: null,
};

const slice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    clearItems: state => {
      return { ...state, transactions: [] };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTransactionsThunk.fulfilled, (state, action) => {
        state.transactions = action.payload;
      })
      .addCase(addTransactionsThunk.fulfilled, (state, action) => {
        state.transactions.push(action.payload);
        // success('Contact has been saved');
      })
      .addCase(deleteTransactionsThunk.fulfilled, (state, action) => {
        state.transactions = state.transactions.filter(
          item => item.id !== action.payload
        );
      })
      .addCase(editTransactionsThunk.fulfilled, (state, action) => {
        state.transactions = state.transactions.map(item =>
          item.id === action.payload.id ? { ...item, ...action.payload } : item
        );
      })
      .addMatcher(
        isAnyOf(
          fetchTransactionsThunk.fulfilled,
          addTransactionsThunk.fulfilled,
          deleteTransactionsThunk.fulfilled,
          editTransactionsThunk.fulfilled,

          fetchTransactionsThunk.rejected,
          addTransactionsThunk.rejected,
          deleteTransactionsThunk.rejected,

          editTransactionsThunk.rejected
        ),
        state => {
          state.loading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchTransactionsThunk.rejected,
          addTransactionsThunk.rejected,
          deleteTransactionsThunk.rejected,

          editTransactionsThunk.rejected
        ),
        (state, action) => {
          state.error = action.payload;
        }
      )
      .addMatcher(
        isAnyOf(
          editTransactionsThunk.pending,
          fetchTransactionsThunk.pending,
          addTransactionsThunk.pending,

          deleteTransactionsThunk.pending
        ),
        state => {
          state.error = null;
          state.loading = true;
        }
      );
  },
});

export const transactionsReducer = slice.reducer;
console.log(slice.reducer);

export const {
  getTransactionsThunk,
  addTransactions,
  deleteTransactions,
  chengeTransactions,
  onEdit,
  cancelEdit,
  clearItems,
} = slice.actions;
