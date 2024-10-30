import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?:
		| "primary"
		| "secondary"
		| "success"
		| "danger"
		| "warning"
		| "info"
		| "light"
		| "dark"
		| "link"
		| "outline";
	children: React.ReactNode;
}

const variantStyles = {
	primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
	secondary: "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500",
	success: "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500",
	danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
	warning:
		"bg-yellow-600 text-white hover:bg-yellow-700 focus:ring-yellow-500",
	info: "bg-teal-600 text-white hover:bg-teal-700 focus:ring-teal-500",
	light: "bg-gray-100 text-black hover:bg-gray-200 focus:ring-gray-200",
	dark: "bg-gray-800 text-white hover:bg-gray-900 focus:ring-gray-700",
	link: "bg-transparent text-blue-600 hover:text-blue-700 focus:ring-blue-500 underline",
	outline:
		"bg-transparent border-2 border-current hover:bg-gray-100 focus:ring-blue-500",
};

export const Button = ({
	type = "button",
	onClick,
	className = "",
	variant = "primary",
	disabled = false,
	children,
	...props
}: ButtonProps) => {
	const variantClass = variantStyles[variant];

	return (
		<button
			type={type}
			onClick={onClick}
			disabled={disabled}
			className={`px-6 py-2 uppercase transition-transform transform
        ${!disabled ? "active:scale-95" : "opacity-50 cursor-not-allowed"}
        focus:outline-none focus:ring-2 ${variantClass} ${className}`}
			{...props}
		>
			{children}
		</button>
	);
};
