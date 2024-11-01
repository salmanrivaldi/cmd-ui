interface CheckboxProps {
	id: string;
	name: string;
	label?: string;
	checked?: boolean;
	disabled?: boolean;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	required?: boolean;
}

const Checkbox = ({
	id,
	name,
	label,
	checked,
	disabled,
	onChange,
	required,
}: CheckboxProps) => {
	return (
		<div className="flex items-center gap-2">
			<input
				type="checkbox"
				id={id}
				name={name}
				checked={checked}
				disabled={disabled}
				onChange={onChange}
				required={required}
				className="h-4 w-4 rounded text-blue-600 border-gray-300 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
			/>
			<label
				htmlFor={id}
				className={`text-sm ${
					disabled ? "text-gray-400" : "text-gray-500"
				}`}
			>
				{label}
			</label>
		</div>
	);
};

export default Checkbox;
