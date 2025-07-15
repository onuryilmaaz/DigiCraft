'use client';

import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import { Menu, X, Sparkles, ArrowRight, Zap } from "lucide-react";

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
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    if (typeof window === 'undefined') return;
    
    const currentScrollY = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = Math.min(currentScrollY / scrollHeight, 1);
    
    setScrolled(currentScrollY > 20);
    setScrollProgress(progress);
    
    // Auto-hide header on scroll down, show on scroll up
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

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
      {/* Backdrop blur overlay when menu is open */}
      {menuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden animate-fade-in"
          onClick={closeMenu}
        />
      )}

      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${
          scrolled
            ? "bg-white/90 backdrop-blur-2xl shadow-2xl border-b border-sky-100/50"
            : "bg-white/70 backdrop-blur-xl"
        }`}
      >
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/5 via-cyan-500/5 to-blue-500/5 opacity-0 hover:opacity-100 transition-opacity duration-700"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Premium Logo */}
            <Link href="/" className="flex items-center space-x-3 group relative">
              <div className="relative">
                {/* Main logo container */}
                <div className="w-14 h-14 bg-gradient-to-br from-sky-400 via-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-sky-500/40 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 relative overflow-hidden">
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-300 via-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Sparkle effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-2 left-2 w-1 h-1 bg-white rounded-full animate-ping"></div>
                    <div className="absolute bottom-2 right-2 w-1 h-1 bg-white rounded-full animate-ping delay-300"></div>
                  </div>
                  
                  <Sparkles className="w-7 h-7 text-white relative z-10 group-hover:rotate-12 transition-transform duration-500" />
                </div>
                
                {/* Floating indicator */}
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-cyan-400 to-sky-400 rounded-full animate-pulse shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-sky-300 rounded-full animate-ping"></div>
                </div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-sky-400 via-cyan-500 to-blue-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 scale-150"></div>
              </div>
              
              <div className="flex flex-col">
                <span className="text-2xl font-black bg-gradient-to-r from-sky-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent group-hover:from-sky-500 group-hover:via-cyan-500 group-hover:to-blue-600 transition-all duration-500">
                  DigiCraft
                </span>
                <span className="text-xs text-gray-500 font-medium -mt-1 group-hover:text-sky-600 transition-colors duration-300">
                  Digital Agency
                </span>
              </div>
            </Link>

            {/* Premium Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative px-5 py-3 text-gray-700 font-semibold hover:text-sky-600 transition-all duration-300 group overflow-hidden rounded-xl"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Background effects */}
                  <div className="absolute inset-0 bg-gradient-to-r from-sky-50 via-cyan-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100 rounded-xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-sky-100/50 via-cyan-100/50 to-blue-100/50 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"></div>
                  
                  {/* Text */}
                  <span className="relative z-10 group-hover:scale-105 transition-transform duration-300 inline-block">
                    {link.name}
                  </span>
                  
                  {/* Animated underline */}
                  <div className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500 group-hover:w-10 group-hover:left-1/2 group-hover:-translate-x-1/2 transition-all duration-400 rounded-full"></div>
                  
                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-sky-400/20 via-cyan-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl rounded-xl"></div>
                </Link>
              ))}
            </nav>

            {/* Premium CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                href="#iletisim"
                className="group relative px-8 py-4 bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-600 text-white font-bold rounded-2xl shadow-xl hover:shadow-sky-500/50 transition-all duration-500 hover:scale-105 overflow-hidden"
              >
                {/* Animated background layers */}
                <div className="absolute inset-0 bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-sky-600 via-cyan-600 to-blue-700 opacity-0 group-active:opacity-100 transition-opacity duration-150"></div>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer"></div>
                
                {/* Content */}
                <div className="relative flex items-center space-x-2">
                  <Zap className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                  <span>Teklif Al</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-600 opacity-0 group-hover:opacity-50 transition-opacity duration-500 blur-xl scale-150"></div>
              </Link>
            </div>

            {/* Premium Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden relative w-12 h-12 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white shadow-xl hover:shadow-sky-500/50 transition-all duration-300 hover:scale-105 overflow-hidden group"
            >
              {/* Background animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Icon with smooth transition */}
              <div className="relative z-10 transition-transform duration-300">
                {menuOpen ? (
                  <X className="w-6 h-6 rotate-0 group-hover:rotate-90 transition-transform duration-300" />
                ) : (
                  <Menu className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                )}
              </div>
              
              {/* Ripple effect */}
              <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-active:scale-100 transition-transform duration-200"></div>
            </button>
          </div>

          {/* Premium Mobile Menu */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-700 ease-out ${
              menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="py-6 space-y-3">
              <div className="bg-gradient-to-br from-sky-50/80 via-cyan-50/80 to-blue-50/80 backdrop-blur-xl rounded-3xl p-6 border border-sky-100/50 shadow-2xl">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={closeMenu}
                    className="block px-6 py-4 text-gray-700 font-semibold hover:text-sky-600 hover:bg-white/60 rounded-2xl transition-all duration-300 group relative overflow-hidden"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Hover background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-sky-100/50 to-cyan-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                    
                    {/* Text */}
                    <span className="relative z-10 group-hover:translate-x-2 transition-transform duration-300 inline-block">
                      {link.name}
                    </span>
                    
                    {/* Arrow indicator */}
                    <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-sky-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                  </Link>
                ))}
                
                <div className="pt-6 mt-6 border-t border-sky-200/50">
                  <Link
                    href="#iletisim"
                    onClick={closeMenu}
                    className="flex items-center justify-center space-x-3 w-full px-6 py-4 bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-600 text-white font-bold rounded-2xl shadow-xl hover:shadow-sky-500/50 transition-all duration-300 hover:scale-105 group relative overflow-hidden"
                  >
                    {/* Background animation */}
                    <div className="absolute inset-0 bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Content */}
                    <div className="relative z-10 flex items-center space-x-2">
                      <Zap className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                      <span>Teklif Al</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Premium Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-200/30 via-cyan-200/30 to-blue-200/30">
          <div 
            className="h-full bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-600 transition-all duration-300 ease-out shadow-lg"
            style={{ 
              width: `${scrollProgress * 100}%`,
              boxShadow: scrolled ? '0 0 20px rgba(14, 165, 233, 0.5)' : 'none'
            }}
          >
            {/* Animated shine effect */}
            <div className="h-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
          </div>
        </div>

        {/* Floating particles effect */}
        {scrolled && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-4 left-1/4 w-1 h-1 bg-sky-400 rounded-full animate-float opacity-60"></div>
            <div className="absolute top-6 right-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-float delay-300 opacity-60"></div>
            <div className="absolute top-8 left-2/3 w-1 h-1 bg-blue-400 rounded-full animate-float delay-500 opacity-60"></div>
          </div>
        )}
      </header>
    </>
  );
}