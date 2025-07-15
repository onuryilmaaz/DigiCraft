import React from "react";
import { ContactData } from '@/data/types';

interface ContactSectionProps {
  data: ContactData;
}

export default function ContactSection({ data }: ContactSectionProps) {
  return (
    <section id="iletisim" className="py-20 bg-gradient-to-br from-sky-900 via-cyan-900 to-blue-900 relative overflow-hidden gpu-accelerated">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-sky-500 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-float delay-200"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-float delay-400"></div>
      </div>

      {/* Scrolling Text Background */}
      <div className="absolute top-1/4 left-0 w-full overflow-hidden opacity-5">
        <div className="scrolling-text text-4xl font-bold text-white whitespace-nowrap">
          İLETİŞİM • DANIŞMANLIK • PROJE • İŞBİRLİĞİ • ÇÖZÜM •
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-scale">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-sky-500 to-cyan-500 text-white text-sm font-semibold rounded-full animate-pulse-glow">
              📞 İletişim
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 animate-text-glow">
            {data.title}
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Dijital dönüşüm yolculuğunuza bugün başlayın. Hayalinizdeki projeyi birlikte hayata geçirelim.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="group bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-800 hover-lift animate-slide-in-up delay-100 gpu-accelerated">
            <div className="w-16 h-16 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-600">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4 text-center">E-posta</h3>
            <p className="text-gray-200 text-center">
              <a href={`mailto:${data.email}`} className="hover:text-sky-300 transition-colors duration-600 break-all">
                {data.email}
              </a>
            </p>
            <div className="mt-4 text-center">
              <span className="text-sm text-gray-300">7/24 yanıtlıyoruz</span>
            </div>
          </div>
          
          <div className="group bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-800 hover-lift animate-slide-in-up delay-200 gpu-accelerated">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-600">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4 text-center">Telefon</h3>
            <p className="text-gray-200 text-center">
              <a href={`tel:${data.phone}`} className="hover:text-cyan-300 transition-colors duration-600">
                {data.phone}
              </a>
            </p>
            <div className="mt-4 text-center">
              <span className="text-sm text-gray-300">Anında görüşme</span>
            </div>
          </div>
          
          <div className="group bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-800 hover-lift animate-slide-in-up delay-300 gpu-accelerated">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-600">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4 text-center">Adres</h3>
            <p className="text-gray-200 text-center text-sm leading-relaxed">
              {data.address}
            </p>
            <div className="mt-4 text-center">
              <span className="text-sm text-gray-300">Ofis ziyareti</span>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in-scale delay-400">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-6">Projenizi Konuşalım!</h3>
            <p className="text-gray-200 mb-8 text-lg">
              Ücretsiz danışmanlık için hemen iletişime geçin. Size özel çözümler geliştirelim.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${data.email}`}
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-sky-600 to-cyan-600 text-white font-bold rounded-2xl hover:from-sky-700 hover:to-cyan-700 transition-all duration-800 shadow-2xl hover:shadow-sky-500/30 hover-lift animate-pulse-glow gpu-accelerated"
              >
                <svg className="w-5 h-5 mr-2 group-hover:rotate-3 transition-transform duration-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>E-posta Gönder</span>
              </a>
              
              <a
                href={`tel:${data.phone}`}
                className="inline-flex items-center justify-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-2xl border-2 border-white/30 hover:bg-white/30 transition-all duration-800 hover-lift gpu-accelerated"
              >
                <svg className="w-5 h-5 mr-2 group-hover:rotate-3 transition-transform duration-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Hemen Ara</span>
              </a>
            </div>

            <div className="mt-8 flex items-center justify-center space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">⚡</div>
                <div className="text-sm text-gray-300">Hızlı Yanıt</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">🎯</div>
                <div className="text-sm text-gray-300">Özel Çözüm</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">🚀</div>
                <div className="text-sm text-gray-300">Hızlı Başlangıç</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
