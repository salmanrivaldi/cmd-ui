interface CheckboxProps {
	id: string;
	name: string;
	label: string;
	checked?: boolean;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox = ({
	id,
	name,
	label,
	checked,
	onChange,
}: CheckboxProps) => {
	return (
		<div className="flex items-center gap-2">
			<input
				type="checkbox"
				id={id}
				name={name}
				checked={checked}
				onChange={onChange}
				className="h-4 w-4 rounded text-blue-600 border-gray-300 focus:ring-blue-500"
			/>
			<label htmlFor={id} className="text-sm text-gray-500">
				{label}
			</label>
		</div>
	);
};
