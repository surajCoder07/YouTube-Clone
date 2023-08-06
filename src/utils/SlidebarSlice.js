import { createSlice } from "@reduxjs/toolkit";

const SlidebarSlice = createSlice({
  name: "Slidebar",
  initialState: {
    isSlidebarOpen: true,
  },
  reducers: {
    toggleSlidebar: (state) => {
      state.isSlidebarOpen = !state.isSlidebarOpen;
    },
  },
});
export const { toggleSlidebar } = SlidebarSlice.actions;
export default SlidebarSlice.reducer;
