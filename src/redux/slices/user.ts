import { createSlice, Slice, SliceCaseReducers } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface User {
  name?: string;
  email?: string;
  phone?: string;
  userId?: string;
  bio?: string;
  userType?: "student" | "educator";
  avatar?: string;
  emailVerified?: boolean;
  phoneVerified?: boolean;
}

const initialUser: User = {
  name: undefined,
  userId: undefined,
  email: undefined,
  phone: undefined,
  bio: undefined,
  userType: undefined,
  avatar: undefined,
  emailVerified: undefined,
  phoneVerified: undefined,
};

export const userSlice: Slice<
  User,
  SliceCaseReducers<User>,
  "user"
> = createSlice({
  name: "user",
  initialState: initialUser,
  reducers: {
    setUser: (state: User, action: PayloadAction<User>): User => {
      state = {
        ...state,
        ...{
          name: action.payload?.name,
          userId: action.payload?.userId,
          email: action.payload?.email,
          phone: action.payload?.phone,
          bio: action.payload?.bio,
          userType: action.payload?.userType,
          avatar: action.payload?.avatar,
          emailVerified: action.payload?.emailVerified,
          phoneVerified: action.payload?.phoneVerified,
        },
      };
      console.log(state);
      return state;
    },
    removeUser: (state: User): User => {
      state = initialUser;
      return state;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

const userReducer = userSlice.reducer;
export default userReducer;
