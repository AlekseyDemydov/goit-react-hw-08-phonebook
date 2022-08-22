import { createSlice } from '@reduxjs/toolkit';
import { getContact, addContact, deleteContact } from './contactsOperation';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
    isLoading: false,
    error: '',
  },
  reducers: {
    filterContacts(state, { payload }) {
      state.filter = payload;
    },
  },
  extraReducers: {
    [getContact.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [getContact.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = payload;
    },
    [getContact.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [addContact.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [addContact.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = [...state.items, payload];
    },
    [addContact.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [deleteContact.pending]: state => {
      state.isLoading = false;
      state.error = null;
    },
    [deleteContact.fulfilled]: (state, { payload }) => {
      state.items = state.items.filter(el => el.id !== payload);
    },
    [deleteContact.rejected]: (state, { payload }) => {
      state.error = payload;
    },
  },
});

export const { filterContacts } = contactsSlice.actions;
export default contactsSlice.reducer;
