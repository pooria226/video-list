import { createWrapper } from "next-redux-wrapper";
import { configureStore } from "@reduxjs/toolkit";
import { api } from "./apiSlice";
import loaderReducer from "./loaderSlice";

const rootReducer = {
  [api.reducerPath]: api.reducer,
  loader: loaderReducer,
};

export const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
  });

export const wrapper = createWrapper(makeStore, { debug: true });
