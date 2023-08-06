import { configureStore } from "@reduxjs/toolkit";
import SlidebarSlice from "../utils/SlidebarSlice";
import VideosDataSlice from "../utils/VideosDataSlice";

const Store = configureStore({
  reducer: {
    Slidebar: SlidebarSlice,
    VideoData: VideosDataSlice,
  },
});

export default Store;
