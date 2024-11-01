"use client";

import { useState } from "react";
import Checkbox from "@/components/01-Atoms/Form/Checkbox";
import Label from "@/components/01-Atoms/Form/Label";
import DatePicker from "@/components/02-Molecules/Form/DatePicker";
import { RadioButton } from "@/components/01-Atoms/Button/RadioButton";

export interface Step5Props {
	onSubmit: (data: any) => void;
}

export const Step5 = ({ onSubmit }: Step5Props) => {
	const [formData, setFormData] = useState<any>({
		needsAssessment: {
			highNeeds: false,
			services: {
				hivTest: false,
				mobileClinic: false,
				healthServices: false,
				hivScreening: false,
				tb: false,
				ims: false,
				aeoReferral: false,
				other: false,
				declined: false,
			},
		},
		lowNeeds: false,
		form2Registration: false,
		cbsReferral: false,
		supervisorCheck: "",
		cmdInputDate: "",
		needsType: "high", // untuk radio button kebutuhan tinggi/rendah
	});

	const [selectedSupervisorDate, setSelectedSupervisorDate] = useState<
		Date | undefined
	>();
	const [selectedCmdDate, setSelectedCmdDate] = useState<Date | undefined>();

	// Handle supervisor date change
	const handleSupervisorDateChange = (date: Date) => {
		setSelectedSupervisorDate(date);
		setFormData({
			...formData,
			supervisorCheck: date.toISOString(),
		});
	};

	// Handle CMD date change
	const handleCmdDateChange = (date: Date) => {
		setSelectedCmdDate(date);
		setFormData({
			...formData,
			cmdInputDate: date.toISOString(),
		});
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSubmit(formData);
	};

	return (
		<div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
			<form onSubmit={handleSubmit} className="space-y-6">
				{/* Header */}
				<div className="bg-lime-section shadow-sm -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-3">
					<span className="text-white text-sm sm:text-sm font-semibold">
						5: MENYAMPAIKAN
					</span>
				</div>

				<div className="space-y-6">
					<Label>
						a. Tolong sampaikan 3 slip kepada teman sebaya atau
						pasangan seksual? (Jelaskan cara menggunakan slip
						&apos;Pass it on&apos;)
					</Label>

					<div className="space-y-4">
						<Label>Klien ini adalah:</Label>
						<div className="space-y-2">
							<RadioButton
								id="highNeeds"
								name="needsType"
								value="high"
								label="Kebutuhan Tinggi"
								checked={formData.needsType === "high"}
								onChange={(e) =>
									setFormData({
										...formData,
										needsType: e.target.value,
									})
								}
							/>
							<RadioButton
								id="lowNeeds"
								name="needsType"
								value="low"
								label="Kebutuhan Rendah"
								checked={formData.needsType === "low"}
								onChange={(e) =>
									setFormData({
										...formData,
										needsType: e.target.value,
									})
								}
							/>
						</div>
					</div>

					{/* High Needs Services Section */}
					{formData.needsType === "high" && (
						<div className="space-y-2 pl-4">
							<Checkbox
								name="hivTest"
								id="hivTest"
								label="Tes HIV"
								checked={
									formData.needsAssessment.services.hivTest
								}
								onChange={(e) =>
									setFormData({
										...formData,
										needsAssessment: {
											...formData.needsAssessment,
											services: {
												...formData.needsAssessment
													.services,
												hivTest: e.target.checked,
											},
										},
									})
								}
							/>
							<Checkbox
								name="tb"
								id="tb"
								label="TB"
								checked={formData.needsAssessment.services.tb}
								onChange={(e) =>
									setFormData({
										...formData,
										needsAssessment: {
											...formData.needsAssessment,
											services: {
												...formData.needsAssessment
													.services,
												tb: e.target.checked,
											},
										},
									})
								}
							/>
							<Checkbox
								name="ims"
								id="ims"
								label="IMS"
								checked={formData.needsAssessment.services.ims}
								onChange={(e) =>
									setFormData({
										...formData,
										needsAssessment: {
											...formData.needsAssessment,
											services: {
												...formData.needsAssessment
													.services,
												ims: e.target.checked,
											},
										},
									})
								}
							/>
							<Checkbox
								name="aeoReferral"
								id="aeoReferral"
								label="Rujuk ke AEO"
								checked={
									formData.needsAssessment.services
										.aeoReferral
								}
								onChange={(e) =>
									setFormData({
										...formData,
										needsAssessment: {
											...formData.needsAssessment,
											services: {
												...formData.needsAssessment
													.services,
												aeoReferral: e.target.checked,
											},
										},
									})
								}
							/>
							<Checkbox
								name="other"
								id="other"
								label="Lainnya"
								checked={
									formData.needsAssessment.services.other
								}
								onChange={(e) =>
									setFormData({
										...formData,
										needsAssessment: {
											...formData.needsAssessment,
											services: {
												...formData.needsAssessment
													.services,
												other: e.target.checked,
											},
										},
									})
								}
							/>
							<Checkbox
								name="declined"
								id="declined"
								label="Menolak dirujuk"
								checked={
									formData.needsAssessment.services.declined
								}
								onChange={(e) =>
									setFormData({
										...formData,
										needsAssessment: {
											...formData.needsAssessment,
											services: {
												...formData.needsAssessment
													.services,
												declined: e.target.checked,
											},
										},
									})
								}
							/>
						</div>
					)}

					{/* Additional Options */}
					<div className="space-y-2">
						<RadioButton
							value="yes"
							name="form2Registration"
							id="form2Registration"
							label="Klien tercatat di Form 2 (ODHA di luar perawatan)"
							checked={formData.form2Registration}
							onChange={(e) =>
								setFormData({
									...formData,
									form2Registration: e.target.checked,
								})
							}
						/>
						<RadioButton
							value="yes"
							name="cbsReferral"
							id="cbsReferral"
							label="Dirujuk ke CBS+"
							checked={formData.cbsReferral}
							onChange={(e) =>
								setFormData({
									...formData,
									cbsReferral: e.target.checked,
								})
							}
						/>
					</div>

					{/* Dates Section */}
					<div className="space-y-4 border-t pt-4">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div className="space-y-2">
								<Label>
									Diperiksa dan dicatat oleh CBS supervisor
									pada
								</Label>
								<DatePicker
									selected={selectedSupervisorDate}
									onChange={handleSupervisorDateChange}
									className="w-full"
								/>
							</div>
							<div className="space-y-2">
								<Label>Tanggal Input ke CMD</Label>
								<DatePicker
									selected={selectedCmdDate}
									onChange={handleCmdDateChange}
									className="w-full"
								/>
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};
