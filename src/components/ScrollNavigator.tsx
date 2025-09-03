"use client";

import { useEffect, useRef } from "react";  
import { useRouter, usePathname } from "next/navigation";

const pages = ["/", "/about", "/service", "/erpnext", "/our-team", "/blogs"];
const FOOTER_SELECTOR = "footer, #site-footer, [data-footer='true']";

type Props = { children: React.ReactNode };

export default function ScrollNavigator({ children }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  const navigatingRef = useRef(false);
  const lastYRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);
  const contactScrollLock = useRef(false);

  useEffect(() => {
    const unlockAfter = (ms = 900) => {
      setTimeout(() => (navigatingRef.current = false), ms);
    };

    const getFooterTop = () => {
      const footer = document.querySelector(FOOTER_SELECTOR) as HTMLElement | null;
      if (!footer) return document.body.scrollHeight;
      const rect = footer.getBoundingClientRect();
      return rect.top + window.scrollY;
    };

    const maybeNavigate = (direction: "down" | "up") => {
      if (navigatingRef.current || contactScrollLock.current) return;

      const currentIndex = pages.indexOf(pathname);
      if (currentIndex === -1) return;

      const footerTop = getFooterTop();
      const y = window.scrollY;
      const h = window.innerHeight;

      const bottomThreshold = Math.max(0, footerTop - h);
      const TOP_TOLERANCE = 4;
      const BOTTOM_TOLERANCE = 4;

      const atBottomBeforeFooter = y >= bottomThreshold - BOTTOM_TOLERANCE;
      const contentTooShort = footerTop <= h + 1;

      if (direction === "down") {
        if (contentTooShort || atBottomBeforeFooter) {
          if (currentIndex < pages.length - 1) {
            navigatingRef.current = true;
            router.push(pages[currentIndex + 1]);
            unlockAfter();
          }
        }
      }
    };

    // Scroll/Touch Events
    const onWheel = (e: WheelEvent) => maybeNavigate(e.deltaY > 0 ? "down" : "up");

    const onScroll = () => {
      const y = window.scrollY;
       if (y <= 0) {
    if (pathname !== "/") {
      router.push("/");
    }
    lastYRef.current = y;
    return;
  }
      const lastY = lastYRef.current ?? y;
      const direction = y > lastY ? "down" : "up";
      lastYRef.current = y;
      maybeNavigate(direction);
    };

    const onTouchStart = (e: TouchEvent) => {
      touchStartYRef.current = e.touches[0]?.clientY ?? null;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (touchStartYRef.current == null) return;
      const currentY = e.touches[0]?.clientY ?? touchStartYRef.current;
      const direction = currentY < touchStartYRef.current ? "down" : "up";
      maybeNavigate(direction);
    };

    // Contact Us button scroll
    const onContactClick = (e: Event) => {
      e.preventDefault();
      const footer = document.querySelector(FOOTER_SELECTOR);
      if (!footer) return;

      contactScrollLock.current = true;
      footer.scrollIntoView({ behavior: "smooth" });

      const checkIfAtFooter = () => {
        const rect = footer.getBoundingClientRect();
        const atFooter =
          rect.top >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);

        if (atFooter) {
          contactScrollLock.current = false;
          window.removeEventListener("scroll", checkIfAtFooter);
        }
      };

      window.addEventListener("scroll", checkIfAtFooter);
    };

    const contactBtns = document.querySelectorAll("[data-contact-btn]");
    contactBtns.forEach((btn) => btn.addEventListener("click", onContactClick));

    // Attach listeners
    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });

    lastYRef.current = window.scrollY;

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      contactBtns.forEach((btn) => btn.removeEventListener("click", onContactClick));
    };
  }, [pathname, router]);

  return <>{children}</>;
}
