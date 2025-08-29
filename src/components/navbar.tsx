// /src/components/Navbar.tsx

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import './navbar.css';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Our Team', href: '/our-team' },
  { label: 'Service', href: '/service' },
  { label: 'ERPNext', href: '/erpnext' },
  { label: 'Blogs', href: '/blogs' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((v) => !v);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="w-full flex items-center justify-between px-6 py-3 fixed top-0 left-0 z-50 bg-white shadow">
      <div className="flex items-center gap-2">
        <Link href="/" prefetch onClick={closeMenu}>
          <Image
            src="/assets/logo.png"
            alt="Aerele Logo"
            width={40}
            height={40}
            className="h-8 w-auto"
            priority
          />
        </Link>
        <span className="hidden sm:inline-block fluid-h2 text-2xl" style={{ color: '#334155' }}>
          𝐀𝐞𝐫𝐞𝐥𝐞 𝐓𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐢𝐞𝐬
        </span>
      </div>

      {/* Desktop Links (visible from >=640px) */}
      <ul className="relative gap-4 items-center font-medium text-sm hidden sm:flex">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li key={item.href} className="relative">
              <Link
                href={item.href}
                prefetch
                className={`pb-1 transition-colors ${
                  isActive ? 'text-black' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.label}
              </Link>
              {isActive && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 right-0 h-[3px] bg-[#032148]"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />)
              }
            </li>
          );
        })}
        <li>
          <Link href="#contact" prefetch>
            <button className="ml-2 px-3 py-1.5 rounded-full bg-[#032148] text-white shadow-md hover:bg-blue-800 transition-all text-sm">
              Contact us
            </button>
          </Link>
        </li>
      </ul>

      {/* Mobile Hamburger (only below 640px) */}
      <button
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        className="sm:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-gray-300 bg-white/90 shadow-sm"
        onClick={toggleMenu}
      >
        <span className="block w-5 h-[2px] bg-gray-900" />
        <span className="block w-5 h-[2px] bg-gray-900 mt-1.5" />
        <span className="block w-5 h-[2px] bg-gray-900 mt-1.5" />
      </button>

      {/* Mobile Sheet */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur border-t sm:hidden z-[60]"
          >
            <ul className="flex flex-col p-4 gap-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      prefetch
                      onClick={closeMenu}
                      className={`block w-full py-2 ${
                        isActive ? 'text-black' : 'text-gray-700 hover:text-blue-600'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
              <li className="pt-2">
                <Link href="#contact" onClick={closeMenu}>
                  <button className="w-full px-6 py-2 rounded-full bg-[#032148] text-white shadow-md hover:bg-blue-800 transition-all">
                    Contact us
                  </button>
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
