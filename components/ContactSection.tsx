import React from "react";
import { ContactData } from '@/data/types';
import { Mail, Phone, MapPin, MessageCircle, Calendar, Headphones } from 'lucide-react';

interface ContactSectionProps {
  data: ContactData;
}

export default function ContactSection({ data }: ContactSectionProps) {
  return (
    <section id="iletisim" className="py-20 bg-gradient-to-br from-purple-900 via-violet-900 to-indigo-900 relative overflow-hidden gpu-accelerated">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-violet-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float delay-200"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float delay-400"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-violet-500 text-white text-sm font-semibold rounded-full animate-pulse-glow flex items-center">
              <Mail className="w-4 h-4 mr-2" /> İletişim
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            {data.title}
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Premium SaaS çözümleriniz için hemen iletişime geçin. Uzman ekibimiz size özel çözümler geliştirecek.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="group bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-800 hover-lift animate-fade-in delay-100 gpu-accelerated">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-600">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 text-center">E-posta</h3>
            <p className="text-gray-200 text-center">
              <a href={`mailto:${data.email}`} className="hover:text-purple-300 transition-colors duration-600 break-all">
                {data.email}
              </a>
            </p>
            <div className="mt-4 text-center">
              <span className="text-sm text-gray-300">2 saat içinde yanıt</span>
            </div>
          </div>
          
          <div className="group bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-800 hover-lift animate-fade-in delay-200 gpu-accelerated">
            <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-600">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 text-center">Telefon</h3>
            <p className="text-gray-200 text-center">
              <a href={`tel:${data.phone}`} className="hover:text-violet-300 transition-colors duration-600">
                {data.phone}
              </a>
            </p>
            <div className="mt-4 text-center">
              <span className="text-sm text-gray-300">Anında görüşme</span>
            </div>
          </div>
          
          <div className="group bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-800 hover-lift animate-fade-in delay-300 gpu-accelerated">
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-600">
              <MapPin className="w-8 h-8 text-white" />
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
        <div className="text-center animate-fade-in delay-400">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-6">Premium SaaS Çözümünüzü Konuşalım!</h3>
            <p className="text-gray-200 mb-8 text-lg">
              Ücretsiz danışmanlık ve demo için hemen iletişime geçin. Size özel SaaS çözümler geliştirelim.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href={`mailto:${data.email}`}
                className="group inline-flex items-center justify-center px-8 py-4 premium-button text-white font-bold rounded-2xl gpu-accelerated"
              >
                <Mail className="w-5 h-5 mr-2 group-hover:rotate-3 transition-transform duration-600" />
                <span>E-posta Gönder</span>
              </a>
              
              <a
                href={`tel:${data.phone}`}
                className="inline-flex items-center justify-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-2xl border-2 border-white/30 hover:bg-white/30 transition-all duration-800 hover-lift gpu-accelerated"
              >
                <Phone className="w-5 h-5 mr-2" />
                <span>Hemen Ara</span>
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div className="text-sm text-gray-300">Hızlı Yanıt</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div className="text-sm text-gray-300">Demo Randevusu</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Headphones className="w-6 h-6 text-white" />
                </div>
                <div className="text-sm text-gray-300">24/7 Destek</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div className="text-sm text-gray-300">Özel Çözüm</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}