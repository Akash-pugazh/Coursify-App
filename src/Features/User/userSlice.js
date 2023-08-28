import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
  password: "",
  purchasedCourses: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserDetails: {
      prepare(userName, password) {
        return {
          payload: {
            userName,
            password,
          },
        };
      },
      reducer(state, action) {
        const { userName, password } = action.payload;
        state.userName = userName;
        state.password = password;
      },
    },
  },
});

export const { setUserDetails } = userSlice.actions;
export default userSlice.reducer;