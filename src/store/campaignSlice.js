import { createSlice } from "@reduxjs/toolkit";

const campaignSlice = createSlice({
  name: "campaigns",
  initialState: { interested: [] },
  reducers: {
    toggleInterest(state, action) {
      const name = action.payload;
      state.interested = state.interested.includes(name)
        ? state.interested.filter((item) => item !== name)
        : [...state.interested, name];
    }
  }
});

export const { toggleInterest } = campaignSlice.actions;
export default campaignSlice.reducer;
