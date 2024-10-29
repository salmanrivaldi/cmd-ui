"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { openSidebar } from "@/redux/features/app.slice";
import { HeaderIcons } from "@/data/icons";

export default function Header() {
	const dispatch = useDispatch();
	const [isDropdownOpen, setDropdownOpen] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement | null>(null);
	const mobileMenuRef = useRef<HTMLDivElement | null>(null);

	const toggleDropdown = () => {
		setDropdownOpen((prevState) => !prevState);
		setIsMobileMenuOpen(false);
	};

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen((prevState) => !prevState);
		setDropdownOpen(false);
	};

	const handleSignOut = () => {
		// Tambahkan logika untuk sign out di sini
	};

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setDropdownOpen(false);
			}
			if (
				mobileMenuRef.current &&
				!mobileMenuRef.current.contains(event.target as Node)
			) {
				setIsMobileMenuOpen(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<header
			className="bg-[#201F2B] text-white h-[65px] flex items-center justify-between px-5 shadow-lg"
			role="banner"
			aria-label="Site header"
		>
			{/* Logo */}
			<div className="flex-1 block md:hidden">
				<Image
					src="/images/logo.png"
					alt="Logo"
					width={140}
					height={40}
				/>
			</div>

			{/* Placeholder untuk menjaga posisi User Navigation di ujung kanan */}
			<div className="flex-1 hidden md:block"></div>

			{/* Desktop User Navigation */}
			<div
				className="hidden lg:block relative"
				role="navigation"
				aria-label="User navigation"
			>
				<div
					className="topbar-user flex items-center gap-3 cursor-pointer hover:text-gray-300 transition-colors duration-200"
					onClick={toggleDropdown}
					role="button"
					aria-expanded={isDropdownOpen}
					aria-controls="user-dropdown"
					aria-haspopup="true"
				>
					<div className="flex">
						<span className="text-[11.7px] mr-2 text-gray-500">
							Hi,
						</span>
						<span className="text-[13px] font-medium">
							Admin Super
						</span>
					</div>
					<Image
						src="/images/avatar.png"
						alt="User profile avatar"
						className="rounded-full object-cover"
						width={35}
						height={35}
					/>
				</div>

				{/* Desktop Dropdown */}
				{isDropdownOpen && (
					<div
						ref={dropdownRef}
						id="user-dropdown"
						className="absolute right-0 mt-2 bg-white shadow-lg w-[380px] z-10"
						role="menu"
						aria-label="User menu"
					>
						<div className="py-2">
							<Link
								href="/profile"
								className="flex items-center px-4 py-2 text-black hover:bg-gray-200 transition-colors duration-200"
								role="menuitem"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5 mr-2"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
								>
									<path
										fillRule="evenodd"
										d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
										clipRule="evenodd"
									/>
								</svg>
								<span>My Profile</span>
							</Link>
							<Link
								href="/activities"
								className="flex items-center px-4 py-2 text-black hover:bg-gray-200 transition-colors duration-200"
								role="menuitem"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5 mr-2"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
								>
									<path
										fillRule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
										clipRule="evenodd"
									/>
								</svg>
								<span>My Activities</span>
							</Link>
							<button
								onClick={handleSignOut}
								className="flex w-full items-center px-4 py-2 text-black hover:bg-gray-200 transition-colors duration-200"
								role="menuitem"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5 mr-2"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
								>
									<path
										fillRule="evenodd"
										d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
										clipRule="evenodd"
									/>
								</svg>
								<span>Sign Out</span>
							</button>
						</div>
					</div>
				)}
			</div>

			{/* Mobile Controls - Right Side */}
			<div className="lg:hidden flex items-center gap-3">
				{/* Mobile Sidebar Toggle */}
				<button
					className="relative"
					onClick={() => dispatch(openSidebar(true))}
					aria-label="Toggle sidebar navigation"
					aria-expanded="false"
					aria-controls="mobile-sidebar"
				>
					<HeaderIcons.CgMenuRight className="text-3xl text-gray-500" />
				</button>

				{/* Mobile Menu Toggle */}
				<button
					className="relative"
					onClick={toggleMobileMenu}
					aria-label="Toggle mobile menu"
					aria-expanded={isMobileMenuOpen}
					aria-controls="mobile-menu"
					role="button"
				>
					<HeaderIcons.HiDotsVertical className="text-2xl text-blue-500" />
				</button>
			</div>

			{/* Mobile Menu Dropdown */}
			{isMobileMenuOpen && (
				<div
					ref={mobileMenuRef}
					className="absolute top-[65px] right-0 w-full bg-white shadow-lg z-20 lg:hidden"
					role="menu"
					aria-label="Mobile user menu"
				>
					<div className="p-4 border-b border-gray-200">
						<div className="flex items-center gap-3 mb-2">
							<Image
								src="/images/avatar.png"
								alt="User profile avatar"
								className="rounded-full object-cover"
								width={40}
								height={40}
							/>
							<div>
								<span className="text-gray-500 text-sm">
									Hi,
								</span>
								<span className="text-black font-medium ml-1">
									Admin Super
								</span>
							</div>
						</div>
					</div>
					<div className="py-2">
						<Link
							href="/profile"
							className="flex items-center px-4 py-2 text-black hover:bg-gray-200 transition-colors duration-200"
							role="menuitem"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 mr-2"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fillRule="evenodd"
									d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
									clipRule="evenodd"
								/>
							</svg>
							<span>My Profile</span>
						</Link>
						<Link
							href="/activities"
							className="flex items-center px-4 py-2 text-black hover:bg-gray-200 transition-colors duration-200"
							role="menuitem"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 mr-2"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fillRule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
									clipRule="evenodd"
								/>
							</svg>
							<span>My Activities</span>
						</Link>
						<button
							onClick={handleSignOut}
							className="flex w-full items-center px-4 py-2 text-black hover:bg-gray-200 transition-colors duration-200"
							role="menuitem"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 mr-2"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fillRule="evenodd"
									d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
									clipRule="evenodd"
								/>
							</svg>
							<span>Sign Out</span>
						</button>
					</div>
				</div>
			)}
		</header>
	);
}
