import { HeroData } from "@/data/types";

interface HeroSectionProps {
  data: HeroData;
}

export default function HeroSection({ data }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-900 via-pink-900 to-fuchsia-900 animate-gradient gpu-accelerated">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-float delay-200"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-float delay-400"></div>
      </div>

      <div className="absolute top-1/4 left-0 w-full overflow-hidden opacity-5">
        <div className="scrolling-text text-6xl font-bold text-white whitespace-nowrap">
          DİJİTAL DÖNÜŞÜM • WEB TASARIM • SEO • MARKA KİMLİĞİ • SOSYAL MEDYA •
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold rounded-full animate-pulse-glow">
                  ✨ Premium Dijital Çözümler
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight animate-text-glow">
                {data.headline}
              </h1>

              <p className="text-xl sm:text-2xl text-gray-200 leading-relaxed max-w-2xl">
                {data.subtitle}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href={data.ctaLink}
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-2xl hover:from-purple-700 hover:to-pink-700 transition-all duration-800 shadow-2xl hover:shadow-fuchsia-500/30 hover-lift animate-pulse-glow gpu-accelerated"
              >
                <span className="mr-2">{data.ctaText}</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>

              <a
                href="#hizmetler"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-2xl border-2 border-white/20 hover:bg-white/20 transition-all duration-800 hover-lift gpu-accelerated"
              >
                Hizmetlerimiz
              </a>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white gradient-text">
                  8+
                </div>
                <div className="text-gray-300 text-sm">Yıl Deneyim</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white gradient-text">
                  150+
                </div>
                <div className="text-gray-300 text-sm">Proje</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white gradient-text">
                  100%
                </div>
                <div className="text-gray-300 text-sm">Memnuniyet</div>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-in-right">
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-500 rounded-2xl animate-float opacity-60"></div>
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-fuchsia-400 to-pink-500 rounded-full animate-float delay-300 opacity-60"></div>
              <div className="absolute -bottom-8 -left-4 w-20 h-20 bg-gradient-to-r from-purple-400 to-fuchsia-500 rounded-3xl animate-float delay-500 opacity-60"></div>

              <div className="relative rounded-3xl overflow-hidden shadow-2xl hover-lift">
                <img
                  src={data.heroImage}
                  alt={data.heroImageAlt}
                  className="w-full h-96 lg:h-[600px] object-cover gpu-accelerated"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 via-transparent to-transparent"></div>

                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                    <h3 className="text-white font-bold text-lg mb-2">
                      Yaratıcı Ekibimiz
                    </h3>
                    <p className="text-gray-200 text-sm">
                      Dijital dünyada fark yaratan projeler üretiyoruz
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
