// src/components/Projects.jsx
import { projects } from '../data';
import { useState } from 'react';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const getProjectStatus = (period) => {
    if (period.includes('desarrollo') || period.includes('2025')) {
      return { status: 'En desarrollo', color: 'bg-yellow-500', textColor: 'text-yellow-800' };
    } else if (period.includes('Freelance')) {
      return { status: 'Completado', color: 'bg-green-500', textColor: 'text-green-800' };
    } else {
      return { status: 'Finalizado', color: 'bg-blue-500', textColor: 'text-blue-800' };
    }
  };

  const getProjectCategory = (technologies) => {
    if (technologies.some(tech => tech.includes('OpenCV') || tech.includes('Accesibilidad'))) return 'AI/Accesibilidad';
    if (technologies.some(tech => tech.includes('React Native'))) return 'Mobile';
    if (technologies.some(tech => tech.includes('React') && !tech.includes('Native'))) return 'Web';
    if (technologies.some(tech => tech.includes('RAID') || tech.includes('OpenMediaVault'))) return 'Infraestructura';
    return 'Otros';
  };

  const categories = ['all', 'Web', 'Mobile', 'AI/Accesibilidad', 'Infraestructura'];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => getProjectCategory(project.technologies) === filter);

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'Web': return '🌐';
      case 'Mobile': return '📱';
      case 'AI/Accesibilidad': return '🤖';
      case 'Infraestructura': return '🏗️';
      default: return '💼';
    }
  };
  return (
    <section className="my-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2">
          🚀 Proyectos Destacados
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full mb-6"></div>

        {/* Filtros de categoría */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 border border-gray-300 hover:border-blue-400 hover:text-blue-600'
              }`}
            >
              {category === 'all' ? '🌟 Todos' : `${getCategoryIcon(category)} ${category}`}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredProjects.map((project, index) => {
          const status = getProjectStatus(project.period);
          const category = getProjectCategory(project.technologies);

          return (
            <div
              key={project.id}
              className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 overflow-hidden"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Fondo animado */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Status badge */}
              <div className={`absolute top-4 right-4 px-3 py-1 ${status.color} text-white rounded-full text-xs font-bold shadow-lg`}>
                {status.status}
              </div>

              {/* Categoría */}
              <div className="absolute top-4 left-4 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                {getCategoryIcon(category)} {category}
              </div>

              <div className="relative z-10 mt-8">
                <div className="mb-6">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="inline-block px-4 py-2 bg-gradient-to-r from-green-100 to-blue-100 text-green-800 rounded-full text-sm font-semibold">
                      📅 {project.period}
                    </span>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6 group-hover:text-gray-900 transition-colors duration-300">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm rounded-full font-medium hover:from-blue-200 hover:to-purple-200 transform hover:scale-105 transition-all duration-300 cursor-default"
                      style={{
                        animationDelay: `${techIndex * 100}ms`
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Información adicional en hover */}
                {hoveredProject === project.id && (
                  <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200 animate-fade-in">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                      <div>
                        <span className="font-semibold text-blue-800">🎯 Objetivo:</span>
                        <p className="text-blue-700 mt-1">
                          {project.title.includes('Billetes') && 'Mejorar accesibilidad para personas con baja visión'}
                          {project.title.includes('NAS') && 'Garantizar redundancia y seguridad de datos'}
                          {project.title.includes('SEGUGESTION') && 'Optimizar procesos financieros'}
                          {project.title.includes('Pulmahue') && 'Digitalizar catálogo de productos'}
                          {project.title.includes('Radio') && 'Streaming optimizado y accesible'}
                        </p>
                      </div>
                      <div>
                        <span className="font-semibold text-purple-800">💡 Innovación:</span>
                        <p className="text-purple-700 mt-1">
                          {project.title.includes('Billetes') && 'Uso de IA para reconocimiento visual'}
                          {project.title.includes('NAS') && 'Configuración RAID avanzada'}
                          {project.title.includes('SEGUGESTION') && 'Reducción del 80% en tiempos'}
                          {project.title.includes('Pulmahue') && 'Stack MERN completo'}
                          {project.title.includes('Radio') && 'Enfoque en accesibilidad'}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {project.link && (
                  <a
                    href={project.link}
                    className="group/link inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 transform scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left"></div>
                    <span className="relative z-10 flex items-center">
                      🔗 Ver proyecto
                      <svg className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </span>
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;