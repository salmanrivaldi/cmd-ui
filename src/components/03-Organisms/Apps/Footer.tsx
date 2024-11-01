"use client";
import { usePathname } from "next/navigation";

export default function Footer() {
	const pathname = usePathname();

	const handleDuplicate = () => {
		// Buka halaman yang sama di tab baru
		window.open(pathname, "_blank");
	};

	return (
		<footer className="w-full p-5 bg-white">
			<div className="text-sm text-gray-500 transition-colors duration-300">
				&copy; {new Date().getFullYear()} -{" "}
				<span
					onClick={handleDuplicate}
					className="text-gray-500 hover:text-blue-500 relative transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-[0.5px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
				>
					FHI360 EPiC
				</span>
			</div>
		</footer>
	);
}
