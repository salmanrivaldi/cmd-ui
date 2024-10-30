// atoms/Input/SearchInput.tsx
import React from "react";

interface SearchInputProps {
	value: string;
	onChange: (value: string) => void;
	placeholder?: string;
	id?: string; // Added id prop
}

export const SearchInput: React.FC<SearchInputProps> = ({
	value,
	onChange,
	placeholder = "Select an item",
	id,
}) => {
	return (
		<input
			id={id}
			type="text"
			value={value}
			onChange={(e) => onChange(e.target.value)}
			placeholder={placeholder}
			className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
		/>
	);
};

// atoms/Typography/Text.tsx
interface TextProps {
	children: React.ReactNode;
	className?: string;
}

export const Text: React.FC<TextProps> = ({ children, className = "" }) => {
	return <p className={`text-gray-500 ${className}`}>{children}</p>;
};

// molecules/SelectDropdown/SelectDropdown.tsx
interface SelectDropdownProps {
	options: SelectOption[];
	onSelect: (option: SelectOption) => void;
	searchValue: string;
}

export const SelectDropdown: React.FC<SelectDropdownProps> = ({
	options,
	onSelect,
	searchValue,
}) => {
	const filteredOptions = options.filter((option) =>
		option.label.toLowerCase().includes(searchValue.toLowerCase())
	);

	return (
		<div className="absolute w-full mt-1 bg-white border border-gray-300 shadow-lg max-h-60 overflow-auto z-10">
			{filteredOptions.length > 0 ? (
				filteredOptions.map((option) => (
					<div
						key={option.value}
						className="px-4 py-2 cursor-pointer hover:bg-gray-100"
						onClick={() => onSelect(option)}
					>
						{option.label}
					</div>
				))
			) : (
				<div className="px-4 py-2 text-gray-500">No results found</div>
			)}
		</div>
	);
};

// organisms/Select/Select.tsx
import { useState, useEffect } from "react";

export interface SelectOption {
	value: string;
	label: string;
}

interface SelectProps {
	id?: string;
	options: SelectOption[];
	onChange: (option: SelectOption | null) => void;
	value: SelectOption | null;
	placeholder?: string;
	isDisabled?: boolean;
}

export const SelectSearch: React.FC<SelectProps> = ({
	options,
	onChange,
	value,
	placeholder,
	id,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const [searchValue, setSearchValue] = useState("");

	// Update searchValue when value prop changes
	useEffect(() => {
		if (value) {
			setSearchValue(value.label);
		}
	}, [value]);

	const handleSelect = (option: SelectOption) => {
		onChange(option);
		setSearchValue(option.label);
		setIsOpen(false);
	};

	const handleInputChange = (value: string) => {
		setSearchValue(value);
		if (!value) {
			onChange(null);
		}
		setIsOpen(true);
	};

	return (
		<div className="relative">
			<SearchInput
				id={id}
				value={searchValue}
				onChange={handleInputChange}
				placeholder={placeholder}
			/>
			{isOpen && (
				<SelectDropdown
					options={options}
					onSelect={handleSelect}
					searchValue={searchValue}
				/>
			)}
		</div>
	);
};
