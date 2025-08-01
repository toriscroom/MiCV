// src/components/Experience.jsx
import { experience } from '../data';
import { useState } from 'react';

const Experience = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const getExperienceIcon = (company) => {
    if (company.toLowerCase().includes('universidad') || company.toLowerCase().includes('uct')) return '🎓';
    if (company.toLowerCase().includes('seguros') || company.toLowerCase().includes('liberty')) return '🛡️';
    if (company.toLowerCase().includes('chilena') || company.toLowerCase().includes('consolidada')) return '📋';
    return '💼';
  };

  const getExperienceDuration = (period) => {
    if (period.includes('2024 - Presente')) return 'Actual';
    if (period.includes('2019')) return '1 año';
    if (period.includes('2017') && period.includes('2018')) return '3 meses';
    return period;
  };
  return (
    <section className="my-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
          💼 Experiencia Profesional
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
      </div>

      <div className="space-y-8">
        {experience.map((job, index) => (
          <div
            key={job.id}
            className="group relative bg-white border-2 border-transparent rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden cursor-pointer"
            style={{
              background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #667eea 0%, #764ba2 100%) border-box'
            }}
            onClick={() => toggleCard(job.id)}
          >
            {/* Icono de empresa */}
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
              {getExperienceIcon(job.company)}
            </div>

            {/* Indicador de expansión */}
            <div className="absolute top-4 right-4 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors duration-300">
              <span className={`transform transition-transform duration-300 ${expandedCard === job.id ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </div>

            {/* Efecto de brillo en hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

            <div className="relative z-10">
              <div className="mb-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {job.role}
                    </h3>
                    <div className="flex items-center space-x-2 text-gray-600 mb-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                        {job.company}
                      </span>
                      <span className="text-sm">•</span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                        {getExperienceDuration(job.period)}
                      </span>
                    </div>
                    <div className="text-sm text-gray-500 font-medium">
                      📅 {job.period}
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                <div className={`pl-6 transition-all duration-500 ${expandedCard === job.id ? 'max-h-96 opacity-100' : 'max-h-20 opacity-75'} overflow-hidden`}>
                  <p className="text-gray-700 leading-relaxed text-lg group-hover:text-gray-900 transition-colors duration-300">
                    {job.description}
                  </p>

                  {expandedCard === job.id && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-blue-50 rounded-lg p-3">
                          <div className="text-sm font-semibold text-blue-800 mb-1">💡 Logros principales</div>
                          <div className="text-sm text-blue-700">
                            {job.company.includes('Universidad') && 'Sistema NAS implementado con éxito'}
                            {job.company.includes('Liberty') && 'Optimización de procesos con Excel'}
                            {job.company.includes('Chilena') && 'Organización de producción de seguros'}
                          </div>
                        </div>
                        <div className="bg-green-50 rounded-lg p-3">
                          <div className="text-sm font-semibold text-green-800 mb-1">🎯 Impacto</div>
                          <div className="text-sm text-green-700">
                            {job.company.includes('Universidad') && 'Mejora en disponibilidad de datos'}
                            {job.company.includes('Liberty') && 'Mayor eficiencia del equipo'}
                            {job.company.includes('Chilena') && 'Optimización de entradas al sistema'}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;