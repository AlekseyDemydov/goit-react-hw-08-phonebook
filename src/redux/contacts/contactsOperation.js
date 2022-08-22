import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getContactsApi,
  addContactsApi,
  deleteContactApi,
} from '../../api/api';

export const getContacts = createAsyncThunk(
  'getContacts',
  async (token, thunkApi) => {
    try {
      const items = await getContactsApi(token);
      return items;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContacts = createAsyncThunk(
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
