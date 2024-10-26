"use client";
import Link from "next/link";
import { useState, useEffect, Fragment } from "react";
import { MdClose } from "react-icons/md"; // Replace FontAwesome with React Icons
import { RxDotFilled } from "react-icons/rx"; // Use a dots icon from React Icons
import { FiMinus } from "react-icons/fi";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { openSidebar } from "@/redux/features/app.slice";
import { RootState } from "@/redux/store";
import { menus } from "@/data/menus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Sidebar() {
	const dispatch = useDispatch();
	const pathname = usePathname();
	const [openMenu, setOpenMenu] = useState<number | null>(null);
	const [openSubmenu, setOpenSubmenu] = useState<number | null>(null);
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
	}, [pathname, dispatch]);

	const toggleSubmenu = (index: number) => {
		setOpenMenu(openMenu === index ? null : index);
		setOpenSubmenu(null);
	};

	const toggleSubSubmenu = (index: number) => {
		setOpenSubmenu(openSubmenu === index ? null : index);
	};

	return (
		<Fragment>
			{isSidebarOpen && (
				<div
					className="fixed inset-0 bg-black bg-opacity-50 transition-opacity z-10"
					onClick={() => dispatch(openSidebar(false))}
				/>
			)}

			<aside
				className={`bg-[#282733] text-[#9899ac] w-64 h-screen fixed top-0 left-0 transform transition-transform duration-300 ease-in-out z-10 flex flex-col ${
					isSidebarOpen ? "translate-x-0" : "-translate-x-full"
				} md:translate-x-0`}
			>
				<div className="flex items-center justify-between h-[65px] px-5 bg-[#201F2B] sticky top-0 z-10">
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
							<MdClose />
						</div>
					</button>
				</div>

				<div className="flex-1 overflow-y-auto">
					<ul id="sidebar-menu" className="pb-4">
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
										<div className="flex items-center w-full">
											<span
												className={`text-dark-icon ${
													isActive
														? "text-white"
														: "group-hover:text-blue-500"
												}`}
											>
												<FontAwesomeIcon
													icon={menu.icon}
												/>
												{/* Assuming menu.icon is now a React Icon */}
											</span>
											<span className="ml-4">
												{menu.label}
											</span>
										</div>
										{menu.submenus && (
											<span
												className={`transform transition-all duration-300 ${
													openMenu === index
														? "rotate-90"
														: ""
												} ${
													isActive
														? ""
														: "group-hover:text-white text-gray-600"
												}`}
											>
												&rsaquo;
											</span>
										)}
									</div>

									{menu.submenus && (
										<div
											style={{
												transition:
													"max-height 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
												maxHeight:
													openMenu === index
														? "9999px"
														: "0",
												opacity:
													openMenu === index ? 1 : 0,
											}}
											className="overflow-hidden"
										>
											<ul className="mt-2">
												{menu.submenus.map(
													(submenu, subIndex) => (
														<li key={subIndex}>
															<div
																className={`relative flex items-center cursor-pointer py-3 pl-10 pr-7 text-sm group hover:bg-dark-hover hover:text-white ${
																	pathname ===
																	submenu.url
																		? "text-white"
																		: "text-gray-400"
																}`}
																onClick={() =>
																	submenu.submenus &&
																	toggleSubSubmenu(
																		subIndex
																	)
																}
															>
																<div className="flex items-center flex-grow ">
																	{submenu.url ? (
																		<Link
																			href={
																				submenu.url
																			}
																			className="flex items-center hover:text-white "
																		>
																			<RxDotFilled className="mr-2" />{" "}
																			{/* Dots icon */}
																			{
																				submenu.label
																			}
																		</Link>
																	) : (
																		<span className="flex items-center">
																			<RxDotFilled className="mr-2" />{" "}
																			{/* Dots icon */}
																			{
																				submenu.label
																			}
																		</span>
																	)}
																</div>
																{submenu.submenus && (
																	<span
																		className={`absolute right-7 transform transition-all duration-300 ${
																			openSubmenu ===
																			subIndex
																				? "rotate-90"
																				: ""
																		}`}
																	>
																		&rsaquo;
																	</span>
																)}
															</div>

															{submenu.submenus && (
																<div
																	style={{
																		transition:
																			"max-height 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
																		maxHeight:
																			openSubmenu ===
																			subIndex
																				? "9999px"
																				: "0",
																		opacity:
																			openSubmenu ===
																			subIndex
																				? 1
																				: 0,
																	}}
																	className="overflow-hidden"
																>
																	<ul className="mt-2">
																		{submenu.submenus.map(
																			(
																				subsubmenu,
																				subSubIndex
																			) => (
																				<li
																					key={
																						subSubIndex
																					}
																				>
																					<div className="py-2 pl-16 text-sm text-gray-500 hover:bg-dark-hover hover:text-white">
																						{subsubmenu.url ? (
																							<Link
																								href={
																									subsubmenu.url
																								}
																								className="flex items-center"
																							>
																								<FiMinus className="mr-2" />{" "}
																								{/* Dots icon */}
																								{
																									subsubmenu.label
																								}
																							</Link>
																						) : (
																							<span className="flex items-center text-gray-500">
																								<RxDotFilled className="mr-2" />{" "}
																								{/* Dots icon */}
																								{
																									subsubmenu.label
																								}
																							</span>
																						)}
																					</div>
																				</li>
																			)
																		)}
																	</ul>
																</div>
															)}
														</li>
													)
												)}
											</ul>
										</div>
									)}
								</li>
							);
						})}
					</ul>
				</div>
			</aside>
		</Fragment>
	);
}
