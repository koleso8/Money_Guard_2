import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  addTrnThunk,
  deleteTrnThunk,
  editTrnThunk,
  evoEditTrnThunk,
  fetchAllTrnThunk,
  fetchPeriodTrnThunk,
  getCategoriesThunk,
} from "./operations";

const initialState = {
  items: [],
  statisticsPeriod: {
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
  },
  periodTransactions: [],
  loading: false,
  error: null,
  currentTransaction: null,
  categories: [],
  balance: null,
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,

  reducers: {
    addCurrentTransaction(state, { payload }) {
      state.currentTransaction = payload;
    },
    setStatisticsPeriod(state, { payload }) {
      state.statisticsPeriod = { ...state.statisticsPeriod, ...payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllTrnThunk.fulfilled, (state, { payload }) => {
        state.items = payload;
        const balance = payload.reduce((sum, e) => {
          return sum + e.amount;
        }, 0);
        state.balance = +balance;
      })
      .addCase(fetchPeriodTrnThunk.fulfilled, (state, { payload }) => {
        state.periodTransactions = payload;
      })
      .addCase(getCategoriesThunk.fulfilled, (state, { payload }) => {
        state.categories = payload;
      })
      .addCase(editTrnThunk.fulfilled, (state, { payload }) => {
        payload.transactionDate = payload.transactionDate
          .toString()
          .slice(0, 10);
        state.items = state.items.map((trn) =>
          trn.id === payload.id ? payload : trn
        );
      })
      .addCase(addTrnThunk.fulfilled, (state, { payload }) => {
        payload.transactionDate = payload.transactionDate
          .toString()
          .slice(0, 10);
        const { items } = state;
        state.items = [...items, payload];
      })
      .addCase(deleteTrnThunk.fulfilled, (state, { payload }) => {
        state.items = state.items.filter((trn) => trn.id !== payload);
      })
      .addCase(evoEditTrnThunk.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addMatcher(
        isAnyOf(
          fetchAllTrnThunk.pending,
          fetchPeriodTrnThunk.pending,
          addTrnThunk.pending,
          deleteTrnThunk.pending,
          evoEditTrnThunk.pending
        ),
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchAllTrnThunk.fulfilled,
          fetchPeriodTrnThunk.fulfilled,
          addTrnThunk.fulfilled,
          deleteTrnThunk.fulfilled,
          evoEditTrnThunk.fulfilled
        ),
        (state) => {
          state.loading = false;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          getCategoriesThunk.rejected,
          fetchAllTrnThunk.rejected,
          fetchPeriodTrnThunk.rejected,
          addTrnThunk.rejected,
          deleteTrnThunk.rejected,
          evoEditTrnThunk.rejected
        ),
        (state) => {
          state.loading = false;
          state.error = true;
        }
      );
  },
});

export const transactionsReducer = transactionsSlice.reducer;
export const { addCurrentTransaction, setStatisticsPeriod } =
  transactionsSlice.actions;
