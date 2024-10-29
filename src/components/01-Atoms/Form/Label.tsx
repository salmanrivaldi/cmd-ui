import React from "react";

interface LabelProps {
	children: React.ReactNode;
	htmlFor?: string;
	className?: string; // Optional className prop
}

export default function Label({
	children,
	htmlFor,
	className = "", // Default to an empty string if not provided
}: LabelProps) {
	return (
		<label
			htmlFor={htmlFor}
			className={`text-sm text-gray-500 ${className}`}
		>
			{children}
		</label>
	);
}
