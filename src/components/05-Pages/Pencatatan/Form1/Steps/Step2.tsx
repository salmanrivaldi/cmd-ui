"use client";

import { useState } from "react";
import { RadioButton } from "@/components/01-Atoms/Button/RadioButton";
import { Input } from "@/components/01-Atoms/Form/Input";
import Label from "@/components/01-Atoms/Form/Label";
import { Select } from "@/components/01-Atoms/Form/Select";

export interface Step2Props {
	onNext: (data: any) => void;
}

export const Step2 = ({ onNext }: Step2Props) => {
	const [formData, setFormData] = useState<any>({
		uic: "",
		name: "",
		birthYear: "",
		birthMonth: "",
		birthDate: "",
		phoneNumber: "",
		hasIdCard: "",
		hasInsurance: "",
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onNext(formData);
	};

	// Generate year options (e.g., last 100 years)
	const currentYear = new Date().getFullYear();
	const yearOptions = Array.from({ length: 100 }, (_, i) => ({
		value: String(currentYear - i),
		label: String(currentYear - i),
	}));

	// Generate month options
	const monthOptions = Array.from({ length: 12 }, (_, i) => ({
		value: String(i + 1).padStart(2, "0"),
		label: String(i + 1).padStart(2, "0"),
	}));

	// Generate date options
	const dateOptions = Array.from({ length: 31 }, (_, i) => ({
		value: String(i + 1).padStart(2, "0"),
		label: String(i + 1).padStart(2, "0"),
	}));

	return (
		<div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
			<form onSubmit={handleSubmit} className="space-y-6">
				{/* Header */}
				<div className="bg-lime-section shadow-sm -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-3">
					<span className="text-white text-sm sm:text-sm font-semibold">
						2: MELINDUNGI
					</span>
				</div>

				{/* UIC Section */}
				<div className="space-y-4">
					<Label htmlFor="uic">UIC</Label>
					<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
						<Input
							id="name"
							type="text"
							maxLength={4}
							placeholder="4 huruf nama"
							value={formData.name}
							onChange={(e) =>
								setFormData({
									...formData,
									name: e.target.value.toUpperCase(),
								})
							}
						/>
						<Select
							id="birthYear"
							value={formData.birthYear}
							onChange={(e) =>
								setFormData({
									...formData,
									birthYear: e.target.value,
								})
							}
							options={yearOptions}
							placeholder="Tahun"
						/>
						<Select
							id="birthMonth"
							value={formData.birthMonth}
							onChange={(e) =>
								setFormData({
									...formData,
									birthMonth: e.target.value,
								})
							}
							options={monthOptions}
							placeholder="Bulan"
						/>
						<Select
							id="birthDate"
							value={formData.birthDate}
							onChange={(e) =>
								setFormData({
									...formData,
									birthDate: e.target.value,
								})
							}
							options={dateOptions}
							placeholder="Tanggal"
						/>
					</div>
					<div className="text-sm text-gray-500">
						Format: XXXX/YY/MM/DD (e.g., SULA/90/12/14)
					</div>
				</div>

				{/* Phone Number */}
				<div className="space-y-2">
					<Label htmlFor="phoneNumber">No. HP</Label>
					<div className="grid grid-cols-1 gap-4">
						<Input
							id="phoneNumber"
							type="tel"
							value={formData.phoneNumber}
							onChange={(e) =>
								setFormData({
									...formData,
									phoneNumber: e.target.value,
								})
							}
						/>
						<div className="flex gap-4">
							<RadioButton
								id="noPhone"
								name="phoneStatus"
								value="no-phone"
								label="Tidak memiliki"
								checked={formData.phoneNumber === "no-phone"}
								onChange={() =>
									setFormData({
										...formData,
										phoneNumber: "no-phone",
									})
								}
							/>
							<RadioButton
								id="noShare"
								name="phoneStatus"
								value="no-share"
								label="Tidak mau memberi"
								checked={formData.phoneNumber === "no-share"}
								onChange={() =>
									setFormData({
										...formData,
										phoneNumber: "no-share",
									})
								}
							/>
						</div>
					</div>
				</div>

				{/* ID Card Question */}
				<div className="space-y-2">
					<Label>Apakah Anda memiliki KTP?</Label>
					<div className="flex gap-4">
						<RadioButton
							id="hasIdNo"
							name="hasIdCard"
							value="tidak"
							label="Tidak"
							checked={formData.hasIdCard === "tidak"}
							onChange={(e) =>
								setFormData({
									...formData,
									hasIdCard: e.target.value,
								})
							}
						/>
						<RadioButton
							id="hasIdYes"
							name="hasIdCard"
							value="ya"
							label="Ya"
							checked={formData.hasIdCard === "ya"}
							onChange={(e) =>
								setFormData({
									...formData,
									hasIdCard: e.target.value,
								})
							}
						/>
					</div>
				</div>

				{/* Insurance Question */}
				<div className="space-y-2">
					<Label>Apakah Anda memiliki asuransi?</Label>
					<div className="flex gap-4">
						<RadioButton
							id="hasInsuranceNo"
							name="hasInsurance"
							value="tidak"
							label="Tidak"
							checked={formData.hasInsurance === "tidak"}
							onChange={(e) =>
								setFormData({
									...formData,
									hasInsurance: e.target.value,
								})
							}
						/>
						<RadioButton
							id="hasInsuranceYes"
							name="hasInsurance"
							value="ya"
							label="Ya"
							checked={formData.hasInsurance === "ya"}
							onChange={(e) =>
								setFormData({
									...formData,
									hasInsurance: e.target.value,
								})
							}
						/>
					</div>
				</div>
			</form>
		</div>
	);
};
