// src/components/Profile.jsx
import { profile } from '../data';

const Profile = () => {
  return (
    <section className="relative text-center my-10 overflow-hidden">
      {/* Fondo animado con gradientes */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-3xl transform -rotate-1 scale-105 opacity-50"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-green-50 via-blue-50 to-purple-50 rounded-3xl transform rotate-1 scale-105 opacity-30"></div>

      <div className="relative z-10 p-8">
        {/* Avatar placeholder con gradiente */}
        <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-2xl transform hover:scale-110 transition-transform duration-300 animate-pulse">
          {profile.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
        </div>

        <div className="space-y-4 mb-8">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent animate-fade-in">
            {profile.name}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-medium animate-slide-up">
            {profile.title}
          </p>
          <div className="flex justify-center">
            <span className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-400 to-blue-500 text-white rounded-full text-sm font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              📍 {profile.location}
            </span>
          </div>
        </div>

        <div className="relative">
          <p className="my-8 max-w-4xl mx-auto text-gray-700 leading-relaxed text-lg md:text-xl bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
            {profile.summary}
          </p>
        </div>

        <div className="flex justify-center space-x-4 flex-wrap gap-y-4">
          <a
            href={`mailto:${profile.mail}`}
            className="group relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            <span className="relative z-10">📧 Email</span>
          </a>
          <a
            href={profile.linkedin}
            className="group relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            <span className="relative z-10">💼 LinkedIn</span>
          </a>
          <a
            href={profile.github}
            className="group relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-900 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            <span className="relative z-10">🚀 GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Profile;