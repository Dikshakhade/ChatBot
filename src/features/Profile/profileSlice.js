import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
  userAge: 0,
};
const setProfile = createSlice({
  name: "profile",
  initialState,
  reducers: {
    resetProfile: (state) => {
      state.userName = "";
      state.userAge = 0;
    },
    nameReducer: (state, action) => {
      state.userName = action.payload;
    },
    ageReducer: (state, action) => {
      state.userAge = action.payload;
    },
  },
});

export const { resetProfile, nameReducer, ageReducer } = setProfile.actions;
export default setProfile.reducer;
