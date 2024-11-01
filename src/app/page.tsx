'use client';
import Label from "@/components/01-Atoms/Form/Label";
import DatePicker from "@/components/02-Molecules/Form/DatePicker";
import { useState } from "react";

export default function Page() {
	const [selectedDate, setSelectedDate] = useState<Date | undefined>();

	return (
		<>
			<Label htmlFor="contact-date">Tanggal Kontak</Label>
			<DatePicker
				selected={selectedDate}
				onChange={setSelectedDate}
				className="w-full max-w-xs"
			/>
		</>
	);
}
