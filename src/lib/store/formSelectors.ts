// store/formSelectors.ts
import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from './index';

export const selectCurrentStep = (state: RootState) => state.form.currentStep;
export const selectStepData = (state: RootState) => state.form.steps;
export const selectErrors = (state: RootState) => state.form.errors;
export const selectIsSubmitting = (state: RootState) => state.form.isSubmitting;
export const selectIsSaved = (state: RootState) => state.form.isSaved;

export const selectCurrentStepData = createSelector(
    [selectCurrentStep, selectStepData],
    (currentStep, steps) => steps[`step${currentStep}` as keyof typeof steps]
);

export const selectIsStepValid = createSelector(
    [selectCurrentStep, selectErrors],
    (currentStep, errors) => !errors[`step${currentStep}`]
);