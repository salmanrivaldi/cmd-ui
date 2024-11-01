"use client";
import { useState, useEffect } from "react";
import { StepIndicator } from "@/components/02-Molecules/Steps/StepIndicator";
import { Button } from "@/components/01-Atoms/Button/Button";
import { Step1, Step2, Step3, Step4, Step5 } from "./Steps";

const steps = [
	{ number: 1, title: "Memprioritaskan" },
	{ number: 2, title: "Melindungi" },
	{ number: 3, title: "Mempromosikan" },
	{ number: 4, title: "Menyediakan" },
	{ number: 5, title: "Menyampaikan" },
];

export const Form1 = () => {
	const [currentStep, setCurrentStep] = useState(1);
	const [formData, setFormData] = useState<any>({
		step1: null,
		step2: null,
		step3: null,
		step4: null,
		step5: null,
	});

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		scrollToTop();
	}, [currentStep]);

	const handleStep1Next = (data: any) => {
		setFormData({ ...formData, step1: data });
		setCurrentStep(2);
	};

	const handleStep2Next = (data: any) => {
		setFormData({ ...formData, step2: data });
		setCurrentStep(3);
	};

	const handleStep3Next = (data: any) => {
		setFormData({ ...formData, step3: data });
		setCurrentStep(4);
	};

	const handleStep4Next = (data: any) => {
		setFormData({ ...formData, step4: data });
		setCurrentStep(5);
	};

	const handleSubmit = () => {
		// Handle form submission here
		console.log("Form submitted:", formData);
	};

	const navigateToStep = (step: number) => {
		setCurrentStep(step);
	};

	return (
		<div className=" bg-white">
			<div className="w-full mx-auto pt-6 px-4 sm:px-6 lg:px-8">
				<StepIndicator
					currentStep={currentStep}
					steps={steps}
					onStepClick={navigateToStep}
				/>
				<div className="mt-8">
					{currentStep === 1 && <Step1 onNext={handleStep1Next} />}
					{currentStep === 2 && <Step2 onNext={handleStep2Next} />}
					{currentStep === 3 && <Step3 onNext={handleStep3Next} />}
					{currentStep === 4 && <Step4 onNext={handleStep4Next} />}
					{currentStep === 5 && <Step5 onSubmit={handleSubmit} />}
				</div>

				{/* Divider */}
				<div className="my-6 border-t border-gray-200" />

				{/* Navigation Controls */}
				<div className="flex justify-between items-center pb-6">
					<div>
						{currentStep > 1 && (
							<Button
								variant="light"
								onClick={() => navigateToStep(currentStep - 1)}
							>
								Previous Step
							</Button>
						)}
					</div>
					<div className="flex gap-4">
						{currentStep === steps.length ? (
							<Button
								onClick={handleSubmit}
								className="bg-green-500 text-white hover:bg-green-600"
							>
								Submit
							</Button>
						) : (
							<Button
								variant="primary"
								onClick={() => navigateToStep(currentStep + 1)}
							>
								Next Step
							</Button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
