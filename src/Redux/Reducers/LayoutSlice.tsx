import { createSlice } from "@reduxjs/toolkit";
import { LayoutState } from "../../Types/LayoutTypes";

const initialState: LayoutState = {
  searchIcon: false,
  bookMarkClass: false,
  pinedMenu: [],
  sideBarToggle: false,
  margin: 0,
};

const LayoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setSearchIcon: (state, action) => {
      state.searchIcon = action.payload;
    },
    setBookMarkClass: (state, action) => {
      state.bookMarkClass = action.payload;
    },
    setPinedMenu: (state, action) => {
      state.pinedMenu = action.payload;
    },
    setSideBarToggle: (state, action) => {
      state.sideBarToggle = action.payload;
    },
    scrollToLeft: (state) => {
      state.margin += 500;
    },
    scrollToRight: (state) => {
      state.margin -= 500;
    },
  },
});
export const { setSearchIcon, setBookMarkClass, setPinedMenu, setSideBarToggle, scrollToLeft, scrollToRight } = LayoutSlice.actions;
export default LayoutSlice.reducer;
