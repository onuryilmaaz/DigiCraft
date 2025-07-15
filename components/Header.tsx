'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Sparkles, ArrowRight } from "lucide-react";

const navLinks = [
  { name: "Anasayfa", href: "/" },
  { name: "Hizmetler", href: "#hizmetler" },
  { name: "Projeler", href: "#projeler" },
  { name: "Hakkımızda", href: "#hakkimizda" },
  { name: "İletişim", href: "#iletisim" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-out animate-slide-in-down ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-2xl border-b border-sky-100/50"
          : "bg-white/80 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-sky-500 via-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-sky-500/30 transition-all duration-300 group-hover:scale-105">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-cyan-400 to-sky-400 rounded-full animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black bg-gradient-to-r from-sky-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent">
                DigiCraft
              </span>
              <span className="text-xs text-gray-500 font-medium -mt-1">Digital Agency</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 text-gray-700 font-medium hover:text-sky-600 transition-all duration-300 group"
              >
                <span className="relative z-10">{link.name}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-sky-50 to-cyan-50 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100"></div>
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-sky-500 to-cyan-500 group-hover:w-8 group-hover:left-1/2 group-hover:-translate-x-1/2 transition-all duration-300 rounded-full"></div>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="#iletisim"
              className="group relative px-6 py-3 bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-sky-500/40 transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center space-x-2">
                <span>Teklif Al</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden relative w-10 h-10 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-xl flex items-center justify-center text-white shadow-lg hover:shadow-sky-500/40 transition-all duration-300 hover:scale-105"
          >
            {menuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-2">
            <div className="bg-gradient-to-r from-sky-50 via-cyan-50 to-blue-50 rounded-2xl p-4 border border-sky-100">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-3 text-gray-700 font-medium hover:text-sky-600 hover:bg-white/80 rounded-xl transition-all duration-300"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 mt-4 border-t border-sky-200">
                <Link
                  href="#iletisim"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center space-x-2 w-full px-4 py-3 bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-sky-500/40 transition-all duration-300"
                >
                  <span>Teklif Al</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-600 opacity-0 transition-opacity duration-300" 
           style={{ 
             opacity: scrolled ? 1 : 0,
             transform: `scaleX(${Math.min(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight), 1)})`,
             transformOrigin: 'left'
           }}>
      </div>
    </header>
  );
}