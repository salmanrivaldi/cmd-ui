interface RadioButtonProps {
	id: string;
	name: string;
	value: string;
	label: string;
	checked?: boolean;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RadioButton = ({
	id,
	name,
	value,
	label,
	checked,
	onChange,
}: RadioButtonProps) => {
	return (
		<div className="flex items-center gap-2">
			<input
				type="radio"
				id={id}
				name={name}
				value={value}
				checked={checked}
				onChange={onChange}
				className="h-4 w-4 text-gray-500 border-gray-100 focus:ring-gray-500"
			/>
			<label htmlFor={id} className="text-sm text-gray-500">
				{label}
			</label>
		</div>
	);
};
