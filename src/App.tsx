import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Research from './components/Research';
import Publications from './components/Publications';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Research />
        <Publications />
        <Contact />
      </main>
      <footer className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500">© 2024 Edumis Viera Martin. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;