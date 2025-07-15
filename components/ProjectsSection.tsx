import { Project } from '@/data/types';

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projeler" className="py-20 bg-gradient-to-br from-gray-50 to-sky-50 relative overflow-hidden gpu-accelerated">
      {/* Animated Background Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-r from-sky-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-8 animate-float"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-8 animate-float delay-300"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-scale">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-sky-500 to-cyan-500 text-white text-sm font-semibold rounded-full">
              💼 Portföyümüz
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">Başarılı Projelerimiz</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Müşterilerimizle birlikte hayata geçirdiğimiz dijital projeler ve başarı hikayeleri
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-800 hover-lift animate-slide-in-up delay-${(index + 1) * 200} gpu-accelerated`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-800 gpu-accelerated"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-600"></div>
                
                {/* Hover Content */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-600">
                  <a
                    href={project.link}
                    className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-all duration-600 hover-lift gpu-accelerated"
                  >
                    Projeyi İncele
                  </a>
                </div>

                {/* Corner Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-sky-500 to-cyan-500 text-white text-xs font-semibold rounded-full">
                  Yeni
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-sky-600 transition-colors duration-600">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <a
                    href={project.link}
                    className="inline-flex items-center text-sky-600 hover:text-sky-700 font-semibold transition-colors duration-600 group"
                  >
                    <span className="mr-2">Detayları Gör</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                  
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-sky-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-100"></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-200"></div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-sky-400 to-cyan-400 rounded-full opacity-15 group-hover:opacity-30 transition-opacity duration-600 animate-float"></div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 animate-fade-in-scale delay-600">
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Sizin Projeniz de Burada Olabilir!</h3>
            <p className="text-gray-600 mb-6">Hayalinizdeki projeyi birlikte hayata geçirelim</p>
            <a
              href="#iletisim"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-sky-600 to-cyan-600 text-white font-bold rounded-2xl hover:from-sky-700 hover:to-cyan-700 transition-all duration-800 shadow-xl hover:shadow-sky-500/30 hover-lift gpu-accelerated"
            >
              <span className="mr-2">Projenizi Başlatalım</span>
              <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}