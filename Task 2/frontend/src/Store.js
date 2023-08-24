import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./redux/reducer";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
