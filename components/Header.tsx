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
    
    setScrolled(currentScrollY > 80);
    setScrollProgress(progress);
    
    // Çok yumuşak auto-hide logic
    if (currentScrollY > lastScrollY && currentScrollY > 200) {
      setIsVisible(false);
    } else if (currentScrollY < lastScrollY - 20) {
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
      {/* Ultra soft backdrop */}
      {menuOpen && (
        <div 
          className="fixed inset-0 bg-black/5 backdrop-blur-sm z-40 lg:hidden transition-all duration-1000 ease-out"
          onClick={closeMenu}
        />
      )}

      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-1000 ease-out will-change-transform ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${
          scrolled
            ? "bg-white/85 backdrop-blur-2xl shadow-sm border-b border-sky-100/20"
            : "bg-white/70 backdrop-blur-xl"
        }`}
      >
        {/* Çok soft gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-sky-50/10 via-cyan-50/10 to-blue-50/10 opacity-0 hover:opacity-100 transition-opacity duration-1500 ease-out"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Ultra soft Logo */}
            <Link href="/" className="flex items-center space-x-3 group relative">
              <div className="relative">
                <div className="w-11 h-11 bg-gradient-to-br from-sky-400/80 via-cyan-500/80 to-blue-600/80 rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-sky-500/20 transition-all duration-1000 ease-out group-hover:scale-[1.02] group-hover:rotate-1 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-300/40 via-cyan-400/40 to-blue-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-out"></div>
                  
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-1000 ease-out">
                    <div className="absolute top-2 left-2 w-0.5 h-0.5 bg-white/60 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-2 right-2 w-0.5 h-0.5 bg-white/60 rounded-full animate-pulse delay-700"></div>
                  </div>
                  
                  <Sparkles className="w-5 h-5 text-white relative z-10 group-hover:rotate-3 transition-transform duration-1000 ease-out" />
                </div>
                
                <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-gradient-to-r from-cyan-400/70 to-sky-400/70 rounded-full animate-pulse shadow-sm">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-300/50 to-sky-300/50 rounded-full animate-ping"></div>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-br from-sky-400/20 via-cyan-500/20 to-blue-600/20 rounded-lg blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-1000 ease-out scale-110"></div>
              </div>
              
              <div className="flex flex-col">
                <span className="text-lg font-semibold bg-gradient-to-r from-sky-600/90 via-cyan-600/90 to-blue-700/90 bg-clip-text text-transparent group-hover:from-sky-500 group-hover:via-cyan-500 group-hover:to-blue-600 transition-all duration-1000 ease-out">
                  DigiCraft
                </span>
                <span className="text-xs text-gray-500/70 font-normal -mt-0.5 group-hover:text-sky-600/70 transition-colors duration-800 ease-out">
                  Digital Agency
                </span>
              </div>
            </Link>

            {/* Ultra soft Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative px-4 py-2 text-gray-700/80 font-normal hover:text-sky-600 transition-all duration-800 ease-out group overflow-hidden rounded-lg"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-sky-50/40 via-cyan-50/40 to-blue-50/40 opacity-0 group-hover:opacity-100 transition-all duration-800 ease-out scale-95 group-hover:scale-100 rounded-lg"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-sky-100/20 via-cyan-100/20 to-blue-100/20 opacity-0 group-hover:opacity-100 transition-all duration-1000 ease-out blur-sm"></div>
                  
                  <span className="relative z-10 group-hover:scale-[1.01] transition-transform duration-800 ease-out inline-block">
                    {link.name}
                  </span>
                  
                  <div className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-sky-500/60 via-cyan-500/60 to-blue-500/60 group-hover:w-6 group-hover:left-1/2 group-hover:-translate-x-1/2 transition-all duration-1000 ease-out rounded-full"></div>
                  
                  <div className="absolute inset-0 bg-gradient-to-r from-sky-400/5 via-cyan-400/5 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-out blur-lg rounded-lg"></div>
                </Link>
              ))}
            </nav>

            {/* Ultra soft CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                href="#iletisim"
                className="group relative px-5 py-2.5 bg-gradient-to-r from-sky-500/85 via-cyan-500/85 to-blue-600/85 text-white font-medium rounded-lg shadow-sm hover:shadow-sky-500/25 transition-all duration-1000 ease-out hover:scale-[1.01] overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-sky-400/70 via-cyan-400/70 to-blue-500/70 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-out"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-sky-600/90 via-cyan-600/90 to-blue-700/90 opacity-0 group-active:opacity-100 transition-opacity duration-300 ease-out"></div>
                
                <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer-ultra-soft"></div>
                
                <div className="relative flex items-center space-x-2">
                  <Zap className="w-4 h-4 group-hover:rotate-3 transition-transform duration-800 ease-out" />
                  <span>Teklif Al</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-800 ease-out" />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-r from-sky-500/30 via-cyan-500/30 to-blue-600/30 opacity-0 group-hover:opacity-40 transition-opacity duration-1000 ease-out blur-lg scale-105"></div>
              </Link>
            </div>

            {/* Ultra soft Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden relative w-10 h-10 bg-gradient-to-r from-sky-500/85 to-cyan-500/85 rounded-lg flex items-center justify-center text-white shadow-sm hover:shadow-sky-500/25 transition-all duration-800 ease-out hover:scale-[1.01] overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-sky-400/70 to-cyan-400/70 opacity-0 group-hover:opacity-100 transition-opacity duration-800 ease-out"></div>
              
              <div className="relative z-10 transition-transform duration-800 ease-out">
                {menuOpen ? (
                  <X className="w-5 h-5 rotate-0 group-hover:rotate-90 transition-transform duration-800 ease-out" />
                ) : (
                  <Menu className="w-5 h-5 group-hover:scale-[1.02] transition-transform duration-800 ease-out" />
                )}
              </div>
              
              <div className="absolute inset-0 bg-white/8 rounded-full scale-0 group-active:scale-100 transition-transform duration-500 ease-out"></div>
            </button>
          </div>

          {/* Ultra soft Mobile Menu */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-1000 ease-out ${
              menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="py-3 space-y-2">
              <div className="bg-white/60 backdrop-blur-xl rounded-xl p-3 border border-sky-100/30 shadow-sm">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={closeMenu}
                    className="block px-3 py-2.5 text-gray-700/80 font-normal hover:text-sky-600 hover:bg-white/40 rounded-lg transition-all duration-800 ease-out group relative overflow-hidden"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-sky-100/30 to-cyan-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-800 ease-out rounded-lg"></div>
                    
                    <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-800 ease-out inline-block">
                      {link.name}
                    </span>
                    
                    <ArrowRight className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-sky-500/50 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-800 ease-out" />
                  </Link>
                ))}
                
                <div className="pt-3 mt-3 border-t border-sky-200/20">
                  <Link
                    href="#iletisim"
                    onClick={closeMenu}
                    className="flex items-center justify-center space-x-2 w-full px-3 py-2.5 bg-gradient-to-r from-sky-500/85 via-cyan-500/85 to-blue-600/85 text-white font-medium rounded-lg shadow-sm hover:shadow-sky-500/25 transition-all duration-800 ease-out hover:scale-[1.01] group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-sky-400/70 via-cyan-400/70 to-blue-500/70 opacity-0 group-hover:opacity-100 transition-opacity duration-800 ease-out"></div>
                    
                    <div className="relative z-10 flex items-center space-x-2">
                      <Zap className="w-4 h-4 group-hover:rotate-3 transition-transform duration-800 ease-out" />
                      <span>Teklif Al</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-800 ease-out" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ultra soft Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-sky-200/20 via-cyan-200/20 to-blue-200/20">
          <div 
            className="h-full bg-gradient-to-r from-sky-500/80 via-cyan-500/80 to-blue-600/80 transition-all duration-500 ease-out shadow-sm"
            style={{ 
              width: `${scrollProgress * 100}%`,
              boxShadow: scrolled ? '0 0 10px rgba(14, 165, 233, 0.3)' : 'none'
            }}
          >
            <div className="h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer-ultra-soft"></div>
          </div>
        </div>

        {/* Soft floating particles */}
        {scrolled && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-4 left-1/4 w-0.5 h-0.5 bg-sky-400/40 rounded-full animate-float opacity-30"></div>
            <div className="absolute top-6 right-1/3 w-0.5 h-0.5 bg-cyan-400/40 rounded-full animate-float delay-500 opacity-30"></div>
            <div className="absolute top-8 left-2/3 w-0.5 h-0.5 bg-blue-400/40 rounded-full animate-float delay-1000 opacity-30"></div>
          </div>
        )}
      </header>
    </>
  );
}