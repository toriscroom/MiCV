// src/App.jsx - Versión con Tailwind CSS mejorada
import Profile from './components/Profile'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-400/20 to-blue-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto py-8 px-4">
        {/* Componentes principales */}
        <div className="space-y-16">
          <Profile />
          <Experience />
          <Projects />
          <Skills />
        </div>

        {/* Footer decorativo */}
        <footer className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-white/60 backdrop-blur-sm rounded-full border border-white/20 shadow-lg">
            <span className="text-gray-600">Hecho con</span>
            <span className="text-red-500 animate-pulse">❤️</span>
            <span className="text-gray-600">y</span>
            <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Tailwind CSS</span>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App