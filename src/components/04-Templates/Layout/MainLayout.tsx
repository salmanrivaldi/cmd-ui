import Header from "@/components/03-Organisms/Apps/Header";
import Sidebar from "@/components/03-Organisms/Apps/Sidebar";
import Footer from "@/components/03-Organisms/Apps/Footer";
import Toolbar from "@/components/03-Organisms/Apps/Toolbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <body className="flex flex-col min-h-screen bg-[#F2F3F8]">
      <Header />
      <div className="flex flex-grow">
        <Sidebar />
        <div className="w-full md:ml-64">
          <Toolbar />
          {/* <main className="flex-grow p-7">{children}</main> */}
        </div>
      </div>
      <Footer />
    </body>
  );
}
