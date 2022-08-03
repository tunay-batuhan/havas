import { createSlice } from "@reduxjs/toolkit";

export const api = createSlice({
  name: "api",
  initialState: {
    userData: null,
  },
  reducers: {
    setLocalStroge: (state, action) => {
      let data = action.payload[0];
      let name = action.payload[1];
      localStorage.setItem(name, JSON.stringify(data));
    },
  },
});

export const { setLocalStroge } = api.actions;

export default api.reducer;
