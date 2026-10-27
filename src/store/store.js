import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import campaignReducer from "./campaignSlice";
import submissionsReducer from "./submissionsSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    campaigns: campaignReducer,
    submissions: submissionsReducer
  }
});
