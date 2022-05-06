/** @format */

import { configureStore } from "@reduxjs/toolkit";
import combineReducer from "../imageStore/imageSlice";

export default configureStore({
  reducer: {
    image: combineReducer.ImageReducer,
    imageFile: combineReducer.ImageFileReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
