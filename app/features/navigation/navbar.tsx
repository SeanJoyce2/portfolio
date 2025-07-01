"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();

  console.log(pathname);

  return (
    <nav className="flex gap-4 p-6 justify-end pr-4">
      {navItems.map((item) => {
        const isActive = pathname === item.href;

        console.log(isActive, pathname, item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`no-underline text-gray-800  transition hover:font-bold ${
              isActive ? "font-bold" : "font-medium"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
