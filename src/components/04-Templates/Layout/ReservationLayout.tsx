import StandarCard from "@/components/02-Molecules/Card/StandarCard";
import NavTab from "@/components/03-Organisms/Navigation/NavTab";
import Filter from "@/components/05-Pages/Auth/Reservation/Filter";

interface ReservationLayoutProps {
	children: React.ReactNode;
	title: string;
}

export default function ReservationLayout({
	children,
	title,
}: ReservationLayoutProps) {
	const list = [
		{ label: "Reservasi Tes HIV", url: "/reservasi/tes-hiv" },
		{ label: "Reservasi PrEP", url: "/reservasi/prep" },
		{ label: "Reservasi Refill ARV", url: "/reservasi/refill-arv" },
		{ label: "Reservasi Viral Load", url: "/reservasi/viral-load" },
	];
	return (
		<section className="flex flex-col gap-y-8">
			<StandarCard title="Filter">
				<Filter />
			</StandarCard>

			<StandarCard title={title}>
				<NavTab list={list} />
				<div className="py-6">{children}</div>
			</StandarCard>
		</section>
	);
}
