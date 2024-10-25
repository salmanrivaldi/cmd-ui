import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./features/app.slice";
import initializeApi from "./api/api.config";

export const makeStore = () => {
  return configureStore({
    reducer: {
      app: appSlice,
      [initializeApi.reducerPath]: initializeApi.reducer,
    },
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(initializeApi.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
