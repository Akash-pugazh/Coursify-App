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
    addCourse: {
      prepare(courseObj) {
        return {
          payload: {
            courseObj,
          },
        };
      },
      reducer(state, action) {
        const { courseObj } = action.payload;
        if (state.purchasedCourses.includes(courseObj)) return;
        state.purchasedCourses.push(courseObj);
      },
    },
  },
});

export const { setUserDetails, addCourse } = userSlice.actions;
export default userSlice.reducer;
