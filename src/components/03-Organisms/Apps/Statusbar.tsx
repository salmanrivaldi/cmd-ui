"use client";
import { usePathname } from "next/navigation";

interface StatusConfig {
	title: string;
	bgColor: string;
}

export default function Statusbar() {
	const pathname = usePathname();

	const getStatusConfig = (): StatusConfig => {
		switch (pathname) {
			case "/":
				return {
					title: "Dashboard",
					bgColor: "bg-teal-400",
				};
			case "/pencatatan/form-1":
				return {
					title: "Form 1: Penjangkauan",
					bgColor: "bg-lime-section",
				};
			case "/form-2":
				return {
					title: "Form 2",
					bgColor: "bg-lime-section",
				};
			case "/form-3":
				return {
					title: "Form 3",
					bgColor: "bg-lime-section",
				};
			// Tambahkan case lain sesuai kebutuhan
			default:
				return {
					title: "Dashboard",
					bgColor: "bg-teal-400",
				};
		}
	};

	const statusConfig = getStatusConfig();

	return (
		<div
			className={`${statusConfig.bgColor} h-[44px] flex items-center py-4 px-7`}
		>
			<span className="font-semibold text-sm text-white">
				{statusConfig.title}
			</span>
		</div>
	);
}
