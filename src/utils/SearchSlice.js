import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
  name: "Search",
  initialState: {},
  reducers: {
    addDataToSearch: (state, actions) => {
      state = Object.assign(state, actions.payload);
    },
  },
});

export const { addDataToSearch } = SearchSlice.actions;
export default SearchSlice.reducer;
