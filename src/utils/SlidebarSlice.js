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
    onSlidebar: (state) => {
      state.isSlidebarOpen = true;
    },
  },
});
export const { toggleSlidebar, offSlidebar, onSlidebar } =
  SlidebarSlice.actions;
export default SlidebarSlice.reducer;
