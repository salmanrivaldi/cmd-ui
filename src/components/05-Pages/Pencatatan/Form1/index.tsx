"use client";
import { useState, useEffect } from "react";
import { StepIndicator } from "@/components/02-Molecules/Steps/StepIndicator";
import { Step1 } from "./Step1";
import { FormData, PriorityFormData } from "@/types/formTypes";
import { Button } from "@/components/01-Atoms/Button/Button";

const steps = [
	{ number: 1, title: "Memprioritaskan" },
	{ number: 2, title: "Melindungi" },
	{ number: 3, title: "Mempromosikan" },
	{ number: 4, title: "Menyediakan" },
	{ number: 5, title: "Menyampaikan" },
];

export const Form1 = () => {
	const [currentStep, setCurrentStep] = useState(1);
	const [formData, setFormData] = useState<FormData>({
		step1: null,
		step2: null,
		step3: null,
		step4: null,
		step5: null,
	});

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth", // This enables smooth scrolling
		});
	};

	// Add effect to handle scroll when step changes
	useEffect(() => {
		scrollToTop();
	}, [currentStep]);

	const handleStep1Next = (data: PriorityFormData) => {
		setFormData({ ...formData, step1: data });
		setCurrentStep(2);
	};

	const navigateToStep = (step: number) => {
		setCurrentStep(step);
	};

	return (
		<div className="min-h-screen bg-white">
			<div className="w-full mx-auto pt-6 px-4 sm:px-6 lg:px-8">
				<StepIndicator
					currentStep={currentStep}
					steps={steps}
					onStepClick={navigateToStep}
				/>
				<div className="mt-8">
					{currentStep === 1 && <Step1 onNext={handleStep1Next} />}
					{/* Add other steps when they are ready */}
				</div>
				{/* Navigation Controls */}
				<div className="flex justify-between mt-6">
					{currentStep > 1 && (
						<Button
							variant="light"
							onClick={() => navigateToStep(currentStep - 1)}
						>
							Previous Step
						</Button>
					)}

					{currentStep < steps.length && (
						<Button onClick={() => navigateToStep(currentStep + 1)}>
							Next Step
						</Button>
					)}
				</div>
			</div>
		</div>
	);
};
