import { Poppins } from "next/font/google";
import type { Metadata } from "next";
import MainLayout from "@/components/04-Templates/Layout/MainLayout";
import "./globals.css";
import StoreProvider from "@/providers/StoreProvider";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "CMD UI",
	description: "",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={poppins.className}>
			<StoreProvider>
				<MainLayout>{children}</MainLayout>
			</StoreProvider>
		</html>
	);
}
