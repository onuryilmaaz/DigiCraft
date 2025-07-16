import { ReactNode } from "react";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="relative">{children}</main>
      <footer className="bg-gradient-to-r from-purple-900 via-pink-900 to-fuchsia-900 text-white py-16 relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/15 to-pink-900/15"></div>
          <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-float"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-float delay-300"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                DigiCraft Ajans
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Dijital dünyada fark yaratan projeler üretiyoruz. Modern
                teknolojiler ve yaratıcı yaklaşımlarla işletmenizi geleceğe
                taşıyoruz.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-600 gpu-accelerated"
                >
                  <span className="text-white text-sm">f</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gradient-to-r from-pink-500 to-fuchsia-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-600 gpu-accelerated"
                >
                  <span className="text-white text-sm">t</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gradient-to-r from-fuchsia-500 to-purple-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-600 gpu-accelerated"
                >
                  <span className="text-white text-sm">i</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-600 gpu-accelerated"
                >
                  <span className="text-white text-sm">in</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">
                Hızlı Linkler
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#hizmetler"
                    className="text-gray-300 hover:text-fuchsia-400 transition-colors duration-600"
                  >
                    Hizmetlerimiz
                  </a>
                </li>
                <li>
                  <a
                    href="#projeler"
                    className="text-gray-300 hover:text-fuchsia-400 transition-colors duration-600"
                  >
                    Projelerimiz
                  </a>
                </li>
                <li>
                  <a
                    href="#hakkimizda"
                    className="text-gray-300 hover:text-fuchsia-400 transition-colors duration-600"
                  >
                    Hakkımızda
                  </a>
                </li>
                <li>
                  <a
                    href="#iletisim"
                    className="text-gray-300 hover:text-fuchsia-400 transition-colors duration-600"
                  >
                    İletişim
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">
                Hizmetler
              </h4>
              <ul className="space-y-2">
                <li>
                  <span className="text-gray-300">Web Tasarım</span>
                </li>
                <li>
                  <span className="text-gray-300">SEO Optimizasyonu</span>
                </li>
                <li>
                  <span className="text-gray-300">Logo Tasarım</span>
                </li>
                <li>
                  <span className="text-gray-300">Sosyal Medya</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} DigiCraft Ajans. Tüm hakları
                saklıdır.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a
                  href="#"
                  className="text-gray-400 hover:text-fuchsia-400 text-sm transition-colors duration-600"
                >
                  Gizlilik Politikası
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-fuchsia-400 text-sm transition-colors duration-600"
                >
                  Kullanım Şartları
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-fuchsia-400 text-sm transition-colors duration-600"
                >
                  Çerez Politikası
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
