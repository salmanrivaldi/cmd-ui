"use client";

import { useState } from "react";
import { RadioButton } from "@/components/01-Atoms/Button/RadioButton";
import Checkbox from "@/components/01-Atoms/Form/Checkbox";
import Label from "@/components/01-Atoms/Form/Label";

export interface Step3Props {
	onNext: (data: any) => void;
}

export const Step3 = ({ onNext }: Step3Props) => {
	const [formData, setFormData] = useState<any>({
		hivStatus: "tidak-tahu",
		sharedNeedle: "tidak",
		unprotectedSex: "tidak",
		violence: "tidak",
		symptoms: {
			fever: false,
			weightLoss: false,
			nightSweats: false,
			groinSwelling: false,
			cough: false,
			none: false,
			multiple: false,
		},
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onNext(formData);
	};

	return (
		<div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
			<form onSubmit={handleSubmit} className="space-y-6">
				{/* Header */}
				<div className="bg-lime-section shadow-sm -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-3">
					<span className="text-white text-sm sm:text-sm font-semibold">
						3: MEMPROMOSIKAN & MENGARAHKAN
					</span>
				</div>

				{/* HIV Status */}
				<div className="space-y-4">
					<Label>a. Apakah Anda mengetahui status HIV Anda?</Label>
					<div className="flex gap-4">
						<RadioButton
							id="hivStatusNo"
							name="hivStatus"
							value="tidak-tahu"
							label="Tidak tahu"
							checked={formData.hivStatus === "tidak-tahu"}
							onChange={(e) =>
								setFormData({
									...formData,
									hivStatus: e.target.value as
										| "tidak-tahu"
										| "ya",
								})
							}
						/>
						<RadioButton
							id="hivStatusYes"
							name="hivStatus"
							value="ya"
							label="Ya"
							checked={formData.hivStatus === "ya"}
							onChange={(e) =>
								setFormData({
									...formData,
									hivStatus: e.target.value as
										| "tidak-tahu"
										| "ya",
								})
							}
						/>
					</div>
				</div>

				{/* Shared Needle */}
				<div className="space-y-4">
					<Label>
						b. Apakah Anda atau pasangan Anda pernah berbagi
						menggunakan alat suntik?
					</Label>
					<div className="flex gap-4">
						<RadioButton
							id="sharedNeedleYes"
							name="sharedNeedle"
							value="ya"
							label="Ya"
							checked={formData.sharedNeedle === "ya"}
							onChange={(e) =>
								setFormData({
									...formData,
									sharedNeedle: e.target.value as
										| "ya"
										| "tidak",
								})
							}
						/>
						<RadioButton
							id="sharedNeedleNo"
							name="sharedNeedle"
							value="tidak"
							label="Tidak"
							checked={formData.sharedNeedle === "tidak"}
							onChange={(e) =>
								setFormData({
									...formData,
									sharedNeedle: e.target.value as
										| "ya"
										| "tidak",
								})
							}
						/>
					</div>
				</div>

				{/* Unprotected Sex */}
				<div className="space-y-4">
					<Label>
						c. Apakah Anda atau pasangan Anda pernah berhubungan
						seks tanpa menggunakan kondom?
					</Label>
					<div className="flex gap-4">
						<RadioButton
							id="unprotectedSexYes"
							name="unprotectedSex"
							value="ya"
							label="Ya"
							checked={formData.unprotectedSex === "ya"}
							onChange={(e) =>
								setFormData({
									...formData,
									unprotectedSex: e.target.value as
										| "ya"
										| "tidak",
								})
							}
						/>
						<RadioButton
							id="unprotectedSexNo"
							name="unprotectedSex"
							value="tidak"
							label="Tidak"
							checked={formData.unprotectedSex === "tidak"}
							onChange={(e) =>
								setFormData({
									...formData,
									unprotectedSex: e.target.value as
										| "ya"
										| "tidak",
								})
							}
						/>
					</div>
				</div>

				{/* Violence */}
				<div className="space-y-4">
					<Label>
						d. Apakah Anda mengalami kekerasan secara fisik maupun
						seksual dalam 3 bulan terakhir?
					</Label>
					<div className="flex gap-4">
						<RadioButton
							id="violenceYes"
							name="violence"
							value="ya"
							label="Ya"
							checked={formData.violence === "ya"}
							onChange={(e) =>
								setFormData({
									...formData,
									violence: e.target.value as "ya" | "tidak",
								})
							}
						/>
						<RadioButton
							id="violenceNo"
							name="violence"
							value="tidak"
							label="Tidak"
							checked={formData.violence === "tidak"}
							onChange={(e) =>
								setFormData({
									...formData,
									violence: e.target.value as "ya" | "tidak",
								})
							}
						/>
					</div>
				</div>

				{/* Symptoms */}
				<div className="space-y-4">
					<Label>e. Apakah Anda mengalami gejala berikut ini?</Label>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<Checkbox
							name="demam"
							id="fever"
							label="Demam"
							checked={formData.symptoms.fever}
							onChange={(e) =>
								setFormData({
									...formData,
									symptoms: {
										...formData.symptoms,
										fever: e.target.checked,
									},
								})
							}
						/>
						<Checkbox
							name="berat"
							id="weightLoss"
							label="Berat badan turun tanpa sebab yang jelas"
							checked={formData.symptoms.weightLoss}
							onChange={(e) =>
								setFormData({
									...formData,
									symptoms: {
										...formData.symptoms,
										weightLoss: e.target.checked,
									},
								})
							}
						/>
						<Checkbox
							name="nightsweats"
							id="nightSweats"
							label="Berkeringat pada waktu tidur malam hari"
							checked={formData.symptoms.nightSweats}
							onChange={(e) =>
								setFormData({
									...formData,
									symptoms: {
										...formData.symptoms,
										nightSweats: e.target.checked,
									},
								})
							}
						/>
						<Checkbox
							name="groinswelling"
							id="groinSwelling"
							label="Pembengkakan pada kelenjar getah bening"
							checked={formData.symptoms.groinSwelling}
							onChange={(e) =>
								setFormData({
									...formData,
									symptoms: {
										...formData.symptoms,
										groinSwelling: e.target.checked,
									},
								})
							}
						/>
						<Checkbox
							name="batuk"
							id="cough"
							label="Batuk"
							checked={formData.symptoms.cough}
							onChange={(e) =>
								setFormData({
									...formData,
									symptoms: {
										...formData.symptoms,
										cough: e.target.checked,
									},
								})
							}
						/>
						<Checkbox
							name="nosymptoms"
							id="noSymptoms"
							label="Tidak ada"
							checked={formData.symptoms.none}
							onChange={(e) =>
								setFormData({
									...formData,
									symptoms: {
										...formData.symptoms,
										none: e.target.checked,
									},
								})
							}
						/>
					</div>
				</div>
			</form>
		</div>
	);
};
