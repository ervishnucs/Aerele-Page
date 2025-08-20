// /src/components/Navbar.tsx

'use client'; // This is needed if you use interactive elements

import Link from 'next/link';
import Image from 'next/image';

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Team", href: "/team" },
  { label: "Service", href: "/services" },
  { label: "ERP Next", href: "/erpnext" },
  { label: "Blogs", href: "/blogs" },
];

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 shadow bg-white fixed top-0 z-50">
      {/* Logo */}
      <Link href="/">
        <Image
          src="/assets/logo.png"
          alt="Logo"
          width={120}
          height={40}
        />
      </Link>

      {/* Navigation Items rendered using loop */}
      <ul className="flex gap-6">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="text-gray-700 hover:text-blue-600">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Call Button */}
      <Link href="tel:+91-XXXXXXXXXX">
        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
          <Image
            src="/assets/call-icon.png"
            alt="Call"
            width={18}
            height={18}
          />
        </div>
      </Link>
    </nav>
  );
}
