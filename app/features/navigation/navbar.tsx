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
    <nav className="sticky top-0 z-50 flex gap-2 xl:gap-6 py-4 px-2 justify-center border-b border-primary/30 bg-secondary/80 backdrop-blur-md shadow-xl">
      {navItems.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`uppercase tracking-widest transition-all duration-200 border-2 px-6 py-2 mx-1 rounded-xl shadow-sm hover:scale-105 hover:bg-primary hover:text-primary-foreground hover:border-primary/80
              ${
                isActive
                  ? "font-extrabold border-primary bg-primary text-primary-foreground shadow-primary/40 shadow-lg"
                  : "font-semibold border-transparent text-foreground"
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
