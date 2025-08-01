// src/components/Projects.jsx
import { projects } from '../data';

const Projects = () => {
  return (
    <section className="my-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2">
          🚀 Proyectos Destacados
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 overflow-hidden"
          >
            {/* Fondo animado */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Indicador de proyecto */}
            <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
              {index + 1}
            </div>

            <div className="relative z-10">
              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-green-100 to-blue-100 text-green-800 rounded-full text-sm font-semibold">
                  {project.period}
                </span>
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
        ))}
      </div>
    </section>
  );
};

export default Projects;