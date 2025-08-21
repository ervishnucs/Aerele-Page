// /src/components/Navbar.tsx

'use client'; // This is needed if you use interactive elements

import Link from 'next/link';
import Image from 'next/image';


const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Team", href: "#team" },
  { label: "Service", href: "/service" },
  { label: "ERPNext", href: "/erpnext" },
  { label: "Blogs", href: "#blogs" },
];

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 bg-transparent fixed top-0 left-0 z-50 backdrop-blur-md">
      <div className="flex items-center gap-2">
        <Link href="/">
          <Image
            src="/assets/logo.png"
            alt="Aerele Logo"
            width={48}
            height={48}
            className="h-10 w-auto"
          />
        </Link>
        <span className="font-bold text-lg text-gray-700 hidden md:inline-block">Aerele Technologies</span>
      </div>
      <ul className="flex gap-8 items-center text-gray-700 font-medium">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="hover:text-blue-600 transition-colors">
              {item.label}
            </Link>
          </li>
        ))}
        <li>
          <Link href="#contact">
            <button className="ml-4 px-6 py-2 rounded-full bg-blue-500 text-white shadow-md hover:bg-blue-600 transition-all">Contact us</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
