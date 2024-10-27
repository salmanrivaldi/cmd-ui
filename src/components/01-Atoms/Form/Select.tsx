interface SelectProps {
	id: string;
	name: string;
	value: string;
	placeholder?: string;
	onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
	options?: Array<{ value: string; label: string }>;
}

export const Select = ({
	id,
	name,
	value,
	placeholder,
	onChange,
	options,
}: SelectProps) => {
	return (
		<div className="flex flex-col gap-1">
			<select
				id={id}
				name={name}
				value={value}
				onChange={onChange}
				className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
			>
				{placeholder && (
					<option value="" disabled>
						{placeholder}
					</option>
				)}
				{options?.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</div>
	);
};
