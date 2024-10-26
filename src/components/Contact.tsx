import { Mail, MapPin, Building2 } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 hero-pattern"></div>
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute bottom-1/4 -left-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Interested in collaboration or have questions about my research?
          </p>
        </div>
        
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="group">
            <div className="glass-card h-full p-8 rounded-2xl text-center transform hover:scale-105 transition-all duration-300">
              <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-blue-500 to-blue-600">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-gray-900">Email</h3>
              <p className="mt-2 text-gray-600">cenidet.edu.mx</p>
            </div>
          </div>
          
          <div className="group">
            <div className="glass-card h-full p-8 rounded-2xl text-center transform hover:scale-105 transition-all duration-300">
              <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-purple-500 to-purple-600">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-gray-900">Institution</h3>
              <p className="mt-2 text-gray-600">Centro Nacional de Investigación y Desarrollo Tecnológico</p>
            </div>
          </div>
          
          <div className="group">
            <div className="glass-card h-full p-8 rounded-2xl text-center transform hover:scale-105 transition-all duration-300">
              <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-pink-500 to-pink-600">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-gray-900">Location</h3>
              <p className="mt-2 text-gray-600">Mexico</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}