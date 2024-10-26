import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center hero-pattern overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="glass-card rounded-2xl p-8 md:p-12">
          <div className="text-center">
            <div className="mb-8 flex justify-center">
              <div className="relative w-48 h-48">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full animate-pulse"></div>
                <img
                  src="/profile.jpg"
                  alt="Edumis Viera Martin"
                  className="absolute inset-1 w-[calc(100%-8px)] h-[calc(100%-8px)] object-cover rounded-full"
                />
              </div>
            </div>
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Edumis Viera Martin</span>
              <span className="block text-2xl sm:text-3xl md:text-4xl mt-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">PhD Candidate in Electronic Engineering</span>
            </h1>
            <p className="mt-6 max-w-md mx-auto text-lg text-gray-600 sm:text-xl md:max-w-3xl">
              Advancing research in Neural Networks and Fractional Calculus at Centro Nacional de Investigación y Desarrollo Tecnológico
            </p>
            <div className="mt-8 flex justify-center space-x-6">
              <a href="https://scholar.google.com/citations?user=3vmSLY0AAAAJ&hl=es" className="transform hover:scale-110 transition-transform duration-200">
                <div className="p-3 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 text-white hover:shadow-lg">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/>
                  </svg>
                </div>
              </a>
              <a href="mailto:cenidet.edu.mx" className="transform hover:scale-110 transition-transform duration-200">
                <div className="p-3 rounded-full bg-gradient-to-br from-red-500 to-red-700 text-white hover:shadow-lg">
                  <Mail className="h-6 w-6" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}