// redux/slices/formSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
    steps: {
        step1: null,
        step2: null,
        step3: null,
        step4: null,
        step5: null,
    },
    currentStep: 1,
    isSubmitting: false,
    errors: {},
    isSaved: false,
};

export const submitForm = createAsyncThunk(
    "form/submit",
    async (_, { getState, rejectWithValue }) => {
        try {
            const state = getState() as any;
            const response = await fetch("/api/submit-form", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(state.form.steps),
            });

            if (!response.ok) throw new Error("Failed to submit form");
            return await response.json();
        } catch (error) {
            return rejectWithValue("Failed to submit form");
        }
    }
);

const formSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        updateStep: (state, action: PayloadAction<{ step: string; data: any }>) => {
            const { step, data } = action.payload;
            state.steps[step] = data;
            state.errors[step] = undefined;
            state.isSaved = true;
        },
        setCurrentStep: (state, action: PayloadAction<number>) => {
            state.currentStep = action.payload;
        },
        setError: (state, action: PayloadAction<{ step: string; error: string }>) => {
            const { step, error } = action.payload;
            state.errors[step] = error;
        },
        resetForm: () => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(submitForm.pending, (state) => {
                state.isSubmitting = true;
                state.errors = {};
            })
            .addCase(submitForm.fulfilled, (state) => {
                state.isSubmitting = false;
                state.isSaved = true;
            })
            .addCase(submitForm.rejected, (state, action) => {
                state.isSubmitting = false;
                state.errors.submit = action.payload as string;
            });
    },
});

export const { updateStep, setCurrentStep, setError, resetForm } = formSlice.actions;
export default formSlice.reducer;

// Jika perlu, tambahkan store setup dan hooks
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        form: formSlice.reducer,
    },
});

// Redux hooks dengan any type
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
