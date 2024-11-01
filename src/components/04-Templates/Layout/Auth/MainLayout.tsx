'use client'
import { usePathname } from "next/navigation";
import Header from "@/components/03-Organisms/Apps/Header";
import Sidebar from "@/components/03-Organisms/Apps/Sidebar";
import Footer from "@/components/03-Organisms/Apps/Footer";
import Statusbar from "@/components/03-Organisms/Apps/Statusbar";

export default function Layout({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();

	// Check if current path is login or register
	const isAuthPage = pathname === "/" || pathname === "/register";

	// If it's a login or register page, render without the main layout
	if (isAuthPage) {
		return <>{children}</>;
	}

	// Otherwise, render with the main layout
	return (
		<body aria-label="Layout" className="min-h-screen bg-layout flex">
			{/* Sidebar */}
			<div aria-label="Sidebar" className="flex-none z-20">
				<Sidebar />
			</div>

			{/* Main Content */}
			<div
				aria-label="Wrapper"
				className="flex-1 flex flex-col transition-all duration-300 md:ml-64"
				id="main-content"
			>
				{/* Fixed Header */}
				<div
					aria-label="Header"
					className="h-16 flex-none fixed top-0 right-0 left-0 z-10 transition-all duration-300 md:ml-16"
				>
					<Header />
				</div>

				{/* Content area with top padding to account for fixed header */}
				<div
					aria-label="Content Wrapper"
					className="flex-1 flex flex-col overflow-y-auto mt-16"
				>
					<div
						aria-label="Subheader"
						className="h-14 flex-none sticky top-0 z-[5] bg-white"
					>
						<Statusbar />
					</div>

					<main aria-label="Content" className="flex-1 p-4">
						{children}
					</main>
				</div>

				<div aria-label="Footer" className="flex-none">
					<Footer />
				</div>
			</div>
		</body>
	);
}
