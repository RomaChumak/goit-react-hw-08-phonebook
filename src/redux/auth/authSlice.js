import { createSlice } from '@reduxjs/toolkit';
import {
  registerUser,
  logInUser,
  logOutUser,
  refreshUser,
} from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  isError: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [registerUser.pending](state) {
      state.isLoading = true;
    },
    [registerUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [registerUser.rejected](state, action) {
      state.isLoading = false;
      state.isError = action.payload;
    },

    [logInUser.pending](state) {
      state.isLoading = true;
    },
    [logInUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [logInUser.rejected](state, action) {
      state.isLoading = false;
      state.isError = action.payload;
    },

    [logOutUser.pending](state) {
      state.isLoading = true;
    },
    [logOutUser.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
    },
    [logOutUser.rejected](state, action) {
      state.isLoading = false;
      state.isError = action.payload;
    },

    [refreshUser.pending](state) {
      state.isLoading = true;
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.isRefreshing = false;
    },
    [refreshUser.rejected](state, action) {
      state.isLoading = false;
      state.isError = action.payload;
      state.isRefreshing = false;
    },
  },
});

export const authReducer = authSlice.reducer;