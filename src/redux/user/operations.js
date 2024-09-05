import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('contacts');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContactsThunk = createAsyncThunk(
  'contacts/addContacts',
  async (card, thunkAPI) => {
    try {
      const { data } = await axios.post('contacts', card);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactsThunk = createAsyncThunk(
  'contacts/deleteContacts',
  async (id, thunkAPI) => {
    try {
      await axios.delete(`contacts/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editContactsThunk = createAsyncThunk(
  'contacts/editContact',
  async (card, thunkAPI) => {
    try {
      await axios.patch(`contacts/${card.id}`, {
        name: card.name,
        number: card.number,
      });
      return card;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
