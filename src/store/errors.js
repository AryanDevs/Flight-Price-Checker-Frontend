import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginError: false,
  searchError: false,
};

const errorSlice = createSlice({
  name: "error",
  initialState: initialState,
  reducers: {
    createLoginError(state, action) {
      state.loginError = action.payload;
    },
    createSearchError(state, action) {
      state.searchError = action.payload;
    },
  },
});

export const errorActions = errorSlice.actions;

export default errorSlice;
