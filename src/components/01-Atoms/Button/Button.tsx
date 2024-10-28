// components/atoms/Button.tsx

import React from "react";

interface ButtonProps {
	type?: "button" | "submit" | "reset";
	onClick?: () => void;
	className?: string;
	variant?:
		| "primary"
		| "secondary"
		| "success"
		| "danger"
		| "warning"
		| "info"
		| "light"
		| "dark"
		| "link";
	children: React.ReactNode;
}

const variantStyles = {
	primary: "bg-blue-600 hover:bg-blue-700 focus:ring-blue-500",
	secondary: "bg-gray-600 hover:bg-gray-700 focus:ring-gray-500",
	success: "bg-green-600 hover:bg-green-700 focus:ring-green-500",
	danger: "bg-red-600 hover:bg-red-700 focus:ring-red-500",
	warning: "bg-yellow-600 hover:bg-yellow-700 focus:ring-yellow-500",
	info: "bg-teal-600 hover:bg-teal-700 focus:ring-teal-500",
	light: "bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-gray-200",
	dark: "bg-gray-800 text-white hover:bg-gray-900 focus:ring-gray-700",
	link: "bg-transparent text-blue-600 hover:text-blue-700 focus:ring-blue-500 underline",
};

export const Button = ({
	type = "button",
	onClick,
	className = "",
	variant = "primary", // Default value
	children,
}: ButtonProps) => {
	// Ensure variant is always a valid key in variantStyles
	const variantClass = variantStyles[variant as keyof typeof variantStyles];

	return (
		<button
			type={type}
			onClick={onClick}
			className={`px-6 py-2 text-white focus:outline-none focus:ring-2 ${variantClass} ${className}`}
		>
			{children}
		</button>
	);
};
