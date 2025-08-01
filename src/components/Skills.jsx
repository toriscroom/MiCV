// src/components/Skills.jsx
import { skills } from '../data';
import { useState, useEffect, useRef } from 'react';

const SkillCategory = ({ title, items, emoji, gradient, delay = 0, onSkillClick }) => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const categoryRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (categoryRef.current) {
      observer.observe(categoryRef.current);
    }

    return () => {
      if (categoryRef.current) {
        observer.unobserve(categoryRef.current);
      }
    };
  }, []);

  const getSkillLevel = (skill) => {
    const expertSkills = ['JavaScript', 'React', 'HTML/CSS', 'Git'];
    const advancedSkills = ['Python', 'Node.js', 'MySQL', 'Scrum'];
    const intermediateSkills = ['MongoDB', 'Express', 'Flutter', 'OpenCV'];
    
    if (expertSkills.includes(skill)) return { level: 'Experto', width: '90%', color: 'bg-green-500' };
    if (advancedSkills.includes(skill)) return { level: 'Avanzado', width: '75%', color: 'bg-blue-500' };
    if (intermediateSkills.includes(skill)) return { level: 'Intermedio', width: '60%', color: 'bg-yellow-500' };
    return { level: 'Básico', width: '40%', color: 'bg-gray-500' };
  };

  return (
    <div
      ref={categoryRef}
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

      <div className="space-y-3">
        {items.map((skill, index) => {
          const skillInfo = getSkillLevel(skill);
          return (
            <div
              key={skill}
              className="group/item p-3 bg-gray-50 rounded-xl hover:bg-blue-50 transition-all duration-300 cursor-pointer"
              style={{ animationDelay: `${delay + index * 50}ms` }}
              onMouseEnter={() => setHoveredSkill(skill)}
              onMouseLeave={() => setHoveredSkill(null)}
              onClick={() => onSkillClick && onSkillClick(skill)}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-700 font-medium group-hover/item:text-blue-600 transition-colors duration-300">
                  {skill}
                </span>
                <span className={`text-xs px-2 py-1 rounded-full text-white ${skillInfo.color}`}>
                  {skillInfo.level}
                </span>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <div
                  className={`h-full ${skillInfo.color} transition-all duration-1500 ease-out`}
                  style={{
                    width: isVisible ? skillInfo.width : '0%',
                    transitionDelay: isVisible ? `${(delay + index * 200)}ms` : '0ms',
                    transform: hoveredSkill === skill ? 'scaleY(1.2)' : 'scaleY(1)',
                    transformOrigin: 'center'
                  }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [sectionVisible, setSectionVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
    setShowDetails(true);
  };

  const getSkillDetails = (skill) => {
    const skillDetails = {
      'JavaScript': { experience: '3+ años', projects: 'SEGUGESTION, Pulmahue, Radio App', description: 'Desarrollo frontend y backend con ES6+' },
      'React': { experience: '2+ años', projects: 'Múltiples proyectos web', description: 'Desarrollo de SPAs y componentes reutilizables' },
      'Python': { experience: '2+ años', projects: 'Análisis de datos, scripts', description: 'Automatización y análisis de datos' },
      'OpenCV': { experience: '1 año', projects: 'Detector de Billetes', description: 'Procesamiento de imágenes y visión artificial' },
      'Git': { experience: '3+ años', projects: 'Todos los proyectos', description: 'Control de versiones y colaboración' },
      'MySQL': { experience: '2+ años', projects: 'Pulmahue, SEGUGESTION', description: 'Diseño y optimización de bases de datos' }
    };
    return skillDetails[skill] || { experience: 'En desarrollo', projects: 'Varios', description: 'Aprendizaje continuo' };
  };

  return (
    <section ref={sectionRef} className="my-12">
      <div className={`text-center mb-10 transition-all duration-1000 ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
          🛠️ Habilidades Técnicas y Competencias
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-6"></div>
        
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 transition-all duration-1000 ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border border-blue-200 hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
            <div className="text-2xl font-bold text-blue-600">8+</div>
            <div className="text-sm text-blue-700">Lenguajes y Frameworks</div>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 border border-green-200 hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
            <div className="text-2xl font-bold text-green-600">3+</div>
            <div className="text-sm text-green-700">Bases de Datos</div>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 border border-purple-200 hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
            <div className="text-2xl font-bold text-purple-600">5+</div>
            <div className="text-sm text-purple-700">Herramientas</div>
          </div>
          <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg p-4 border border-pink-200 hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
            <div className="text-2xl font-bold text-pink-600">4+</div>
            <div className="text-sm text-pink-700">Soft Skills</div>
          </div>
        </div>
      </div>

      <div className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 transition-all duration-1000 ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '400ms' }}>
        <SkillCategory
          title="Lenguajes"
          items={skills.languages}
          emoji="💻"
          gradient="bg-gradient-to-br from-blue-400 to-blue-600"
          delay={0}
          onSkillClick={handleSkillClick}
        />
        <SkillCategory
          title="Frameworks"
          items={skills.frameworks}
          emoji="⚡"
          gradient="bg-gradient-to-br from-green-400 to-green-600"
          delay={100}
          onSkillClick={handleSkillClick}
        />
        <SkillCategory
          title="Bases de Datos"
          items={skills.databases}
          emoji="🗄️"
          gradient="bg-gradient-to-br from-purple-400 to-purple-600"
          delay={200}
          onSkillClick={handleSkillClick}
        />
        <SkillCategory
          title="Herramientas"
          items={skills.otherTools}
          emoji="🔧"
          gradient="bg-gradient-to-br from-orange-400 to-orange-600"
          delay={300}
          onSkillClick={handleSkillClick}
        />
        <div className="md:col-span-2 xl:col-span-1">
          <SkillCategory
            title="Competencias"
            items={skills.softSkills}
            emoji="🎯"
            gradient="bg-gradient-to-br from-pink-400 to-pink-600"
            delay={400}
            onSkillClick={handleSkillClick}
          />
        </div>
      </div>

      {showDetails && selectedSkill && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl transform transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">{selectedSkill}</h3>
              <button
                onClick={() => setShowDetails(false)}
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-200"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <span className="font-semibold text-gray-700">📅 Experiencia:</span>
                <p className="text-gray-600 mt-1">{getSkillDetails(selectedSkill).experience}</p>
              </div>

              <div>
                <span className="font-semibold text-gray-700">🚀 Proyectos:</span>
                <p className="text-gray-600 mt-1">{getSkillDetails(selectedSkill).projects}</p>
              </div>

              <div>
                <span className="font-semibold text-gray-700">💡 Descripción:</span>
                <p className="text-gray-600 mt-1">{getSkillDetails(selectedSkill).description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Skills;
