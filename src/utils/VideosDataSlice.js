import { createSlice } from "@reduxjs/toolkit";

const VideosDataSlice = createSlice({
  name: "VideosData",
  initialState: {
    data: [],
  },
  reducers: {
    updateData: (state, actions) => {
      state.data = actions.payload;
    },
  },
});

export const { updateData } = VideosDataSlice.actions;
export default VideosDataSlice.reducer;
