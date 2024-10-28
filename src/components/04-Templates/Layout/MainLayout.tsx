import Header from "@/components/03-Organisms/Apps/Header";
import Sidebar from "@/components/03-Organisms/Apps/Sidebar";
import Footer from "@/components/03-Organisms/Apps/Footer";
import Statusbar from "@/components/03-Organisms/Apps/Statusbar";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<body
			aria-label="Layout"
			className="h-screen overflow-x-hidden flex flex-col bg-layout"
		>
			{/* Sidebar dengan lebar tetap */}
			<div aria-label="Sidebar" className="sidebar w-64 flex-none">
				<Sidebar />
			</div>
			<div
				aria-label="Wrapper"
				className="flex flex-auto flex-col md:pl-64"
			>
				<div aria-label="Header" className="h-16 flex-none">
					<Header />
				</div>
				<div
					aria-label="Content Wrapper"
					className="flex-1 flex flex-col overflow-y-auto"
				>
					<div aria-label="Subheader" className="h-14 flex-none">
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
