"use client";

import { useState } from "react";
import { StepIndicator } from "@/components/02-Molecules/Steps/StepIndicator";
import { StepSatu } from "./StepSatu";
import { FormData, PriorityFormData } from "@/types/form";

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
		stepSatu: null,
		stepDua: null,
		stepTiga: null,
		stepEmpat: null,
		stepLima: null,
	});

	const handleStepSatuNext = (data: PriorityFormData) => {
		setFormData({ ...formData, stepSatu: data });
		setCurrentStep(2);
	};

	const handleStepDuaNext = (data: Record<string, unknown>) => {
		setFormData({ ...formData, stepDua: data });
		setCurrentStep(3);
	};

	const handleStepTigaNext = (data: Record<string, unknown>) => {
		setFormData({ ...formData, stepTiga: data });
		setCurrentStep(4);
	};

	const handleStepEmpatNext = (data: Record<string, unknown>) => {
		setFormData({ ...formData, stepEmpat: data });
		setCurrentStep(5);
	};

	const handleStepLimaNext = (data: Record<string, unknown>) => {
		setFormData({ ...formData, stepLima: data });
		// Handle form completion here
		console.log("Form completed:", formData);
	};

	return (
		<div className="min-h-screen bg-white">
			<div className="max-w-7xl mx-auto pt-6 px-4 sm:px-6 lg:px-8">
				<StepIndicator currentStep={currentStep} steps={steps} />

				<div className="mt-8">
					{currentStep === 1 && (
						<StepSatu onNext={handleStepSatuNext} />
					)}
					{/* Add other steps when they are ready */}
					{/* {currentStep === 2 && <StepDua onNext={handleStepDuaNext} />} */}
					{/* {currentStep === 3 && <StepTiga onNext={handleStepTigaNext} />} */}
					{/* {currentStep === 4 && <StepEmpat onNext={handleStepEmpatNext} />} */}
					{/* {currentStep === 5 && <StepLima onNext={handleStepLimaNext} />} */}
				</div>
			</div>
		</div>
	);
};
