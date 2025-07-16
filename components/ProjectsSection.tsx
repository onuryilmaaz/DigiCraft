import { Project } from "@/data/types";
import { ExternalLink, ArrowRight, Star, Users, TrendingUp } from "lucide-react";

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section
      id="projeler"
      className="py-20 bg-gradient-to-br from-gray-50 to-purple-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-purple-600 to-violet-600 text-white text-sm font-semibold rounded-full shadow-lg animate-pulse-glow">
              💼 Başarı Hikayeleri
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">Müşteri Çözümleri</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Müşterilerimizle birlikte hayata geçirdiğimiz başarılı SaaS projeleri
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group premium-card rounded-2xl overflow-hidden hover-lift animate-fade-in delay-${
                (index + 1) * 100
              } gpu-accelerated`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg flex items-center space-x-2 gpu-accelerated"
                  >
                    <span>Projeyi Gör</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-purple-600 to-violet-600 text-white text-xs font-semibold rounded-full shadow-lg">
                  Premium
                </div>

                <div className="absolute top-4 left-4 flex items-center space-x-1 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <Star className="w-3 h-3 text-yellow-400 fill-current" />
                  <span className="text-xs font-semibold text-gray-700">4.9</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex items-center space-x-1 text-xs text-gray-500">
                    <Users className="w-3 h-3" />
                    <span>2.5K</span>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2 text-xs text-green-600">
                    <TrendingUp className="w-3 h-3" />
                    <span>+24% büyüme</span>
                  </div>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-violet-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <a
                    href={project.link}
                    className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold transition-colors duration-300 text-sm group"
                  >
                    <span className="mr-1">Detayları Gör</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>

                  <div className="flex -space-x-1">
                    <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full border-2 border-white"></div>
                    <div className="w-6 h-6 bg-gradient-to-r from-violet-400 to-indigo-400 rounded-full border-2 border-white"></div>
                    <div className="w-6 h-6 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full border-2 border-white"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 animate-fade-in delay-600">
          <div className="premium-card rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Sizin Projeniz de Burada Olabilir!
            </h3>
            <p className="text-gray-600 mb-6">
              Hayalinizdeki SaaS uygulamasını birlikte geliştirelim
            </p>
            <a
              href="#iletisim"
              className="inline-flex items-center px-8 py-4 premium-button text-white font-semibold rounded-xl gpu-accelerated"
            >
              <span className="mr-2">Projenizi Başlatalım</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}