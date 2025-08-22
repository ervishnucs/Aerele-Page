// /src/components/Navbar.tsx

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import './navbar.css'; // Responsive styles

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Team", href: "/our-team" },
  { label: "Service", href: "/service" },
  { label: "ERPNext", href: "/erpnext" },
  { label: "Blogs", href: "/blogs" },
];

export default function Navbar() { 
  const pathname = usePathname();

  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 fixed top-0 left-0 z-50 bg-white shadow">
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
        <span className="font-bold text-lg text-gray-700 hidden md:inline-block">
          Aerele Technologies
        </span>
      </div>
      <ul className="relative flex gap-8 items-center font-medium">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <li key={item.href} className="relative">
              <Link
                href={item.href}
                className={`pb-1 transition-colors ${
                  isActive
                    ? "text-black"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {item.label}
              </Link>
              {isActive && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 right-0 h-[3px] bg-[#032148]"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </li>
          );
        })}
        <li>
          <Link href="#contact">
            <button className="ml-4 px-6 py-2 rounded-full bg-[#032148] text-white shadow-md hover:bg-blue-800 transition-all">
              Contact us
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
