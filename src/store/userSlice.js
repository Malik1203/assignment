import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: JSON.parse(localStorage.getItem("userData")) || {},
  reducers: {
    saveUser: (state, action) => {
      localStorage.setItem("userData", JSON.stringify(action.payload));
      return action.payload;
    },
  },
});

export const { saveUser } = userSlice.actions;
export default userSlice.reducer;
