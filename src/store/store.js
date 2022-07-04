import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "../redux/authReducer";

// import { combineReducers } from "redux";

const reducers = combineReducers({
  auth: authReducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
