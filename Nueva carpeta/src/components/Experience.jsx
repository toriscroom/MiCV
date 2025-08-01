// src/components/Experience.jsx
import { experience } from '../data';

const Experience = () => {
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
            className="group relative bg-white border-2 border-transparent rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
            style={{
              background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #667eea 0%, #764ba2 100%) border-box'
            }}
          >
            {/* Número de experiencia */}
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
              {index + 1}
            </div>

            {/* Efecto de brillo en hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

            <div className="relative z-10">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {job.role}
                </h3>
                <div className="flex items-center space-x-2 text-gray-600">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {job.company}
                  </span>
                  <span className="text-sm">•</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                    {job.period}
                  </span>
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                <p className="text-gray-700 leading-relaxed text-lg pl-6 group-hover:text-gray-900 transition-colors duration-300">
                  {job.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;