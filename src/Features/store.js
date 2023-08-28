import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./User/userSlice";
const Store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default Store;
