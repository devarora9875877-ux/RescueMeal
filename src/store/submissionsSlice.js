import { createSlice } from "@reduxjs/toolkit";

const submissionsSlice = createSlice({
  name: "submissions",
  initialState: { donations: 0, volunteers: 0 },
  reducers: {
    recordSubmission(state, action) {
      if (action.payload === "donor") {
        state.donations += 1;
      }
      if (action.payload === "volunteer") {
        state.volunteers += 1;
      }
    }
  }
});

export const { recordSubmission } = submissionsSlice.actions;
export default submissionsSlice.reducer;
