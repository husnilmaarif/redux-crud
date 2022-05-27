import { createSlice } from "@reduxjs/toolkit";
import { UserData } from "../FakeData";

export const userSlice = createSlice({
  name: "users",
  initialState: { value: UserData },
  reducers: {
    addUser: (state, action) => {
      // write code for adding user
      state.value.push(action.payload)
    },
  },
});

export const {addUser} = userSlice.actions
export default userSlice.reducer;
