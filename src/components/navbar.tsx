// /src/components/Navbar.tsx

'use client';

import Link from 'next/link';
import Image from 'next/image';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import './navbar.css';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },  
  { label: 'Service', href: '#service' },
  { label: 'ERPNext', href: '#erpnext' },
  { label: 'Our Team', href: '#our-team' },
  { label: 'Blogs', href: '#blogs' },
];

export default function Navbar() {
 
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState<string>('#home');
  const observerRef = useRef<IntersectionObserver | null>(null);
  const lastActiveRef = useRef<string>('#home');

  const closeMenu = () => setIsOpen(false);

  // Track visible section to highlight active nav item
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-section][id]'));
    if (!sections.length) return;

    if (observerRef.current) observerRef.current.disconnect();
    const replayAnimations = (container: HTMLElement) => {
      const animatables = container.querySelectorAll<HTMLElement>('[data-replay-on-active]');
      animatables.forEach((el) => {
        el.style.animation = 'none';
        // force reflow
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        el.offsetHeight;
        el.style.animation = '';
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const sorted = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (sorted[0]?.target) {
          const sectionEl = sorted[0].target as HTMLElement;
          const id = sectionEl.id;
          if (lastActiveRef.current !== `#${id}`) {
            lastActiveRef.current = `#${id}`;
            setActiveHash(`#${id}`);
            if (history.replaceState) {
              history.replaceState(null, '', `#${id}`);
            }
            replayAnimations(sectionEl);
          }
        }
      },
      { threshold: [0.25, 0.5], rootMargin: '0px 0px -45% 0px' }
    );

    sections.forEach((sec) => observer.observe(sec));
    observerRef.current = observer;
    // Scroll-based fallback to ensure active state updates
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        // Use section tops: pick the last section whose top is above the viewport with a small offset
        const offset = 100; // accounts for fixed navbar height + padding
        const viewportTop = window.scrollY + offset;
        let currentId = sections[0].id;
        for (const sec of sections) {
          if (sec.offsetTop <= viewportTop) currentId = sec.id;
        }
        if (lastActiveRef.current !== `#${currentId}`) {
          lastActiveRef.current = `#${currentId}`;
          setActiveHash(`#${currentId}`);
          if (history.replaceState) {
            history.replaceState(null, '', `#${currentId}`);
          }
          const target = document.getElementById(currentId);
          if (target) replayAnimations(target);
        }
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const handleAnchorClick = (hash: string) => {
    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveHash(hash);
      // Replay animations when navigating by click
      const sectionEl = el as HTMLElement;
      const animatables = sectionEl.querySelectorAll<HTMLElement>('[data-replay-on-active]');
      animatables.forEach((node) => {
        node.style.animation = 'none';
        // force reflow
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        node.offsetHeight;
        node.style.animation = '';
      });
      // Hide footer if navigating to any section
      document.body.classList.add('footer-hidden');
      document.body.classList.remove('show-footer');
    }
  };

  return (
    <nav className="w-full flex items-center justify-between px-6 py-3 fixed top-0 left-0 z-50 bg-white shadow">
      <div className="flex items-center gap-2">
        <Link href="/" prefetch onClick={closeMenu}>
          <Image
            src="/assets/logon.png"
            alt="Aerele Logo"
            width={40}
            height={40}
            className="h-8 w-auto"
            priority
          />
        </Link>
       <span className="span-logo">
  AERELE TECHNOLOGIES
</span>

      </div>

      {/* Desktop Links (visible from >=640px) */}
      <ul className="relative gap-4 items-center font-medium text-sm hidden sm:flex">
        {navItems.map((item) => {
          const isActive = activeHash === item.href;
          return (
            <li key={item.href} className="relative">
              <a
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleAnchorClick(item.href);
                }}
                className={`pb-1 transition-colors ${
                  isActive ? 'text-black' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.label}
              </a>
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
            <button
              data-contact-btn
              className="ml-2 px-3 py-1.5 rounded-full bg-[#032148] text-white shadow-md hover:bg-blue-800 transition-all text-sm"
              onClick={(e) => {
                e.preventDefault();
                document.body.classList.remove('footer-hidden');
                document.body.classList.add('show-footer');
                const contact = document.getElementById('contact');
                if (contact) {
                  contact.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  if (history.replaceState) history.replaceState(null, '', '#contact');
                }
              }}
            >
              Contact us
            </button>
          </Link>
        </li>
      </ul>

      <div className="relative sm:hidden">
 

 {/* Mobile Hamburger (only below 640px) */}
<button
  aria-label="Toggle menu"
  aria-expanded={isOpen}
  onClick={() => setIsOpen(!isOpen)}
  className="sm:hidden flex flex-col items-center justify-center w-10 h-10 rounded-lg bg-white/90 shadow-sm z-[70] mr-4"  // 👈 added mr-3
>
  <span className="block w-5 h-0.5 bg-[#032148]" />
  <span className="block w-5 h-0.5 bg-[#032148] my-[5px]" />
  <span className="block w-5 h-0.5 bg-[#032148]" />
</button>


{/* Mobile Sheet */}
<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur border-b sm:hidden z-[60]"
    >
      <ul className="flex flex-col p-4 gap-2">
        {navItems.map((item) => {
          const isActive = activeHash === item.href;
          return (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleAnchorClick(item.href);
                  closeMenu();
                }}
                className={`block w-full py-2 ${
                  isActive ? 'text-black' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.label}
              </a>
            </li>
          );
        })}
        <li className="pt-2">
          <Link href="#contact" onClick={closeMenu}>
            <button
              data-contact-btn
              className="w-full px-6 py-2 rounded-full bg-[#032148] text-white shadow-md hover:bg-blue-800 transition-all"
              onClick={(e) => {
                e.preventDefault();
                document.body.classList.remove('footer-hidden');
                document.body.classList.add('show-footer');
                const contact = document.getElementById('contact');
                if (contact) {
                  contact.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  if (history.replaceState) history.replaceState(null, '', '#contact');
                }
              }}
            >
              Contact us
            </button>
          </Link>
        </li>
      </ul>
    </motion.div>
  )}
</AnimatePresence>

</div>
</nav>
  );
}
