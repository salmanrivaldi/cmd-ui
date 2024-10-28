"use client";
import React from "react";

interface Step {
	number: number;
	title: string;
}

interface StepIndicatorProps {
	currentStep: number;
	steps: Step[];
}

export const StepIndicator = ({ currentStep, steps }: StepIndicatorProps) => {
	return (
		<div className="w-full">
			{/* Desktop version */}
			<div className="hidden md:flex w-full gap-3">
				{steps.map((step) => (
					<div key={step.number} className="flex-1">
						<div className="flex flex-col items-start">
							<div className="flex items-center gap-2 pb-2 w-full">
								<span
									className={`text-2xl font-semibold ${
										step.number === currentStep
											? "text-blue-500"
											: "text-gray-400"
									}`}
								>
									{step.number}
								</span>
								<span
									className={`text-sm ${
										step.number === currentStep
											? "text-blue-500 font-semibold"
											: "text-gray-400"
									}`}
								>
									{step.title}
								</span>
							</div>
							<div
								className={`h-1 w-full ${
									step.number <= currentStep
										? "bg-blue-500"
										: "bg-gray-200"
								}`}
							/>
						</div>
					</div>
				))}
			</div>

			{/* Mobile version */}
			<div className="flex flex-col md:hidden space-y-4">
				{steps.map((step) => (
					<div key={step.number} className="w-full">
						<div className="flex flex-col">
							<div className="flex items-center gap-2 pb-2">
								<span
									className={`text-xl font-semibold ${
										step.number === currentStep
											? "text-blue-500"
											: "text-gray-400"
									}`}
								>
									{step.number}
								</span>
								<span
									className={`text-sm ${
										step.number === currentStep
											? "text-blue-500 font-semibold"
											: "text-gray-400"
									}`}
								>
									{step.title}
								</span>
							</div>
							<div
								className={`h-1 w-full ${
									step.number <= currentStep
										? "bg-blue-500"
										: "bg-gray-200"
								}`}
							/>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
