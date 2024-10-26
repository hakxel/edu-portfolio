import { Brain, Calculator, LineChart } from 'lucide-react';

export default function Research() {
  const areas = [
    {
      icon: <Brain className="h-8 w-8 text-white" />,
      title: "Neural Networks",
      description: "Research on artificial neural networks with applications in fractional calculus and complex systems.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Calculator className="h-8 w-8 text-white" />,
      title: "Fractional Calculus",
      description: "Applications of fractional calculus in neural networks for system stabilization and optimization.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <LineChart className="h-8 w-8 text-white" />,
      title: "Optimization Algorithms",
      description: "Development of global optimization algorithms for multi-variable inverse artificial neural networks.",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="research" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 hero-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Research Focus
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Exploring the intersection of neural networks and fractional calculus
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {areas.map((area, index) => (
            <div key={index} className="group hover:scale-105 transition-transform duration-300">
              <div className={`h-full p-8 rounded-2xl bg-gradient-to-br ${area.gradient} shadow-xl`}>
                <div className="flex justify-center">
                  <div className="p-4 bg-white/20 rounded-full backdrop-blur-sm">
                    {area.icon}
                  </div>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white text-center">{area.title}</h3>
                <p className="mt-4 text-white/90 text-center">{area.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}