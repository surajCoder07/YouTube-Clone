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
    offSlidebar: (state) => {
      state.isSlidebarOpen = false;
    },
  },
});
export const { toggleSlidebar, offSlidebar } = SlidebarSlice.actions;
export default SlidebarSlice.reducer;
