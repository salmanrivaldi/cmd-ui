"use client";

import { useState } from "react";
import { StepIndicator } from "@/components/02-Molecules/Steps/StepIndicator";
import { Step1 } from "./Step1";
import { FormData, PriorityFormData } from "@/types/formTypes";

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

	const handleStep1Next = (data: PriorityFormData) => {
		setFormData({ ...formData, step1: data });
		setCurrentStep(2);
	};

	const handleStep2Next = (data: Record<string, unknown>) => {
		setFormData({ ...formData, step2: data });
		setCurrentStep(3);
	};

	const handleStep3Next = (data: Record<string, unknown>) => {
		setFormData({ ...formData, step3: data });
		setCurrentStep(4);
	};

	const handleStep4Next = (data: Record<string, unknown>) => {
		setFormData({ ...formData, step4: data });
		setCurrentStep(5);
	};

	const handleStep5Next = (data: Record<string, unknown>) => {
		setFormData({ ...formData, step5: data });
		// Handle form completion here
		console.log("Form completed:", formData);
	};

	return (
		<div className="min-h-screen bg-white">
			<div className="w-full mx-auto pt-6 px-4 sm:px-6 lg:px-8">
				<StepIndicator currentStep={currentStep} steps={steps} />

				<div className="mt-8">
					{currentStep === 1 && <Step1 onNext={handleStep1Next} />}
					{/* Add other steps when they are ready */}
					{/* {currentStep === 2 && <Step2 onNext={handleStep2Next} />} */}
					{/* {currentStep === 3 && <Step3 onNext={handleStep3Next} />} */}
					{/* {currentStep === 4 && <Step4 onNext={handleStep4Next} />} */}
					{/* {currentStep === 5 && <Step5 onNext={handleStep5Next} />} */}
				</div>
			</div>
		</div>
	);
};
