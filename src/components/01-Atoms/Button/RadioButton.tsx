interface RadioButtonProps {
	id: string;
	name: string;
	value: string;
	label: string;
	checked?: boolean;
	disabled?: boolean;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RadioButton = ({
	id,
	name,
	value,
	label,
	checked,
	disabled,
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
				disabled={disabled}
				onChange={onChange}
				className={`h-4 w-4 border-gray-300 focus:ring-gray-500
          ${
				disabled
					? "text-gray-300 cursor-not-allowed"
					: "text-gray-500 cursor-pointer"
			}`}
			/>
			<label
				htmlFor={id}
				className={`text-sm ${
					disabled
						? "text-gray-400 cursor-not-allowed"
						: "text-gray-500 cursor-pointer"
				}`}
			>
				{label}
			</label>
		</div>
	);
};
