import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getCurrentUserApi,
  loginUserApi,
  logoutUserApi,
  registerUserApi,
} from '../../api/api';

export const registerUser = createAsyncThunk(
  'authRegister',
  async (info, { rejectWithValue }) => {
    try {
      const data = await registerUserApi(info);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'authLogin',
  async (info, { rejectWithValue }) => {
    try {
      const data = await loginUserApi(info);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logOutUser = createAsyncThunk(
  'authLogout',
  async (_, { rejectWithValue }) => {
    try {
      await logoutUserApi();
      return;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  'authCurUser',
  async (token, { rejectWithValue }) => {
    try {
      const data = await getCurrentUserApi(token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
