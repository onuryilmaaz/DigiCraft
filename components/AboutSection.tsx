import { AboutData } from '@/data/types';

interface AboutSectionProps {
  data: AboutData;
}

export default function AboutSection({ data }: AboutSectionProps) {
  return (
    <section id="hakkimizda" className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-50 to-pink-50 opacity-30"></div>
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float delay-300"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-slide-in-left">
            <div className="inline-block">
              <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold rounded-full">
                👥 Hakkımızda
              </span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              <span className="gradient-text">{data.title}</span>
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              {data.content}
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 text-white hover-lift">
                <div className="text-3xl font-bold mb-2 animate-text-glow">8+</div>
                <div className="text-purple-100">Yıl Deneyim</div>
                <div className="text-xs text-purple-200 mt-1">Sektörde uzman ekip</div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl p-6 text-white hover-lift">
                <div className="text-3xl font-bold mb-2 animate-text-glow">150+</div>
                <div className="text-blue-100">Tamamlanan Proje</div>
                <div className="text-xs text-blue-200 mt-1">Başarılı işbirlikleri</div>
              </div>
              
              <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl p-6 text-white hover-lift">
                <div className="text-3xl font-bold mb-2 animate-text-glow">100%</div>
                <div className="text-green-100">Müşteri Memnuniyeti</div>
                <div className="text-xs text-green-200 mt-1">Kalite garantisi</div>
              </div>
              
              <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-6 text-white hover-lift">
                <div className="text-3xl font-bold mb-2 animate-text-glow">24/7</div>
                <div className="text-orange-100">Destek Hizmeti</div>
                <div className="text-xs text-orange-200 mt-1">Kesintisiz hizmet</div>
              </div>
            </div>

            {/* Team Values */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✨</span>
                </div>
                <span className="text-gray-700 font-medium">Yaratıcılık ve İnovasyon</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">🎯</span>
                </div>
                <span className="text-gray-700 font-medium">Sonuç Odaklı Yaklaşım</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">🤝</span>
                </div>
                <span className="text-gray-700 font-medium">Güvenilir Ortaklık</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-slide-in-right">
            {/* Floating Elements */}
            <div className="absolute -top-8 -left-8 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl animate-float opacity-80"></div>
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl animate-float delay-300 opacity-80"></div>
            <div className="absolute -bottom-8 -left-4 w-24 h-24 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full animate-float delay-500 opacity-80"></div>
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl hover-lift">
              <img
                src={data.image}
                alt={data.imageAlt}
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 via-transparent to-transparent"></div>
              
              {/* Overlay Content */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <div className="flex items-center space-x-4">
                    <div className="flex -space-x-2">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full border-2 border-white"></div>
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full border-2 border-white"></div>
                      <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full border-2 border-white"></div>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">Uzman Ekibimiz</h3>
                      <p className="text-gray-200 text-sm">Deneyimli profesyonellerle çalışıyoruz</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Quote */}
            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 max-w-xs">
              <div className="text-2xl text-purple-500 mb-2">"</div>
              <p className="text-sm text-gray-600 italic">Müşterilerimizin başarısı bizim başarımızdır</p>
              <div className="text-right text-2xl text-purple-500 -mt-2">"</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}