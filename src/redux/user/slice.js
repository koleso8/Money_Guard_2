import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addContactsThunk,
  deleteContactsThunk,
  editContactsThunk,
  fetchContactsThunk,
} from './operations';
import { success } from '../../components/success';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const slice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    clearItems: state => {
      return { ...state, items: [] };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContactsThunk.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addContactsThunk.fulfilled, (state, action) => {
        state.items.push(action.payload);
        success('Contact has been saved');
      })
      .addCase(deleteContactsThunk.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload);
      })
      .addCase(editContactsThunk.fulfilled, (state, action) => {
        state.items = state.items.map(item =>
          item.id === action.payload.id ? { ...item, ...action.payload } : item
        );
      })
      .addMatcher(
        isAnyOf(
          fetchContactsThunk.fulfilled,
          addContactsThunk.fulfilled,
          deleteContactsThunk.fulfilled,
          editContactsThunk.fulfilled,

          fetchContactsThunk.rejected,
          addContactsThunk.rejected,
          deleteContactsThunk.rejected,

          editContactsThunk.rejected
        ),
        state => {
          state.loading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContactsThunk.rejected,
          addContactsThunk.rejected,
          deleteContactsThunk.rejected,

          editContactsThunk.rejected
        ),
        (state, action) => {
          state.error = action.payload;
        }
      )
      .addMatcher(
        isAnyOf(
          editContactsThunk.pending,
          fetchContactsThunk.pending,
          addContactsThunk.pending,

          deleteContactsThunk.pending
        ),
        state => {
          state.error = null;
          state.loading = true;
        }
      );
  },
});

export const contactsReducer = slice.reducer;

export const {
  addContact,
  deleteContact,
  chengeContact,
  onEdit,
  cancelEdit,
  changeFilter,
  clearItems,
} = slice.actions;
