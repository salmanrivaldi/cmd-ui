"use client";

import Link from "next/link";
import { useState, useEffect, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHouse,
	faCalendarAlt,
	faHeart,
	faSyringe,
	faChartColumn,
	faUsers,
	faScrewdriverWrench,
	faTimes,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { openSidebar } from "@/redux/features/app.slice";
import { RootState } from "@/redux/store";

interface Submenu {
	label: string;
	url: string;
}

interface Menu {
	label: string;
	url?: string;
	icon: JSX.Element;
	submenus?: Submenu[];
}

export default function Sidebar() {
	const dispatch = useDispatch();
	const pathname = usePathname();
	const [openMenu, setOpenMenu] = useState<number | null>(null);
	const isSidebarOpen = useSelector(
		(state: RootState) => state.app.isSidebarOpen
	);

	useEffect(() => {
		const menuIndex = menus.findIndex((menu) => {
			if (menu.submenus) {
				return menu.submenus.some(
					(submenu) => submenu.url === pathname
				);
			}
			return menu.url === pathname;
		});

		if (menuIndex !== -1) {
			setOpenMenu(menuIndex);
		}

		dispatch(openSidebar(false));
	}, [pathname]);

	const toggleSubmenu = (index: number) => {
		setOpenMenu(openMenu === index ? null : index);
	};

	const menus: Menu[] = [
		{
			label: "Dashboard",
			url: "/",
			icon: <FontAwesomeIcon icon={faHouse} />,
		},
		{
			label: "Reservasi",
			icon: <FontAwesomeIcon icon={faCalendarAlt} />,
			submenus: [
				{ label: "Data Tes HIV", url: "/reservasi/tes-hiv" },
				{ label: "Data PrEP", url: "/reservasi/prep" },
				{ label: "Data Refill ARV", url: "/reservasi/refill-arv" },
				{ label: "Data Viral Load", url: "/reservasi/viral-load" },
			],
		},
		{
			label: "Notifikasi Pasangan",
			icon: <FontAwesomeIcon icon={faHeart} />,
			submenus: [
				{ label: "Tautan Referal", url: "/np/referal" },
				{ label: "Data Semua", url: "/np/semua" },
				{ label: "Data NP Layanan", url: "/np/layanan" },
				{ label: "Data NP Komunitas", url: "/np/komunitas" },
			],
		},
		{
			label: "Skrining HIV Mandiri",
			url: "/skrining-hiv-mandiri",
			icon: <FontAwesomeIcon icon={faSyringe} />,
		},
		{
			label: "Info PrEP",
			url: "/info-prep",
			icon: <FontAwesomeIcon icon={faCalendarAlt} />,
		},
		{
			label: "Cascade",
			icon: <FontAwesomeIcon icon={faChartColumn} />,
			submenus: [
				{ label: "Total", url: "/cascade/total" },
				{ label: "Tes HIV", url: "/cascade/tes-hiv" },
				{ label: "PrEP", url: "/cascade/prep" },
				{ label: "Refill ARV", url: "/cascade/refill-arv" },
				{ label: "Viral Load", url: "/cascade/viral-load" },
			],
		},
		{
			label: "Users",
			url: "/users",
			icon: <FontAwesomeIcon icon={faUsers} />,
		},
		{
			label: "Pengaturan",
			icon: <FontAwesomeIcon icon={faScrewdriverWrench} />,
			submenus: [{ label: "Fasyankes", url: "/pengaturan/fasyankes" }],
		},
	];

	return (
		<Fragment>
			{isSidebarOpen && (
				<div
					className="fixed inset-0 bg-black bg-opacity-50 transition-opacity z-10"
					onClick={() => dispatch(openSidebar(false))}
				/>
			)}

			<aside
				className={`bg-[#282733] text-[#9899ac] w-64 h-screen fixed top-0 left-0 transform transition-transform duration-300 ease-in-out z-10 ${
					isSidebarOpen ? "translate-x-0" : "-translate-x-full"
				} md:translate-x-0`}
			>
				<div className="flex items-center justify-between h-[65px] px-5 bg-[#201F2B]">
					<Link href="/" className="flex items-center">
						<Image
							src="/images/logo.png"
							alt="Logo"
							className="h-12 w-auto"
							width={100}
							height={50}
						/>
					</Link>

					<button
						className="relative group lg:hidden"
						onClick={() => dispatch(openSidebar(false))}
					>
						<div className="relative flex overflow-hidden items-center justify-center rounded-full w-[28px] h-[28px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-4 group-focus:ring-4 ring-opacity-30 duration-200">
							<FontAwesomeIcon icon={faTimes} />
						</div>
					</button>
				</div>

				<ul>
					{menus.map((menu, index) => {
						const isActive =
							pathname === menu.url ||
							(menu.submenus &&
								menu.submenus.some(
									(submenu) => submenu.url === pathname
								));

						return (
							<li key={index} className="text-sm">
								<div
									className={`flex justify-between items-center cursor-pointer py-3 px-7 group hover:text-white ${
										isActive
											? "bg-red-active text-white"
											: "hover:bg-dark-hover"
									}`}
									onClick={() => toggleSubmenu(index)}
								>
									{menu.url ? (
										<Link
											href={menu.url}
											className="flex items-center w-full"
										>
											<span
												className={`${
													isActive
														? "text-white"
														: "text-dark-icon group-hover:text-blue-500"
												}`}
											>
												{menu.icon}
											</span>
											<span className="ml-4">
												{menu.label}
											</span>
										</Link>
									) : (
										<div className="flex items-center w-full">
											<span
												className={`${
													isActive
														? "text-white"
														: "text-dark-icon group-hover:text-blue-500"
												}`}
											>
												{menu.icon}
											</span>
											<span className="ml-4">
												{menu.label}
											</span>
										</div>
									)}
									{menu.submenus && (
										<span
											className={` ${
												openMenu === index
													? "rotate-90"
													: ""
											}  ${
												isActive
													? ""
													: "group-hover:text-white text-gray-600 transform transition-all duration-300"
											}`}
										>
											&rsaquo;
										</span>
									)}
								</div>

								{menu.submenus && (
									<ul
										className={`mt-2 overflow-hidden transition-[max-height] duration-300 ease-in-out ${
											openMenu === index
												? "max-h-96"
												: "max-h-0"
										}`}
									>
										{menu.submenus.map(
											(submenu, subIndex) => (
												<li key={subIndex}>
													<div
														className={`py-3 pl-10 text-sm group hover:bg-dark-hover hover:text-white ${
															pathname ===
															submenu.url
																? "text-white"
																: "text-gray-400"
														}`}
													>
														<Link
															href={submenu.url}
															className="flex items-center hover:text-white"
														>
															<span className="mr-4 group-hover:text-blue-500">
																&bull;
															</span>
															{submenu.label}
														</Link>
													</div>
												</li>
											)
										)}
									</ul>
								)}
							</li>
						);
					})}
				</ul>
			</aside>
		</Fragment>
	);
}
