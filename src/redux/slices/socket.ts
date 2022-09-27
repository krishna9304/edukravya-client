import { createSlice, Slice, SliceCaseReducers } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export const socketSlice: Slice<
  any,
  SliceCaseReducers<any>,
  "socket"
> = createSlice({
  name: "socket",
  initialState: null,
  reducers: {
    setSocket: (state: any, action: PayloadAction<any>): any => {
      state = action.payload;
      return state;
    },
    removeSocket: (state: any): any => {
      state = null;
      return state;
    },
  },
});

export const { setSocket, removeSocket } = socketSlice.actions;

const socketReducer = socketSlice.reducer;
export default socketReducer;
