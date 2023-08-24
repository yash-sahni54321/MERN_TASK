import { createReducer } from "@reduxjs/toolkit";

export const authReducer = createReducer(
  {},
  {
    registerRequest: (state) => {
      state.loading = true;
    },
    registerSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.message = action.payload.message;
    },
    registerFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },
    clearMessgae: (state) => {
      state.message = null;
    },
  }
);
