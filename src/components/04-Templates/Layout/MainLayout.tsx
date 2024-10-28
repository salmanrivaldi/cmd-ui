import Header from "@/components/03-Organisms/Apps/Header";
import Sidebar from "@/components/03-Organisms/Apps/Sidebar";
import Footer from "@/components/03-Organisms/Apps/Footer";
import Toolbar from "@/components/03-Organisms/Apps/Statusbar";
import Statusbar from "@/components/03-Organisms/Apps/Statusbar";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<body className="h-screen overflow-hidden">
			<div className="h-full flex flex-col bg-layout">
				{/* Header dengan tinggi tetap */}
				<div className="h-16 flex-none">
					<Header />
				</div>

				{/* Content area dengan flex-grow dan overflow hidden */}
				<div className="flex flex-1 overflow-hidden">
					{/* Sidebar dengan lebar tetap */}
					<div className="w-64 flex-none">
						<Sidebar />
					</div>

					{/* Main content area dengan overflow auto */}
					<div className="flex-1 flex flex-col overflow-hidden">
						{/* Statusbar dengan tinggi tetap */}
						<div className="h-14 flex-none">
							<Statusbar />
						</div>

						{/* Main content dengan overflow auto jika konten melebihi area */}
						<main className="flex-1 p-7 overflow-auto">
							{children}
						</main>
					</div>
				</div>

				{/* Footer dengan tinggi tetap */}
				<div className="flex-none">
					<Footer />
				</div>
			</div>
		</body>
	);
}
