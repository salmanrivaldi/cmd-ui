import React from "react";

interface InputProps
	extends Omit<
		React.InputHTMLAttributes<HTMLInputElement>,
		"value" | "onChange"
	> {
	value?: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	className?: string;
}

export function Input({
	type = "text",
	value = "",
	onChange,
	placeholder,
	className = "",
	...props
}: InputProps) {
	return (
		<input
			type={type}
			value={value}
			onChange={onChange}
			placeholder={placeholder}
			className={`w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400 ${className}`}
			{...props}
		/>
	);
}
