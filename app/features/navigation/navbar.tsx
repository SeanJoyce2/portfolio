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

  return (
    <nav className="flex gap-4 py-4 rounded justify-center pr-4 border m-2 bg-primary-foreground">
      {navItems.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={` border py-2 px-4 rounded-2xl  ${
              isActive
                ? "font-bold border-primary"
                : "font-medium border-secondary"
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
