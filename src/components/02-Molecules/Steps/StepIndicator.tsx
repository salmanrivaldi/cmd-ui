"use client";
import React, { useEffect, useState } from "react";

interface Step {
	number: number;
	title: string;
}

interface StepIndicatorProps {
	currentStep: number;
	steps: Step[];
	onStepClick: (step: number) => void; // Prop for handling step clicks
}

export const StepIndicator = ({
	currentStep,
	steps,
	onStepClick,
}: StepIndicatorProps) => {
	const [borderWidth, setBorderWidth] = useState("0%");

	useEffect(() => {
		if (currentStep > 0) {
			setBorderWidth("100%"); // Set width to full when current step is changed
		}
	}, [currentStep]);

	return (
		<div className="w-full">
			{/* Desktop version */}
			<div className="hidden md:flex w-full gap-3">
				{steps.map((step) => (
					<div
						key={step.number}
						className="flex-1 cursor-pointer"
						onClick={() => onStepClick(step.number)}
					>
						<div className="flex flex-col items-start">
							<div className="flex items-center gap-2 pb-2 w-full">
								<span
									className={`text-2xl font-semibold transition-colors duration-300 ease-in-out ${
										step.number === currentStep
											? "text-blue-500"
											: "text-gray-400"
									}`}
								>
									{step.number}
								</span>
								<span
									className={`text-sm transition-colors duration-300 ease-in-out ${
										step.number === currentStep
											? "text-blue-500 font-semibold"
											: "text-gray-400"
									}`}
								>
									{step.title}
								</span>
							</div>
							{/* Border Bottom Logic */}
							<div className="h-1 relative w-full">
								{/* Gray border for non-current steps */}
								<div
									className={`absolute h-1 bg-gray-300 transition-all duration-300 ease-in-out ${
										step.number === currentStep
											? "opacity-0"
											: "opacity-100"
									}`}
									style={{ width: "100%" }}
								/>
								{/* Active border */}
								<div
									className={`h-1 bg-blue-500 transition-all duration-300 ease-in-out`}
									style={{
										width:
											step.number === currentStep
												? borderWidth
												: "0%",
									}}
								/>
							</div>
						</div>
					</div>
				))}
			</div>

			{/* Mobile version */}
			<div className="flex flex-col md:hidden space-y-4">
				{steps.map((step) => (
					<div
						key={step.number}
						className="w-full cursor-pointer"
						onClick={() => onStepClick(step.number)}
					>
						<div className="flex flex-col">
							<div className="flex items-center gap-2 pb-2">
								<span
									className={`text-xl font-semibold transition-colors duration-300 ease-in-out ${
										step.number === currentStep
											? "text-blue-500"
											: "text-gray-400"
									}`}
								>
									{step.number}
								</span>
								<span
									className={`text-sm transition-colors duration-300 ease-in-out ${
										step.number === currentStep
											? "text-blue-500 font-semibold"
											: "text-gray-400"
									}`}
								>
									{step.title}
								</span>
							</div>
							{/* Border Bottom Logic */}
							<div className="h-1 relative w-full">
								{/* Gray border for non-current steps */}
								<div
									className={`absolute h-1 bg-gray-300 transition-all duration-300 ease-in-out ${
										step.number === currentStep
											? "opacity-0"
											: "opacity-100"
									}`}
									style={{ width: "100%" }}
								/>
								{/* Active border */}
								<div
									className={`h-1 bg-blue-500 transition-all duration-300 ease-in-out`}
									style={{
										width:
											step.number === currentStep
												? borderWidth
												: "0%",
									}}
								/>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
