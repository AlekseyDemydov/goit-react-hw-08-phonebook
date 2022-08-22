import { createSlice } from '@reduxjs/toolkit';
import {
  registerUser,
  loginUser,
  logOutUser,
  getCurrentUser,
} from './authorizationOperation';

const authorizationSlice = createSlice({
  name: 'authorization',
  initialState: {
    user: {
      name: '',
      email: '',
    },
    token: '',
    error: null,
  },
  reducers: {
    changeError(state) {
      state.error = null;
    },
  },
  extraReducers: {
    [registerUser.pending]: state => {
      state.error = null;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.token = payload.token;
      state.user = payload.user;
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.error = payload;
    },
    [loginUser.pending]: state => {
      state.error = null;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.token = payload.token;
      state.user = payload.user;
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [getCurrentUser.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [getCurrentUser.fulfilled]: (state, { payload }) => {
      state.user = payload;
    },
    [getCurrentUser.rejected]: (state, { payload }) => {
      state.error = payload;
    },
    [logOutUser.fulfilled]: state => {
      state.token = '';
      state.user.name = '';
      state.user.email = '';
      state.error = null;
    },
  },
});

export const { changeError } = authorizationSlice.actions;

export default authorizationSlice.reducer;
