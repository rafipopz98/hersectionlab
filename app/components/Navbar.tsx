// components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "How it Works", href: "#how-it-works" },
  { label: "Showcases", href: "#showcases" },
  { label: "Pricing", href: "#pricing" },
  { label: "Login", href: "#login" },
] as const;

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll detection for color changes
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Floating navbar container - adapts to scroll */}
          <div
            className={`rounded-full px-4 py-3 flex items-center justify-between transition-all duration-500 ${
              scrolled
                ? "bg-white/70 backdrop-blur-xl shadow-[0_2px_20px_rgba(0,0,0,0.08)]"
                : "bg-white/5 backdrop-blur-md"
            }`}
          >
            {/* Left: Logo/Brand */}
            <div className="flex items-center">
              <a href="/" className="flex items-center">
                <span
                  className={`text-base font-bold tracking-tight transition-colors duration-500 ${
                    scrolled ? "text-black" : "text-white"
                  }`}
                >
                  hersectionlab
                  <span
                    className={`transition-colors duration-500 ${
                      scrolled ? "text-black/60" : "text-white/60"
                    }`}
                  >
                    .in
                  </span>
                </span>
              </a>
            </div>

            {/* Center: Navigation – hidden on mobile */}
            <nav className="hidden md:flex items-center gap-0.5">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`rounded-full px-5 py-2 text-[14px] font-medium tracking-wide transition-all duration-300 ${
                    scrolled
                      ? "text-gray-700 hover:text-black hover:bg-black/5"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right: CTA + Mobile Menu Button */}
            <div className="flex items-center gap-2">
              <a
                href="#get-started"
                className={`hidden sm:inline-flex rounded-full px-6 py-2.5 text-[14px] font-semibold transition-all duration-300 hover:scale-105 ${
                  scrolled
                    ? "bg-black text-white hover:bg-gray-800"
                    : "bg-white text-black hover:bg-gray-100"
                }`}
              >
                Get Started
              </a>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`md:hidden rounded-full p-2.5 transition-all duration-300 ${
                  scrolled
                    ? "text-black hover:bg-black/5"
                    : "text-white hover:bg-white/10"
                }`}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Menu Panel - adapts to scroll state */}
          <div
            className={`absolute top-24 right-4 left-4 backdrop-blur-xl rounded-2xl shadow-2xl border p-4 animate-in slide-in-from-top-4 duration-300 ${
              scrolled
                ? "bg-white/95 border-gray-200/50"
                : "bg-black/90 border-white/10"
            }`}
          >
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-5 py-3.5 text-[16px] font-medium rounded-xl transition-all ${
                    scrolled
                      ? "text-gray-700 hover:text-black hover:bg-gray-50"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#get-started"
                onClick={() => setMobileMenuOpen(false)}
                className={`mt-3 px-5 py-3.5 text-[16px] font-semibold rounded-xl transition-all text-center ${
                  scrolled
                    ? "text-white bg-black hover:bg-gray-800"
                    : "text-black bg-white hover:bg-gray-100"
                }`}
              >
                Get Started
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
