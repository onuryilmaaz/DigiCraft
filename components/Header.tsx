import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "Anasayfa", href: "/" },
  { name: "Hakkımda", href: "#about" },
  { name: "Projeler", href: "#projects" },
  { name: "Hizmetler", href: "#services" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 animate-slide-in-down
        ${
          scrolled
            ? "bg-white/80 shadow-xl backdrop-blur-2xl"
            : "bg-white/40 backdrop-blur border-b border-gray-200"
        }
      `}
      style={{
        background: scrolled
          ? "linear-gradient(90deg, rgba(139,92,246,0.12) 0%, rgba(236,72,153,0.12) 100%)"
          : "linear-gradient(90deg, rgba(139,92,246,0.07) 0%, rgba(236,72,153,0.07) 100%)",
        borderRadius: "0 0 1.5rem 1.5rem",
        boxShadow: scrolled
          ? "0 8px 32px 0 rgba(31, 38, 135, 0.15)"
          : "0 2px 8px 0 rgba(31, 38, 135, 0.07)",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 select-none group">
          <span className="inline-block">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="url(#paint0_linear)"
                fillOpacity="0.9"
              />
              <path
                d="M12 24L24 12"
                stroke="#fff"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="0"
                  y1="0"
                  x2="36"
                  y2="36"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#8B5CF6" />
                  <stop offset="1" stopColor="#EC4899" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="font-extrabold text-2xl tracking-tight bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg transition-transform group-hover:scale-105">
            Onur.dev
          </span>
        </Link>
        {/* Menü */}
        <nav className="hidden md:flex gap-4 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative px-2 py-1 font-semibold text-gray-700 transition-colors duration-300 hover:text-purple-600 focus:text-purple-700 group"
            >
              <span className="relative z-10">{link.name}</span>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
            </Link>
          ))}
        </nav>
        {/* Sağ Buton */}
        <div className="hidden md:block">
          <Link
            href="#contact"
            className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold shadow-xl border-2 border-white/30 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 relative"
            style={{
              boxShadow:
                "0 0 16px 2px rgba(236,72,153,0.18), 0 2px 8px 0 rgba(139,92,246,0.10)",
            }}
          >
            <span className="drop-shadow-lg">Teklif Al</span>
          </Link>
        </div>
        {/* Mobil Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-white/30 transition group"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menüyü Aç/Kapat"
        >
          <span
            className={`block w-6 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 mb-1 transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 mb-1 transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>
      {/* Mobil Menü */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 animate-fade-in-scale">
          <nav className="flex flex-col gap-2 bg-white/80 rounded-2xl shadow-xl p-4 mt-2 backdrop-blur-lg border border-gray-200">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-3 py-2 font-semibold text-gray-700 rounded-lg hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100 transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#contact"
              className="mt-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold shadow-lg border-2 border-white/30 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 text-center"
              onClick={() => setMenuOpen(false)}
            >
              Teklif Al
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
