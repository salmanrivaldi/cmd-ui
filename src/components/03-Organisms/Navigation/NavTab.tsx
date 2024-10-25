"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

interface NavTabProps {
  list: { label: string; url: string }[];
}

export default function NavTab({ list }: NavTabProps) {
  const pathname = usePathname();
  const activeClass = "text-teal-400 border-b border-teal-400";
  const notActiveClass = "text-gray-600 hover:text-teal-400";

  return (
    <ul className="flex border-b border-gray-200 text-sm">
      {list.map(({ label, url }, index) => (
        <li
          className="mr-6"
          key={index}
        >
          <Link
            className={`inline-block py-2 px-4 ${pathname === url ? activeClass : notActiveClass}`}
            href={url}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
