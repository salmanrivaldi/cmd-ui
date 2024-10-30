"use client";

import { useState } from "react";
import Checkbox from "@/components/01-Atoms/Form/Checkbox";
import Label from "@/components/01-Atoms/Form/Label";
import { Input } from "@/components/01-Atoms/Form/Input";

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
	});

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

					{/* High Needs Section */}
					<div className="space-y-4 pl-4">
						<div className="font-medium">
							Klien ini adalah: Kebutuhan tinggi/High needs
						</div>

						<div className="space-y-2">
							<Checkbox
								name=""
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
								name="mobileclinic"
								id="mobileClinic"
								label="Dokling/Layanan bergerak"
								checked={
									formData.needsAssessment.services
										.mobileClinic
								}
								onChange={(e) =>
									setFormData({
										...formData,
										needsAssessment: {
											...formData.needsAssessment,
											services: {
												...formData.needsAssessment
													.services,
												mobileClinic: e.target.checked,
											},
										},
									})
								}
							/>
							{/* Add other service checkboxes similarly */}
						</div>
					</div>

					{/* Dates Section */}
					<div className="space-y-4 border-t pt-4">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div className="space-y-2">
								<Label>
									Diperiksa dan dicatat oleh CBS supervisor
									pada
								</Label>
								<Input
									type="date"
									value={formData.supervisorCheck}
									onChange={(e) =>
										setFormData({
											...formData,
											supervisorCheck: e.target.value,
										})
									}
								/>
							</div>
							<div className="space-y-2">
								<Label>Tanggal Input ke CMD</Label>
								<Input
									type="date"
									value={formData.cmdInputDate}
									onChange={(e) =>
										setFormData({
											...formData,
											cmdInputDate: e.target.value,
										})
									}
								/>
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};
