import { configureStore } from "@reduxjs/toolkit";
import SlidebarSlice from "../utils/SlidebarSlice";
import VideosDataSlice from "../utils/VideosDataSlice";
import SearchSlice from "./SearchSlice";
import liveChatSlice from "./liveChatSlice";

const Store = configureStore({
  reducer: {
    Slidebar: SlidebarSlice,
    VideoData: VideosDataSlice,
    SearchData: SearchSlice,
    liveChat: liveChatSlice,
  },
});

export default Store;
