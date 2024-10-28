// components/atoms/Button.tsx

import React from "react";

interface ButtonProps {
	type?: "button" | "submit" | "reset";
	onClick?: () => void;
	className?: string;
	children: React.ReactNode;
}

export const Button = ({
	type = "button",
	onClick,
	className = "",
	children,
}: ButtonProps) => {
	return (
		<button
			type={type}
			onClick={onClick}
			className={`px-6 py-2 bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
		>
			{children}
		</button>
	);
};
