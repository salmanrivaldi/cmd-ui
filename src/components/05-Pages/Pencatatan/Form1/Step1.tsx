"use client";

import { useState } from "react";
import { RadioButton } from "@/components/01-Atoms/Button/RadioButton";
import { Select } from "@/components/01-Atoms/Form/Select";
import { Checkbox } from "@/components/01-Atoms/Form/Checkbox";
import { Input } from "@/components/01-Atoms/Form/Input";
import Label from "@/components/01-Atoms/Form/Label";
import { SelectSearch } from "@/components/02-Molecules/Form/SearchInput";
import { Button } from "@/components/01-Atoms/Button/Button";
import { PriorityFormData } from "@/types/formTypes";

interface StepSatuProps {
	onNext: (data: PriorityFormData) => void;
}

const options = [
	{ value: "1", label: "Option 1" },
	{ value: "2", label: "Option 2" },
	{ value: "3", label: "Option 3" },
];

export const Step1 = ({ onNext }: StepSatuProps) => {
	const [formData, setFormData] = useState<PriorityFormData>({
		cbsName: "",
		method: "virtual",
		location: "",
		region: "",
		population: "",
		gender: "male",
		drugUser: false,
		sexWorker: {
			direct: false,
			indirect: false,
		},
		lsl: false,
		trans: false,
		partnerType: {
			pwid: false,
			fsw: false,
			msm: false,
			odha: false,
		},
		clientType: "key-population",
		date: "",
	});

	const [selectedOption, setSelectedOption] = useState<null>(null);

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
						1: MEMPRIORITASKAN
					</span>
				</div>

				{/* Contact Information */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div className="space-y-2">
						<Label htmlFor="cbs-pv">Nama CBS/PV</Label>
						<SelectSearch
							id="cbs-pv"
							options={options}
							onChange={setSelectedOption}
							value={selectedOption}
							placeholder="Select an item"
						/>
					</div>

					<div className="space-y-2">
						<Label htmlFor="contact-date">Tanggal Kontak</Label>
						<input
							id="contact-date"
							type="date"
							className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
							value={formData.date}
							onChange={(e) =>
								setFormData({
									...formData,
									date: e.target.value,
								})
							}
						/>
					</div>
				</div>

				{/* Method Selection */}
				<div className="space-y-4">
					<Label>Metode Penjangkauan</Label>
					<div className="flex flex-wrap gap-4">
						<RadioButton
							id="virtual"
							name="method"
							value="virtual"
							label="Virtual"
							checked={formData.method === "virtual"}
							onChange={(e) =>
								setFormData({
									...formData,
									method: e.target.value as
										| "virtual"
										| "face-to-face",
								})
							}
						/>
						<RadioButton
							id="faceFace"
							name="method"
							value="face-to-face"
							label="Tatap muka"
							checked={formData.method === "face-to-face"}
							onChange={(e) =>
								setFormData({
									...formData,
									method: e.target.value as
										| "virtual"
										| "face-to-face",
								})
							}
						/>
					</div>
				</div>

				{/* Location and Population */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div className="space-y-2">
						<Label>Tempat di mana terjadi kontak</Label>
						<Input
							type="text"
							value={formData.location}
							onChange={(e) =>
								setFormData({
									...formData,
									location: e.target.value,
								})
							}
						/>
					</div>

					<div className="space-y-2">
						<Label>Populasi Kunci atau Pasangan Seksual</Label>
						<Select
							id="population"
							name="population"
							value={formData.population}
							placeholder="Select..."
							onChange={(e) =>
								setFormData({
									...formData,
									population: e.target.value,
								})
							}
						/>
					</div>
				</div>

				{/* Gender Selection */}
				<div className="space-y-4">
					<Label>Gender</Label>
					<div className="flex flex-wrap gap-4">
						<RadioButton
							id="male"
							name="gender"
							value="male"
							label="Laki-laki"
							checked={formData.gender === "male"}
							onChange={(e) =>
								setFormData({
									...formData,
									gender: e.target.value as
										| "male"
										| "female"
										| "trans",
								})
							}
						/>
						<RadioButton
							id="female"
							name="gender"
							value="female"
							label="Perempuan"
							checked={formData.gender === "female"}
							onChange={(e) =>
								setFormData({
									...formData,
									gender: e.target.value as
										| "male"
										| "female"
										| "trans",
								})
							}
						/>
						<RadioButton
							id="trans"
							name="gender"
							value="trans"
							label="Waria"
							checked={formData.gender === "trans"}
							onChange={(e) =>
								setFormData({
									...formData,
									gender: e.target.value as
										| "male"
										| "female"
										| "trans",
								})
							}
						/>
					</div>
				</div>

				{/* Region Selection */}
				<div className="space-y-2">
					<Label>Wilayah</Label>
					<SelectSearch
						options={options}
						onChange={setSelectedOption}
						value={selectedOption}
						placeholder="Select a item"
					/>
				</div>

				{/* Questions Section */}
				<div className="space-y-6">
					<Label className="text-lg font-medium">
						Tanyakan semua pertanyaan dan sesuaikan dengan kolom
						dibawah
					</Label>

					<div className="space-y-6">
						{/* Drug Use Question */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
							<Label>A. Apakah Anda menyuntikkan narkoba?</Label>
							<Checkbox
								id="drugUser"
								name="drugUser"
								label="Penasun"
								checked={formData.drugUser}
								onChange={(e) =>
									setFormData({
										...formData,
										drugUser: e.target.checked,
									})
								}
							/>
						</div>

						{/* Sex Worker Question */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
							<Label>B. Apakah Anda menjual seks?</Label>
							<div className="flex flex-wrap gap-4">
								<Checkbox
									id="directSexWorker"
									name="directSexWorker"
									label="Langsung"
									checked={formData.sexWorker.direct}
									onChange={(e) =>
										setFormData({
											...formData,
											sexWorker: {
												...formData.sexWorker,
												direct: e.target.checked,
											},
										})
									}
								/>
								<Checkbox
									id="indirectSexWorker"
									name="indirectSexWorker"
									label="Tidak Langsung"
									checked={formData.sexWorker.indirect}
									onChange={(e) =>
										setFormData({
											...formData,
											sexWorker: {
												...formData.sexWorker,
												indirect: e.target.checked,
											},
										})
									}
								/>
							</div>
						</div>

						{/* LSL Question */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
							<Label>
								C. Apakah Anda berhubungan seks dengan Pria?
							</Label>
							<Checkbox
								id="lsl"
								name="lsl"
								label="LSL"
								checked={formData.lsl}
								onChange={(e) =>
									setFormData({
										...formData,
										lsl: e.target.checked,
									})
								}
							/>
						</div>

						{/* Trans Question */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
							<Label>
								D. Apakah Anda mengidentifikasi diri sebagai
								waria?
							</Label>
							<Checkbox
								id="trans"
								name="trans"
								label="WARIA"
								checked={formData.trans}
								onChange={(e) =>
									setFormData({
										...formData,
										trans: e.target.checked,
									})
								}
							/>
						</div>

						{/* Partner Type Question */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
							<Label>
								E. Apakah Anda memiliki pasangan seks yang PWID,
								FSW MSM atau ODHA?
							</Label>
							<Checkbox
								id="pwid"
								name="pwid"
								label="Pasangan/PP"
								checked={formData.partnerType.pwid}
								onChange={(e) =>
									setFormData({
										...formData,
										partnerType: {
											...formData.partnerType,
											pwid: e.target.checked,
										},
									})
								}
							/>
						</div>

						{/* Client Type Question */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
							<Label>F. Klien adalah</Label>
							<div className="flex flex-wrap gap-4">
								<RadioButton
									id="keyPopulation"
									name="clientType"
									value="key-population"
									label="Populasi Kunci"
									checked={
										formData.clientType === "key-population"
									}
									onChange={(e) =>
										setFormData({
											...formData,
											clientType: e.target.value as
												| "key-population"
												| "sexual-partner",
										})
									}
								/>
								<RadioButton
									id="sexualPartner"
									name="clientType"
									value="sexual-partner"
									label="Pasangan Seksual"
									checked={
										formData.clientType === "sexual-partner"
									}
									onChange={(e) =>
										setFormData({
											...formData,
											clientType: e.target.value as
												| "key-population"
												| "sexual-partner",
										})
									}
								/>
							</div>
						</div>
					</div>
				</div>

				{/* Submit Button */}
				<div className="flex justify-end pt-6">
					<Button type="submit">NEXT STEP</Button>
				</div>
			</form>
		</div>
	);
};
