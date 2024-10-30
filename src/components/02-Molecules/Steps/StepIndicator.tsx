"use client";
import React from "react";

interface Step {
	number: number;
	title: string;
}

interface StepIndicatorProps {
	currentStep: number;
	steps: ReadonlyArray<Step>; // Change the type to ReadonlyArray
	onStepClick: (step: number) => void;
	disabled?: boolean;
}

interface StepItemProps {
	step: Step;
	currentStep: number;
	onStepClick: (step: number) => void;
	isMobile?: boolean;
}

const StepItem = ({
	step,
	currentStep,
	onStepClick,
	isMobile = false,
}: StepItemProps) => {
	const isActive = step.number === currentStep;

	return (
		<div
			className={`${isMobile ? "w-full" : "flex-1"} cursor-pointer`}
			onClick={() => onStepClick(step.number)}
		>
			<div className={`flex flex-col ${!isMobile && "items-start"}`}>
				<div className="flex items-center gap-2 pb-2 w-full">
					<span
						className={`${
							isMobile ? "text-xl" : "text-2xl"
						} font-semibold 
              transition-colors duration-300 ease-in-out
              ${isActive ? "text-blue-500" : "text-gray-400"}`}
					>
						{step.number}
					</span>
					<span
						className={`text-sm transition-colors duration-300 ease-in-out
              ${isActive ? "text-blue-500 font-semibold" : "text-gray-400"}`}
					>
						{step.title}
					</span>
				</div>

				<div className="h-1 relative w-full">
					{/* Background border */}
					<div
						className={`absolute h-1 bg-gray-300 w-full transition-all 
              duration-300 ease-in-out ${
					isActive ? "opacity-0" : "opacity-100"
				}`}
					/>
					{/* Active border */}
					<div
						className="h-1 bg-blue-500 transition-all duration-300 ease-in-out"
						style={{
							width: isActive ? "100%" : "0%",
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export const StepIndicator = ({
	currentStep,
	steps,
	onStepClick,
}: StepIndicatorProps) => {
	return (
		<div className="w-full">
			{/* Desktop version */}
			<div className="hidden md:flex w-full gap-3">
				{steps.map((step) => (
					<StepItem
						key={step.number}
						step={step}
						currentStep={currentStep}
						onStepClick={onStepClick}
					/>
				))}
			</div>

			{/* Mobile version */}
			<div className="flex flex-col md:hidden space-y-4">
				{steps.map((step) => (
					<StepItem
						key={step.number}
						step={step}
						currentStep={currentStep}
						onStepClick={onStepClick}
						isMobile
					/>
				))}
			</div>
		</div>
	);
};
