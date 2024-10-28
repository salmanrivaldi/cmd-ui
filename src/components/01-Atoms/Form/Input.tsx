// components/atoms/Input.tsx
import React from "react";

interface InputProps {
	type?: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder?: string;
	className?: string;
}

// Using a named export with a regular function
export function Input({
	type = "text",
	value,
	onChange,
	placeholder,
	className = "", // Default to an empty string if className is not provided
}: InputProps) {
	return (
		<input
			type={type}
			value={value}
			onChange={onChange}
			placeholder={placeholder}
			className={`w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400 ${className}`}
		/>
	);
}
