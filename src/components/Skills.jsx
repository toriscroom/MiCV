// src/components/Skills.jsx
import { skills } from '../data';

const SkillCategory = ({ title, items, emoji, gradient, delay = 0 }) => (
  <div
    className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-100"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="flex items-center mb-6">
      <div className={`w-12 h-12 ${gradient} rounded-xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
        {emoji}
      </div>
      <h3 className="text-xl font-bold text-gray-900 ml-4 group-hover:text-blue-600 transition-colors duration-300">
        {title}
      </h3>
    </div>

    <div className="flex flex-wrap gap-3">
      {items.map((skill, index) => (
        <span
          key={skill}
          className="group/skill relative px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 rounded-xl text-sm font-medium hover:from-blue-100 hover:to-purple-100 hover:text-blue-800 transform hover:scale-105 transition-all duration-300 cursor-default overflow-hidden"
          style={{ animationDelay: `${(delay + index * 100)}ms` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover/skill:opacity-20 transition-opacity duration-300"></div>
          <span className="relative z-10">{skill}</span>
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <section className="my-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
          🛠️ Habilidades Técnicas y Competencias
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <SkillCategory
          title="Lenguajes"
          items={skills.languages}
          emoji="💻"
          gradient="bg-gradient-to-br from-blue-400 to-blue-600"
          delay={0}
        />
        <SkillCategory
          title="Frameworks"
          items={skills.frameworks}
          emoji="⚡"
          gradient="bg-gradient-to-br from-green-400 to-green-600"
          delay={100}
        />
        <SkillCategory
          title="Bases de Datos"
          items={skills.databases}
          emoji="🗄️"
          gradient="bg-gradient-to-br from-purple-400 to-purple-600"
          delay={200}
        />
        <SkillCategory
          title="Herramientas"
          items={skills.otherTools}
          emoji="🔧"
          gradient="bg-gradient-to-br from-orange-400 to-orange-600"
          delay={300}
        />
        <div className="md:col-span-2 xl:col-span-1">
          <SkillCategory
            title="Competencias"
            items={skills.softSkills}
            emoji="🎯"
            gradient="bg-gradient-to-br from-pink-400 to-pink-600"
            delay={400}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;