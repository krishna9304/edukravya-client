import { createSlice, Slice, SliceCaseReducers } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { connect } from "socket.io-client";
import { serverURL } from "../../constants";
import { User } from "./user";
import { ADD_USER } from "./socketaction";

const initialState = {
  rooms: [],
  id: null,
};

const ws = connect(serverURL);

export const socketSlice: Slice<
  any,
  SliceCaseReducers<any>,
  "socket"
> = createSlice({
  name: "socket",
  initialState,
  reducers: {
    setSocket: (state: any, action: PayloadAction<User>): void => {
      ws.emit(ADD_USER, action.payload.userId);
      return state;
    },
    removeSocket: (state: any): any => {
      state = null;
      ws.disconnect();
      ws.close();
      return state;
    },
  },
});

export const { setSocket, removeSocket } = socketSlice.actions;

const socketReducer = socketSlice.reducer;
export default socketReducer;
