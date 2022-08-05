import { createSlice } from "@reduxjs/toolkit";

export const api = createSlice({
  name: "api",
  initialState: {
    userData: null,
  },
  reducers: {
    setLocalStroge: (state, action) => {
      let data = action.payload;
      let userData = JSON.parse(localStorage.getItem("userFormData"));
      localStorage.setItem(
        "userFormData",
        JSON.stringify({ ...userData, ...data })
      );
    },
  },
});

export const { setLocalStroge } = api.actions;

export default api.reducer;
