"use client";

import { useState } from "react";
import { RadioButton } from "@/components/01-Atoms/Button/RadioButton";
import Label from "@/components/01-Atoms/Form/Label";

export interface Step4Props {
	onNext: (data: any) => void;
}

export const Step4 = ({ onNext }: Step4Props) => {
	const [formData, setFormData] = useState<any>({
		sterileSyringe: "tidak",
		condom: "tidak",
		lubricant: "tidak",
		sbcc: "tidak",
		prepInfo: "tidak",
		prepScreening: "tidak",
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onNext(formData);
	};

	const RadioOptions = ({
		name,
		label,
	}: {
		name: keyof typeof formData; // Ensures name is a key from formData
		label: string;
	}) => (
		<div className="space-y-4">
			<Label>{label}</Label>
			<div className="flex gap-4">
				<RadioButton
					id={`${String(name)}Yes`} // Wrap in String to avoid type errors
					name={String(name)} // Wrap in String to avoid type errors
					value="ya"
					label="Ya"
					checked={formData[name] === "ya"}
					onChange={(e) =>
						setFormData({
							...formData,
							[name]: e.target.value as "ya" | "tidak",
						})
					}
				/>
				<RadioButton
					id={`${String(name)}No`} // Wrap in String to avoid type errors
					name={String(name)} // Wrap in String to avoid type errors
					value="tidak"
					label="Tidak"
					checked={formData[name] === "tidak"}
					onChange={(e) =>
						setFormData({
							...formData,
							[name]: e.target.value as "ya" | "tidak",
						})
					}
				/>
			</div>
		</div>
	);

	return (
		<div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
			<form onSubmit={handleSubmit} className="space-y-6">
				{/* Header */}
				<div className="bg-lime-section shadow-sm -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-3">
					<span className="text-white text-sm sm:text-sm font-semibold">
						4: MENYEDIAKAN | INFORMASI
					</span>
				</div>

				{/* Form Fields */}
				<RadioOptions
					name="sterileSyringe"
					label="a. Alat suntik steril"
				/>
				<RadioOptions name="condom" label="b. Kondom" />
				<RadioOptions name="lubricant" label="c. Pelicin" />
				<RadioOptions name="sbcc" label="d. Materi SBCC" />
				<RadioOptions name="prepInfo" label="e. Informasi PrEP" />
				<RadioOptions
					name="prepScreening"
					label="f. Tautan penapisan PrEP"
				/>
			</form>
		</div>
	);
};
