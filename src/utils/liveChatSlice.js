import { createSlice } from "@reduxjs/toolkit";
import { liveChatLimit } from "./constant";

const liveChatSlice = createSlice({
  name: "liveChat",
  initialState: {
    chats: [],
  },
  reducers: {
    addChats: (state, actions) => {
      if (state.chats.length > liveChatLimit) {
        state.chats.pop(actions.payload);
      }
      state.chats.unshift(actions.payload);
    },
  },
});

export const { addChats } = liveChatSlice.actions;
export default liveChatSlice.reducer;
