import { HeroData } from "@/data/types";
import { ArrowRight, Play, Star } from "lucide-react";

interface HeroSectionProps {
  data: HeroData;
}

export default function HeroSection({ data }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-purple-50 to-violet-50">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-violet-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float delay-200"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float delay-400"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="px-4 py-2 bg-gradient-to-r from-purple-600 to-violet-600 text-white text-sm font-semibold rounded-full shadow-lg animate-pulse-glow">
                  ✨ Premium SaaS Çözümleri
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                <span className="gradient-text">{data.headline}</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                {data.subtitle}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={data.ctaLink}
                className="inline-flex items-center justify-center px-8 py-4 premium-button text-white font-semibold rounded-xl gpu-accelerated"
              >
                <span className="mr-2">{data.ctaText}</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#hizmetler"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-700 font-semibold rounded-xl border border-purple-200 hover:bg-purple-50 hover:border-purple-300 transition-all duration-300 hover-lift"
              >
                <Play className="w-4 h-4 mr-2" />
                Demo İzle
              </a>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">99.9%</div>
                <div className="text-gray-500 text-sm">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">50K+</div>
                <div className="text-gray-500 text-sm">Kullanıcı</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">24/7</div>
                <div className="text-gray-500 text-sm">Destek</div>
              </div>
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-4 pt-4">
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-8 h-8 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full border-2 border-white"></div>
                ))}
              </div>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
                <span className="text-sm text-gray-600 ml-2">4.9/5 (2,847 değerlendirme)</span>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-in-right">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-400 to-violet-400 rounded-2xl animate-float opacity-60"></div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-violet-400 to-indigo-400 rounded-xl animate-float delay-300 opacity-60"></div>
              <div className="absolute -bottom-4 -left-2 w-16 h-16 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-3xl animate-float delay-500 opacity-60"></div>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl hover-lift bg-white gpu-accelerated">
                <img
                  src={data.heroImage}
                  alt={data.heroImageAlt}
                  className="w-full h-96 lg:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-transparent"></div>

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-gray-900 font-bold text-lg">
                        Premium Dashboard
                      </h3>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-xs text-gray-500">Live</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">
                      Gelişmiş analitik ve raporlama araçları
                    </p>
                    <div className="flex items-center space-x-2">
                      <div className="flex -space-x-1">
                        <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full border border-white"></div>
                        <div className="w-6 h-6 bg-gradient-to-r from-violet-400 to-indigo-400 rounded-full border border-white"></div>
                        <div className="w-6 h-6 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full border border-white"></div>
                      </div>
                      <span className="text-xs text-gray-500">+12 aktif kullanıcı</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}