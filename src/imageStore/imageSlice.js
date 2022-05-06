/** @format */

import { createSlice } from "@reduxjs/toolkit";

export const imageSlice = createSlice({
  name: "image",
  initialState: {
    value: null,
  },
  reducers: {
    updatedImage: (image, action) => {
      image.value = action.payload;
    },
  },
});

export const imageFileSlice = createSlice({
  name: "imageFile",
  initialState: {
    value: null,
  },
  reducers: {
    updatedImageFile: (image, action) => {
      image.value = action.payload;
    },
  },
});
export const { updatedImageFile } = imageFileSlice.actions;
export const { updatedImage } = imageSlice.actions;

const combineReducer = {
  ImageReducer: imageSlice.reducer,
  ImageFileReducer: imageFileSlice.reducer,
};

export default combineReducer;
