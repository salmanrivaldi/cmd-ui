"use client";
import Link from "next/link";
import React, { useState, useEffect, useCallback, Fragment } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { openSidebar } from "@/redux/features/app.slice";
import { RootState } from "@/redux/store";
import { menus } from "@/data/menus";
import {
	MenuItemProps,
	SubmenuItemProps,
	SubSubmenuItemProps,
} from "@/types/menuTypes";
import { SubmenuIcons } from "@/data/icons";

// MenuItem Component
const MenuItem: React.FC<MenuItemProps> = React.memo(
	({ menu, index, isActive, openMenu, toggleSubmenu, isCollapsed }) => {
		const [isHovered, setIsHovered] = useState(false);

		const getIconColorClass = () => {
			if (isActive) return "text-white";
			if (isCollapsed && !isHovered) return "text-light-icon";
			return "text-dark-icon group-hover:text-blue-500";
		};

		if (menu.url) {
			return (
				<Link href={menu.url} prefetch={false}>
					<div
						className={`flex items-center h-[48px] cursor-pointer group hover:text-white hover:bg-dark-hover transition-colors duration-300 ${
							isActive ? "bg-red-active text-white" : ""
						}`}
						onMouseEnter={() => setIsHovered(true)}
						onMouseLeave={() => setIsHovered(false)}
					>
						<div className="flex items-center w-16 h-full justify-center flex-shrink-0">
							<span
								className={`text-lg transition-colors duration-300 ${getIconColorClass()}`}
							>
								<menu.icon />
							</span>
						</div>
						<div
							className={`flex-grow whitespace-nowrap transition-all duration-300 overflow-hidden ${
								isCollapsed
									? "w-0 opacity-0"
									: "w-auto opacity-100 pr-7"
							}`}
						>
							<span>{menu.label}</span>
						</div>
					</div>
				</Link>
			);
		}

		return (
			<div
				className={`flex items-center h-[48px] cursor-pointer group hover:text-white hover:bg-dark-hover transition-colors duration-300 ${
					isActive ? "bg-red-active text-white" : ""
				}`}
				onClick={() => toggleSubmenu(index)}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				<div className="flex items-center w-16 h-full justify-center flex-shrink-0">
					<span
						className={`text-lg transition-colors duration-300 ${getIconColorClass()}`}
					>
						<menu.icon />
					</span>
				</div>
				<div
					className={`flex-grow flex items-center justify-between whitespace-nowrap transition-all duration-300 overflow-hidden ${
						isCollapsed
							? "w-0 opacity-0"
							: "w-auto opacity-100 pr-7"
					}`}
				>
					<span>{menu.label}</span>
					{menu.submenus && (
						<span
							className={`transition-transform duration-300 ${
								openMenu === index ? "rotate-90" : ""
							} ${
								isActive
									? ""
									: "text-gray-600 group-hover:text-white"
							}`}
						>
							&rsaquo;
						</span>
					)}
				</div>
			</div>
		);
	}
);
MenuItem.displayName = "MenuItem";

// SubSubmenuItem Component
const SubSubmenuItem: React.FC<SubSubmenuItemProps> = React.memo(
	({ subsubmenu }) => {
		const content = (
			<div className="py-2 pl-16 text-[13px] text-gray-500 hover:bg-dark-hover hover:text-white group transition-colors duration-300">
				<span className="flex items-center">
					<SubmenuIcons.FiMinus className="mr-2 group-hover:text-blue-500" />
					{subsubmenu.label}
				</span>
			</div>
		);

		if (subsubmenu.url) {
			return (
				<Link href={subsubmenu.url} prefetch={false}>
					{content}
				</Link>
			);
		}

		return content;
	}
);
SubSubmenuItem.displayName = "SubSubmenuItem";

// SubmenuItem Component
const SubmenuItem: React.FC<SubmenuItemProps> = React.memo(
	({
		submenu,
		subIndex,
		openSubmenu,
		toggleSubSubmenu,
		pathname,
		isCollapsed,
	}) => {
		if (submenu.url) {
			return (
				<Link href={submenu.url} prefetch={false}>
					<div
						className={`flex items-center h-[40px] cursor-pointer group hover:text-white hover:bg-dark-hover transition-colors duration-300 ${
							pathname === submenu.url
								? "bg-dark-hover text-white"
								: "text-gray-400"
						}`}
					>
						<div className="w-16 flex items-center justify-center flex-shrink-0">
							<SubmenuIcons.RxDotFilled className="text-sm transition-colors duration-300 group-hover:text-blue-500" />
						</div>
						<div className="flex-grow text-[13px] pr-7">
							{submenu.label}
						</div>
					</div>
				</Link>
			);
		}

		return (
			<>
				<div
					className={`relative flex items-center cursor-pointer h-[40px] text-[13px] group hover:bg-dark-hover hover:text-white transition-colors duration-300 ${
						pathname === submenu.url
							? "text-white"
							: "text-gray-400"
					}`}
					onClick={() =>
						submenu.submenus && toggleSubSubmenu(subIndex)
					}
				>
					<div className="w-16 flex items-center justify-center flex-shrink-0">
						<SubmenuIcons.RxDotFilled className="text-sm transition-colors duration-300 group-hover:text-blue-500" />
					</div>
					<div className="flex-grow flex items-center justify-between pr-7">
						<span>{submenu.label}</span>
						{submenu.submenus && (
							<span
								className={`transition-transform duration-300 ${
									openSubmenu === subIndex ? "rotate-90" : ""
								}`}
							>
								&rsaquo;
							</span>
						)}
					</div>
				</div>

				{submenu.submenus && (
					<div
						className={`${
							openSubmenu === subIndex ? "block" : "hidden"
						}`}
					>
						<ul className="mt-2">
							{submenu.submenus.map((subsubmenu, subSubIndex) => (
								<li key={subSubIndex}>
									<SubSubmenuItem
										subsubmenu={subsubmenu}
										openSubmenu={openSubmenu}
										subIndex={subIndex}
										isCollapsed={isCollapsed}
									/>
								</li>
							))}
						</ul>
					</div>
				)}
			</>
		);
	}
);
SubmenuItem.displayName = "SubmenuItem";

// Main Sidebar Component
export default function Sidebar() {
	const dispatch = useDispatch();
	const pathname = usePathname();
	const [openMenu, setOpenMenu] = useState<number | null>(null);
	const [openSubmenu, setOpenSubmenu] = useState<number | null>(null);
	const [isCollapsed, setIsCollapsed] = useState(true);
	const [isHovered, setIsHovered] = useState(false);
	const [submenuState, setSubmenuState] = useState<{
		openMenu: number | null;
		openSubmenu: number | null;
	}>({ openMenu: null, openSubmenu: null });
	const isSidebarOpen = useSelector(
		(state: RootState) => state.app.isSidebarOpen
	);

	const findActiveMenuIndex = useCallback(() => {
		return menus.findIndex((menu) => {
			if (menu.submenus) {
				return menu.submenus.some(
					(submenu) => submenu.url === pathname
				);
			}
			return menu.url === pathname;
		});
	}, [pathname]);

	useEffect(() => {
		const menuIndex = findActiveMenuIndex();
		if (menuIndex !== -1) {
			setOpenMenu(menuIndex);
			setSubmenuState((prev) => ({ ...prev, openMenu: menuIndex }));
		}
	}, [pathname, findActiveMenuIndex]);

	const toggleSubmenu = useCallback((index: number) => {
		setOpenMenu((prev) => {
			const newValue = prev === index ? null : index;
			setSubmenuState((prevState) => ({
				...prevState,
				openMenu: newValue,
			}));
			return newValue;
		});
		setOpenSubmenu(null);
	}, []);

	const toggleSubSubmenu = useCallback((index: number) => {
		setOpenSubmenu((prev) => {
			const newValue = prev === index ? null : index;
			setSubmenuState((prevState) => ({
				...prevState,
				openSubmenu: newValue,
			}));
			return newValue;
		});
	}, []);

	const handleMouseEnter = () => {
		if (isCollapsed) {
			setIsHovered(true);
			// Langsung mengembalikan state submenu tanpa delay
			setOpenMenu(submenuState.openMenu);
			setOpenSubmenu(submenuState.openSubmenu);
		}
	};

	const handleMouseLeave = () => {
		if (isCollapsed) {
			setIsHovered(false);
			// Simpan state submenu sebelum sidebar collapse
			setSubmenuState({
				openMenu,
				openSubmenu,
			});
			// Reset submenu state
			setOpenMenu(null);
			setOpenSubmenu(null);
		}
	};

	const toggleCollapse = () => {
		const mainContent = document.getElementById("main-content");

		if (isCollapsed) {
			setIsCollapsed(false);
			setOpenMenu(submenuState.openMenu);
			setOpenSubmenu(submenuState.openSubmenu);
			mainContent?.classList.remove("md:ml-16");
			mainContent?.classList.add("md:ml-64");
		} else {
			setIsCollapsed(true);
			setSubmenuState({
				openMenu,
				openSubmenu,
			});
			setOpenMenu(null);
			setOpenSubmenu(null);
			mainContent?.classList.add("md:ml-16");
			mainContent?.classList.remove("md:ml-64");
		}
	};

	return (
		<Fragment>
			{isSidebarOpen && (
				<div
					className="fixed inset-0 bg-black bg-opacity-50 z-10"
					onClick={() => dispatch(openSidebar(false))}
				/>
			)}
			<aside
				className={`bg-[#282733] text-[#9899ac] fixed top-0 left-0 z-10 h-full transition-all duration-300 
					${isCollapsed && !isHovered ? "w-16" : "w-64"}
					${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
					md:translate-x-0 flex flex-col`}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				<div className="flex items-center h-16 px-5 bg-[#201F2B] flex-shrink-0">
					<div
						className={`flex items-center justify-between transition-all duration-300 ${
							isCollapsed && !isHovered ? "w-6" : "w-full"
						}`}
					>
						{(!isCollapsed || isHovered) && (
							<Link
								href="/"
								prefetch={false}
								className="flex items-center"
							>
								<Image
									src="/images/logo.png"
									alt="Logo"
									className="h-12 w-auto"
									width={100}
									height={50}
									priority
								/>
							</Link>
						)}
						<button
							onClick={toggleCollapse}
							className="text-white hover:text-blue-500 transition-colors"
						>
							☰
						</button>
					</div>
				</div>

				<nav className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-[#282733] [&::-webkit-scrollbar-thumb]:bg-[#4a4b61] hover:[&::-webkit-scrollbar-thumb]:bg-[#6a6b8c]">
					<ul className="pb-4">
						{menus.map((menu, index) => {
							const isActive =
								pathname === menu.url ||
								(menu.submenus?.some(
									(submenu) => submenu.url === pathname
								) ??
									false);

							return (
								<li key={index} className="text-[13px]">
									<MenuItem
										menu={menu}
										index={index}
										isActive={isActive}
										openMenu={openMenu}
										toggleSubmenu={toggleSubmenu}
										isCollapsed={isCollapsed && !isHovered}
									/>

									{(!isCollapsed || isHovered) &&
										menu.submenus && (
											<div
												className={`${
													openMenu === index
														? "block"
														: "hidden"
												}`}
											>
												<ul className="mt-2">
													{menu.submenus.map(
														(submenu, subIndex) => (
															<li key={subIndex}>
																<SubmenuItem
																	submenu={
																		submenu
																	}
																	subIndex={
																		subIndex
																	}
																	openSubmenu={
																		openSubmenu
																	}
																	toggleSubSubmenu={
																		toggleSubSubmenu
																	}
																	pathname={
																		pathname
																	}
																	isCollapsed={
																		isCollapsed &&
																		!isHovered
																	}
																/>
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
				</nav>
			</aside>
		</Fragment>
	);
}
