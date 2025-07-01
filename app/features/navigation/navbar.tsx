import Link from "next/link";
import React from "react";

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

const Navbar = () => (
  <nav className="flex gap-4 py-4 justify-end  pr-4">
    {navItems.map((item) => (
      <Link
        key={item.href}
        href={item.href}
        className="no-underline text-gray-800 font-medium"
      >
        {item.label}
      </Link>
    ))}
  </nav>
);

export default Navbar;
