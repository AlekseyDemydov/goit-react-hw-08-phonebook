import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getContactsApi,
  addContactsApi,
  deleteContactApi,
} from '../../api/api';

export const getContact = createAsyncThunk(
  'getContacts',
  async (_, thunkApi) => {
    try {
      const items = await getContactsApi();
      return items;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'addContacts',
  async (item, { rejectWithValue }) => {
    try {
      const addedItem = addContactsApi(item);
      return addedItem;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await deleteContactApi(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
