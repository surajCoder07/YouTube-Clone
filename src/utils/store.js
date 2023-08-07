import { configureStore } from "@reduxjs/toolkit";
import SlidebarSlice from "../utils/SlidebarSlice";
import VideosDataSlice from "../utils/VideosDataSlice";
import SearchSlice from "./SearchSlice";

const Store = configureStore({
  reducer: {
    Slidebar: SlidebarSlice,
    VideoData: VideosDataSlice,
    SearchData: SearchSlice,
  },
});

export default Store;
