import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  photo: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },

    logoutUser: (state) => {
      state.name = "";
      state.email = "";
      state.photo = null;
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
