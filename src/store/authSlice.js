import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "idle",
    error: ""
  },
  reducers: {
    loginStarted: (state) => {
      state.status = "loading";
      state.error = "";
    },
    loginSucceeded: (state) => {
      state.status = "success";
      state.error = "";
    },
    loginFailed: (state, action) => {
      state.status = "error";
      state.error = action.payload;
    },
    resetLoginState: (state) => {
      state.status = "idle";
      state.error = "";
    }
  }
});

export const { loginStarted, loginSucceeded, loginFailed, resetLoginState } = authSlice.actions;
export default authSlice.reducer;
