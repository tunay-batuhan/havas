import { createSlice } from "@reduxjs/toolkit";

export const api = createSlice({
  name: "api",
  initialState: {
    userData: {},
  },
  reducers: {
    setUserData: (state, action) => {
      //set state
      let data = action.payload;
      state.userData = { ...state.userData, ...data };

      //Set local stroge
      let userData = JSON.parse(localStorage.getItem("userFormData"));
      localStorage.setItem(
        "userFormData",
        JSON.stringify({ ...userData, ...data })
      );
    },
    clearData: (state) => {
      localStorage.removeItem("userFormData");
      state.userData = {};
    },
  },
});

export const { setUserData, clearData } = api.actions;

export default api.reducer;
