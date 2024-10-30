import React from "react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
	id: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
	options?: Array<{ value: string; label: string }>;
	placeholder?: string;
}

export const Select = ({
	id,
	value,
	onChange,
	options = [],
	placeholder,
	className = "",
	...props
}: SelectProps) => {
	return (
		<div className="flex flex-col gap-1">
			<select
				id={id}
				value={value}
				onChange={onChange}
				className={`w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400 ${className}`}
				{...props}
			>
				{placeholder && (
					<option value="" disabled>
						{placeholder}
					</option>
				)}
				{options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</div>
	);
};
