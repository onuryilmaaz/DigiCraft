import { AboutData } from '@/data/types';
import { Users, Zap, Target, Award, Shield, Clock, CheckCircle } from 'lucide-react';

interface AboutSectionProps {
  data: AboutData;
}

export default function AboutSection({ data }: AboutSectionProps) {
  return (
    <section id="hakkimizda" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-slide-in-left">
            <div className="inline-block">
              <span className="px-4 py-2 bg-gradient-to-r from-purple-600 to-violet-600 text-white text-sm font-semibold rounded-full shadow-lg animate-pulse-glow flex items-center">
                <Users className="w-4 h-4 mr-2" /> Hakkımızda
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
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white hover-lift gpu-accelerated">
                <div className="text-3xl font-bold mb-2">99.9%</div>
                <div className="text-purple-100">Uptime Garantisi</div>
                <div className="text-xs text-purple-200 mt-1">Kesintisiz hizmet</div>
              </div>
              
              <div className="bg-gradient-to-br from-violet-500 to-violet-600 rounded-2xl p-6 text-white hover-lift gpu-accelerated">
                <div className="text-3xl font-bold mb-2">50K+</div>
                <div className="text-violet-100">Aktif Kullanıcı</div>
                <div className="text-xs text-violet-200 mt-1">Güvenilir platform</div>
              </div>
              
              <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl p-6 text-white hover-lift gpu-accelerated">
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-indigo-100">Teknik Destek</div>
                <div className="text-xs text-indigo-200 mt-1">Her zaman yanınızda</div>
              </div>
              
              <div className="bg-gradient-to-br from-slate-500 to-slate-600 rounded-2xl p-6 text-white hover-lift gpu-accelerated">
                <div className="text-3xl font-bold mb-2">8+</div>
                <div className="text-slate-100">Yıl Deneyim</div>
                <div className="text-xs text-slate-200 mt-1">SaaS uzmanlığı</div>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700 font-medium">Enterprise Güvenlik</span>
                <CheckCircle className="w-4 h-4 text-green-500" />
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-violet-500 to-violet-600 rounded-full flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700 font-medium">Yüksek Performans</span>
                <CheckCircle className="w-4 h-4 text-green-500" />
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center">
                  <Clock className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700 font-medium">Hızlı Implementasyon</span>
                <CheckCircle className="w-4 h-4 text-green-500" />
              </div>
            </div>
          </div>
          
          <div className="relative animate-slide-in-right">
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-purple-400 to-violet-400 rounded-3xl animate-float opacity-60"></div>
            <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-r from-violet-400 to-indigo-400 rounded-2xl animate-float delay-300 opacity-60"></div>
            <div className="absolute -bottom-4 -left-2 w-20 h-20 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full animate-float delay-500 opacity-60"></div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl hover-lift gpu-accelerated">
              <img
                src={data.image}
                alt={data.imageAlt}
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
                  <div className="flex items-center space-x-4">
                    <div className="flex -space-x-2">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full border-2 border-white"></div>
                      <div className="w-10 h-10 bg-gradient-to-r from-violet-400 to-violet-500 rounded-full border-2 border-white"></div>
                      <div className="w-10 h-10 bg-gradient-to-r from-indigo-400 to-indigo-500 rounded-full border-2 border-white"></div>
                    </div>
                    <div>
                      <h3 className="text-gray-900 font-bold text-lg">Expert Team</h3>
                      <p className="text-gray-600 text-sm">SaaS development specialists</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-purple-100 max-w-xs">
              <div className="text-2xl text-purple-500 mb-2">"</div>
              <p className="text-sm text-gray-600 italic">Müşteri başarısı bizim önceliğimiz</p>
              <div className="text-right text-2xl text-purple-500 -mt-2">"</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}