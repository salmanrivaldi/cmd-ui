"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { openSidebar } from "@/redux/features/app.slice";

export default function Header() {
  const dispatch = useDispatch();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isFaded, setFaded] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null); // Ref untuk dropdown

  const toggleDropdown = () => {
    if (!isDropdownOpen) {
      setDropdownOpen(true);
      setFaded(true); // Set fade in saat membuka dropdown
    } else {
      setFaded(false); // Set fade out sebelum menutup
      setTimeout(() => {
        setDropdownOpen(false); // Menutup dropdown setelah efek fade out
      }, 300); // Sesuaikan dengan durasi transisi
    }
  };

  const handleSignOut = () => {
    // Tambahkan logika untuk sign out di sini
  };

  // Effect untuk menutup dropdown ketika klik di luar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        if (isDropdownOpen) {
          setFaded(false); // Set fade out
          setTimeout(() => {
            setDropdownOpen(false); // Menutup dropdown setelah efek fade out
          }, 300);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

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
          className="flex items-center gap-3 cursor-pointer hover:text-gray-300 transition-colors duration-200"
          onClick={toggleDropdown}
        >
          <div className="uppercase text-sm  font-semibold">Salman Rivaldi</div>
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
            ref={dropdownRef} // Menambahkan ref ke dropdown
            className={`absolute right-0 mt-2 bg-white rounded-md shadow-lg transition-opacity duration-300 ease-in-out ${isFaded ? "opacity-100" : "opacity-0"}`}
          >
            <ul className={`py-2 transition-all duration-300 ${isFaded ? "max-h-40 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
              <li>
                <Link
                  href="/profil"
                  className="block px-4 py-2 text-black hover:bg-gray-200 transition-colors duration-200 rounded-md"
                >
                  Profil
                </Link>
              </li>
              <li>
                <button
                  onClick={handleSignOut}
                  className="block w-full text-left px-4 py-2 text-black hover:bg-gray-200 transition-colors duration-200 rounded-md"
                >
                  Sign Out
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
