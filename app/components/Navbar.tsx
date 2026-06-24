"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Ana Sayfa", href: "/" },
    { name: "Tüm Ürünler", href: "/urunler" },
    { name: "Radar Sistemleri", href: "/urunler/radar" },
    { name: "Marin Klima", href: "/urunler/klima" },
    { name: "Hakkımızda", href: "/hakkimizda" },
    { name: "İletişim", href: "/iletisim" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "glassmorphism py-4 shadow-lg"
          : "bg-transparent py-6 border-b border-white/5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-12 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <svg
                className="h-8 w-8 text-primary transition-transform group-hover:rotate-12 duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 5v11m0 0a3 3 0 100 6 3 3 0 000-6zm-4-4h8"
                />
              </svg>
              <span className="text-xl font-bold tracking-wider text-white uppercase bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
                MARIN<span className="text-primary font-light">SERVICE</span>
              </span>
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      isActive ? "text-primary border-b-2 border-primary pb-1" : "text-zinc-300"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* CTA Button */}
            <Link
              href="/teklif-al"
              className="inline-flex h-10 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-black transition-all hover:bg-white hover:scale-105 duration-300 glow-primary hover:shadow-[0_0_20px_rgba(0,229,255,0.7)]"
            >
              Teklif Al
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-zinc-400 hover:bg-white/5 hover:text-white focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Menüyü aç</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 border-t border-white/5 bg-navy-dark/95" : "max-h-0 opacity-0 pointer-events-none"
        }`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-4 py-4 sm:px-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-white/5 hover:text-primary ${
                  isActive ? "text-primary bg-white/5" : "text-zinc-300"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-4 border-t border-white/5 mt-2">
            <Link
              href="/teklif-al"
              onClick={() => setIsOpen(false)}
              className="flex w-full items-center justify-center rounded-full bg-primary py-3 text-center text-sm font-semibold text-black hover:bg-white transition-colors duration-300"
            >
              Teklif Al
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
