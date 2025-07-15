import { Service } from '@/data/types';

interface ServicesSectionProps {
  services: Service[];
}

export default function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section id="hizmetler" className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-100 to-pink-100"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-scale">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold rounded-full">
              🚀 Hizmetlerimiz
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">Dijital Çözümlerimiz</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Modern teknolojiler ve yaratıcı yaklaşımlarla işletmenizi dijital dünyada öne çıkarıyoruz
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 hover-lift animate-slide-in-up delay-${(index + 1) * 100}`}
            >
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative text-center">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300 animate-float">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Hover Effect Button */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                    Detayları Gör
                  </button>
                </div>
              </div>

              {/* Corner Decoration */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-scale delay-500">
          <p className="text-gray-600 mb-6">Hangi hizmete ihtiyacınız var?</p>
          <a
            href="#iletisim"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-2xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-xl hover:shadow-purple-500/50 transform hover:scale-105"
          >
            <span className="mr-2">Ücretsiz Danışmanlık</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}