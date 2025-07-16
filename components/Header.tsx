"use client";

import Link from "next/link";
import { useEffect, useState, useCallback, useRef } from "react";
import { Menu, X, Sparkles, ArrowRight, Zap } from "lucide-react";

const navLinks = [
  { name: "Anasayfa", href: "/" },
  { name: "Özellikler", href: "#hizmetler" },
  { name: "Çözümler", href: "#projeler" },
  { name: "Hakkımızda", href: "#hakkimizda" },
  { name: "İletişim", href: "#iletisim" },
];

export default function Header() {
  const [scrollState, setScrollState] = useState({
    scrolled: false,
    scrollProgress: 0,
    isVisible: true,
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  const handleScroll = useCallback(() => {
    if (typeof window === "undefined") return;
    const currentScrollY = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = Math.min(currentScrollY / scrollHeight, 1);
    
    let isVisible = scrollState.isVisible;
    if (currentScrollY > lastScrollY.current && currentScrollY > 200) {
      isVisible = false;
    } else if (currentScrollY < lastScrollY.current - 20) {
      isVisible = true;
    }
    
    lastScrollY.current = currentScrollY;
    setScrollState({
      scrolled: currentScrollY > 80,
      scrollProgress: progress,
      isVisible,
    });
  }, [scrollState.isVisible]);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [handleScroll]);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  return (
    <>
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={closeMenu}
        />
      )}

      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrollState.isVisible ? "translate-y-0" : "-translate-y-full"
        } ${
          scrollState.scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-purple-100/50"
            : "bg-white/90 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-violet-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300 group-hover:scale-105 gpu-accelerated">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                  SaasCraft
                </span>
                <span className="text-xs text-gray-500 -mt-1">Premium Solutions</span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 text-gray-600 hover:text-purple-600 font-medium transition-colors duration-300 rounded-lg hover:bg-purple-50"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center space-x-4">
              <Link
                href="#iletisim"
                className="px-6 py-2.5 premium-button text-white font-semibold rounded-xl gpu-accelerated"
              >
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4" />
                  <span>Demo Al</span>
                </div>
              </Link>
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-300"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ${
              menuOpen ? "max-h-80 opacity-100 pb-4" : "max-h-0 opacity-0"
            }`}
          >
            <div className="bg-white rounded-xl border border-purple-100 p-4 mt-2 shadow-lg">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className="block px-4 py-3 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 mt-4 border-t border-purple-100">
                <Link
                  href="#iletisim"
                  onClick={closeMenu}
                  className="flex items-center justify-center space-x-2 w-full px-4 py-3 premium-button text-white font-semibold rounded-lg"
                >
                  <Zap className="w-4 h-4" />
                  <span>Demo Al</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-200">
          <div
            className="h-full bg-gradient-to-r from-purple-600 to-violet-600 transition-all duration-300"
            style={{ width: `${scrollState.scrollProgress * 100}%` }}
          />
        </div>
      </header>
    </>
  );
}