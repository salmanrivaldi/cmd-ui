"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { openSidebar } from "@/redux/features/app.slice";

export default function Header() {
	const dispatch = useDispatch();
	const [isDropdownOpen, setDropdownOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement | null>(null);

	const toggleDropdown = () => {
		setDropdownOpen((prevState) => !prevState);
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
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<header className="bg-[#201F2B] text-white h-[65px] flex items-center justify-between md:justify-end px-5 shadow-lg">
			<button
				className="relative group lg:hidden"
				onClick={() => dispatch(openSidebar(true))}
			>
				<div className="relative flex overflow-hidden items-center justify-center rounded-full w-[33px] h-[33px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-4 group-focus:ring-4 ring-opacity-30 duration-200">
					<div className="flex flex-col p-[3px] justify-between w-[20px] h-[20px]">
						<div className="bg-white h-[2px]"></div>
						<div className="bg-white h-[2px]"></div>
						<div className="bg-white h-[2px]"></div>
					</div>
				</div>
			</button>
			<div className="relative">
				<div
					className="topbar-user flex items-center gap-3 cursor-pointer hover:text-gray-300 transition-colors duration-200"
					onClick={toggleDropdown}
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
						alt="avatar"
						className="rounded-full object-cover"
						width={35}
						height={35}
					/>
				</div>
				{isDropdownOpen && (
					<div
						ref={dropdownRef}
						className="absolute right-0 left-0 mt-2 bg-white shadow-lg w-[380px] z-10"
					>
						<div className="py-2">
							<Link
								href="/profile"
								className="flex items-center px-4 py-2 text-black hover:bg-gray-200 transition-colors duration-200"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5 mr-2"
									viewBox="0 0 20 20"
									fill="currentColor"
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
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5 mr-2"
									viewBox="0 0 20 20"
									fill="currentColor"
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
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5 mr-2"
									viewBox="0 0 20 20"
									fill="currentColor"
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
		</header>
	);
}
