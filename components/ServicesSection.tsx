import { Service } from '@/data/types';
import { Rocket, BarChart3, Paintbrush, Share2, ArrowRight } from 'lucide-react';

const iconMap = {
  Rocket: Rocket,
  BarChart3: BarChart3,
  Paintbrush: Paintbrush,
  Share2: Share2,
};

interface ServicesSectionProps {
  services: Service[];
}

export default function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section id="hizmetler" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-purple-600 to-violet-600 text-white text-sm font-semibold rounded-full shadow-lg animate-pulse-glow">
              🚀 Özellikler
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">Premium SaaS Özellikleri</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            İşletmenizi dijital dünyada öne çıkaracak gelişmiş özellikler ve araçlar
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <div
                key={service.id}
                className={`group premium-card rounded-2xl p-8 hover-lift animate-fade-in delay-${(index + 1) * 100} gpu-accelerated`}
              >
                <div className="relative text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-violet-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 gpu-accelerated">
                    <Icon className="w-8 h-8 text-purple-600" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <button className="inline-flex items-center px-6 py-2 premium-button text-white rounded-xl text-sm font-semibold">
                      <span className="mr-2">Daha Fazla</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16 animate-fade-in delay-500">
          <div className="premium-card rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Tüm özellikleri keşfetmek ister misiniz?
            </h3>
            <p className="text-gray-600 mb-6">
              Premium özelliklerimizi ücretsiz deneyebilirsiniz
            </p>
            <a
              href="#iletisim"
              className="inline-flex items-center px-8 py-4 premium-button text-white font-semibold rounded-xl gpu-accelerated"
            >
              <span className="mr-2">Ücretsiz Demo</span>
              <Rocket className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}