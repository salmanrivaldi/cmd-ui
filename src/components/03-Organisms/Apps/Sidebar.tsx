"use client";
import Link from "next/link";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import { MdClose } from "react-icons/md";
import { RxDotFilled } from "react-icons/rx";
import { FiMinus } from "react-icons/fi";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { openSidebar } from "@/redux/features/app.slice";
import { RootState } from "@/redux/store";
import { menus } from "@/data/menus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

// Interfaces
interface Submenu {
	label: string;
	url?: string;
	submenus?: Submenu[];
}

interface Menu {
	label: string;
	icon: IconDefinition;
	url?: string;
	submenus?: Submenu[];
}

interface MenuItemProps {
	menu: Menu;
	index: number;
	isActive: boolean;
	openMenu: number | null;
	toggleSubmenu: (index: number) => void;
}

interface SubmenuItemProps {
	submenu: Submenu;
	subIndex: number;
	openSubmenu: number | null;
	toggleSubSubmenu: (index: number) => void;
	pathname: string;
}

interface SubSubmenuItemProps {
	subsubmenu: Submenu;
	openSubmenu: number | null;
	subIndex: number;
}

// MenuItem Component
const MenuItem: React.FC<MenuItemProps> = React.memo(
	({ menu, index, isActive, openMenu, toggleSubmenu }) => {
		if (menu.url) {
			return (
				<Link href={menu.url} prefetch={false}>
					<div
						className={`flex justify-between items-center cursor-pointer py-3 px-7 group hover:text-white ${
							isActive
								? "bg-red-500 text-white"
								: "hover:bg-dark-hover"
						}`}
					>
						<div className="flex items-center w-full">
							<span
								className={`${
									isActive
										? "text-white"
										: "group-hover:text-blue-500"
								}`}
							>
								<FontAwesomeIcon icon={menu.icon} />
							</span>
							<span className="ml-4">{menu.label}</span>
						</div>
					</div>
				</Link>
			);
		}

		return (
			<div
				className={`flex justify-between items-center cursor-pointer py-3 px-7 group hover:text-white ${
					isActive ? "bg-red-500 text-white" : "hover:bg-dark-hover"
				}`}
				onClick={() => toggleSubmenu(index)}
			>
				<div className="flex items-center w-full">
					<span
						className={`${
							isActive
								? "text-white"
								: "group-hover:text-blue-500"
						}`}
					>
						<FontAwesomeIcon icon={menu.icon} />
					</span>
					<span className="ml-4">{menu.label}</span>
				</div>
				{menu.submenus && (
					<span
						className={`transition-transform duration-500 ${
							openMenu === index ? "rotate-90" : ""
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
		);
	}
);
MenuItem.displayName = "MenuItem";

// SubSubmenuItem Component
const SubSubmenuItem: React.FC<SubSubmenuItemProps> = React.memo(
	({ subsubmenu }) => {
		const content = (
			<div className="py-2 pl-16 text-xs text-gray-500 hover:bg-dark-hover hover:text-white group">
				<span className="flex items-center">
					<FiMinus className="mr-2 group-hover:text-blue-500" />
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
	({ submenu, subIndex, openSubmenu, toggleSubSubmenu, pathname }) => {
		if (submenu.url) {
			return (
				<Link href={submenu.url} prefetch={false}>
					<div
						className={`relative flex items-center cursor-pointer py-3 pl-10 pr-7 text-xs group hover:bg-dark-hover hover:text-white ${
							pathname === submenu.url
								? "bg-dark-hover text-white"
								: "text-gray-400"
						}`}
					>
						<div className="flex items-center flex-grow">
							<RxDotFilled className="mr-2 group-hover:text-blue-500" />
							{submenu.label}
						</div>
					</div>
				</Link>
			);
		}

		return (
			<>
				<div
					className={`relative flex items-center cursor-pointer py-3 pl-10 pr-7 text-xs group hover:bg-dark-hover hover:text-white ${
						pathname === submenu.url
							? "text-white"
							: "text-gray-400"
					}`}
					onClick={() =>
						submenu.submenus && toggleSubSubmenu(subIndex)
					}
				>
					<div className="flex items-center flex-grow">
						<RxDotFilled className="mr-2 group-hover:text-blue-500" />
						{submenu.label}
					</div>
					{submenu.submenus && (
						<span
							className={`absolute right-7 transition-transform duration-500 ${
								openSubmenu === subIndex ? "rotate-90" : ""
							}`}
						>
							&rsaquo;
						</span>
					)}
				</div>

				{submenu.submenus && (
					<div
						className={`overflow-hidden transition-all duration-500 ease-in-out ${
							openSubmenu === subIndex
								? "max-h-screen"
								: "max-h-0"
						}`}
					>
						<ul className="mt-2">
							{submenu.submenus.map((subsubmenu, subSubIndex) => (
								<li
									key={subSubIndex}
									className={`overflow-hidden transition-all duration-500 ease-in-out ${
										openSubmenu === subIndex
											? "max-h-screen"
											: "max-h-0"
									}`}
								>
									<SubSubmenuItem
										subsubmenu={subsubmenu}
										openSubmenu={openSubmenu}
										subIndex={subIndex}
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
		}
	}, [pathname, findActiveMenuIndex]);

	useEffect(() => {
		dispatch(openSidebar(false));
	}, [pathname, dispatch]);

	const toggleSubmenu = useCallback((index: number) => {
		setOpenMenu((prev) => (prev === index ? null : index));
		setOpenSubmenu(null);
	}, []);

	const toggleSubSubmenu = useCallback((index: number) => {
		setOpenSubmenu((prev) => (prev === index ? null : index));
	}, []);

	const SidebarOverlay = useMemo(
		() =>
			isSidebarOpen && (
				<div
					className="fixed inset-0 bg-black bg-opacity-50 z-10"
					onClick={() => dispatch(openSidebar(false))}
				/>
			),
		[isSidebarOpen, dispatch]
	);

	const Logo = useMemo(
		() => (
			<Link href="/" prefetch={false} className="flex items-center">
				<Image
					src="/images/logo.png"
					alt="Logo"
					className="h-12 w-auto"
					width={100}
					height={50}
					priority
				/>
			</Link>
		),
		[]
	);

	return (
		<React.Fragment>
			{SidebarOverlay}

			<aside
				className={`bg-[#282733] text-[#9899ac] w-64 fixed top-0 left-0 z-10 h-full transition-transform duration-500 ${
					isSidebarOpen ? "translate-x-0" : "-translate-x-full"
				} md:translate-x-0 flex flex-col`} // Menetapkan ukuran width tetap
			>
				<div className="flex items-center justify-between h-16 px-5 bg-[#201F2B] flex-shrink-0">
					{Logo}
					<button
						className="relative group lg:hidden"
						onClick={() => dispatch(openSidebar(false))}
					>
						<div className="relative flex overflow-hidden items-center justify-center rounded-full w-7 h-7 bg-slate-700 ring-0 ring-gray-300 hover:ring-4 group-focus:ring-4 ring-opacity-30">
							<MdClose />
						</div>
					</button>
				</div>

				<nav className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-[#282733] [&::-webkit-scrollbar-thumb]:bg-[#4a4b61] hover:[&::-webkit-scrollbar-thumb]:bg-[#6a6b8c]">
					<ul id="sidebar-menu" className="pb-4">
						{menus.map((menu, index) => {
							const isActive: boolean =
								pathname === menu.url ||
								(menu.submenus?.some(
									(submenu) => submenu.url === pathname
								) ??
									false);

							return (
								<li key={index} className="text-xs">
									<MenuItem
										menu={menu}
										index={index}
										isActive={isActive}
										openMenu={openMenu}
										toggleSubmenu={toggleSubmenu}
									/>

									{menu.submenus && (
										<div
											className={`overflow-hidden transition-all duration-500 ease-in-out ${
												openMenu === index
													? "max-h-screen"
													: "max-h-0"
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
		</React.Fragment>
	);
}
