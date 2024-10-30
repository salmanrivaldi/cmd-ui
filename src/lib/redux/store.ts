// redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./slices/formSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

// Define your store structure
export interface StoreState {
    form: ReturnType<typeof formReducer>;
}

export const makeStore = () => {
    return configureStore({
        reducer: {
            form: formReducer,
        },
        // Add middleware here if needed
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: false,
            }),
    });
};

// Infer types from store
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

// Type-safe hooks
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;