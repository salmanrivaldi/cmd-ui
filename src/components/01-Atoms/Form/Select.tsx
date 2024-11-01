import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";
import { Input } from "./Input";

interface SelectOption {
	value: string;
	label: string;
}

interface SelectProps
	extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
	id: string;
	name: string; // Added name prop
	value: string;
	onChange: (value: string) => void;
	options?: SelectOption[];
	placeholder?: string;
	isDisabled?: boolean;
}

const Select = ({
	id,
	name, // Added name prop
	value,
	onChange,
	options = [],
	placeholder = "Select an option",
	isDisabled = false,
	className = "",
	...props
}: SelectProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");
	const containerRef = useRef<HTMLDivElement>(null);

	const selectedOption = options.find((opt) => opt.value === value);

	const filteredOptions = options.filter((option) =>
		option.label.toLowerCase().includes(searchTerm.toLowerCase())
	);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				containerRef.current &&
				!containerRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () =>
			document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const handleSelect = (option: SelectOption) => {
		onChange(option.value);
		setIsOpen(false);
		setSearchTerm("");
	};

	return (
		<div
			ref={containerRef}
			className={`relative w-full ${className}`}
			{...props}
		>
			{/* Hidden native select for form submission */}
			<select
				id={id}
				name={name}
				value={value}
				onChange={() => {}} // Dummy onChange as we handle it in our custom UI
				className="hidden" // Hide the native select
				aria-hidden="true"
			>
				<option value="">{placeholder}</option>
				{options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>

			<div
				onClick={() => !isDisabled && setIsOpen(!isOpen)}
				className={`
          relative flex items-center justify-between w-full px-3 py-2 
          bg-white border cursor-pointer text-sm
          ${
				isDisabled
					? "bg-gray-50 cursor-not-allowed"
					: "hover:border-blue-400 cursor-pointer"
			}
          ${isOpen ? "border-blue-400 ring-2 ring-blue-100" : "border-gray-300"}
        `}
			>
				<span
					className={`block truncate ${
						!selectedOption ? "text-gray-400" : ""
					}`}
				>
					{selectedOption ? selectedOption.label : placeholder}
				</span>
				<ChevronDown
					className={`w-4 h-4 transition-transform duration-200 ${
						isOpen ? "transform rotate-180" : ""
					}`}
				/>
			</div>

			{isOpen && (
				<div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 shadow-lg">
					<div className="p-2">
						<Input
							type="text"
							placeholder="Search options..."
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							onClick={(e) => e.stopPropagation()}
						/>
					</div>

					<div className="max-h-60 overflow-auto">
						{filteredOptions.length === 0 ? (
							<div className="px-3 py-2 text-sm text-gray-500">
								No options found
							</div>
						) : (
							filteredOptions.map((option) => (
								<div
									key={option.value}
									onClick={() => handleSelect(option)}
									className={`
                    flex items-center justify-between px-3 py-2 text-sm cursor-pointer
                    ${
						option.value === value
							? "bg-blue-50 text-blue-600"
							: "hover:bg-gray-50"
					}
                  `}
								>
									<span>{option.label}</span>
									{option.value === value && (
										<Check className="w-4 h-4" />
									)}
								</div>
							))
						)}
					</div>
				</div>
			)}
		</div>
	);
};

export default Select;
