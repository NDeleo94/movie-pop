import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "../redux/authReducer";
import { favReducer } from "../redux/favReducer";

// import { combineReducers } from "redux";

const reducers = combineReducers({
  auth: authReducer,
  fav: favReducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
