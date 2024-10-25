"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AppSlice {
  isSidebarOpen: boolean;
}

const initialState: AppSlice = {
  isSidebarOpen: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    openSidebar: (state, action: PayloadAction<boolean>) => {
      state.isSidebarOpen = action.payload;
    },
  },
});

export const { openSidebar } = appSlice.actions;
export default appSlice.reducer;
