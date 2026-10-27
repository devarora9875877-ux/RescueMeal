import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import campaignReducer from "./campaignSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    campaigns: campaignReducer
  }
});
