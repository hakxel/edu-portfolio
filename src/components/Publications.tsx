export default function Publications() {
  const publications = [
    {
      title: "Artificial neural networks: a practical review of applications involving fractional calculus",
      journal: "The European Physical Journal Special Topics",
      year: "2022",
      authors: "E Viera-Martin, JF Gómez-Aguilar, JE Solís-Pérez, JA Hernández-Pérez, RF Escobar-Jiménez",
      link: "https://doi.org/10.1140/epjs/s11734-022-00675-7",
      image: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?auto=format&fit=crop&w=300&q=80"
    },
    {
      title: "Anti-synchronization of a M-Hopfield neural network with generalized hyperbolic tangent activation function",
      journal: "The European Physical Journal Special Topics",
      year: "2022",
      authors: "E Viera-Martin, JF Gómez-Aguilar, JE Solís-Pérez, JA Hernández-Pérez, VH Olivares-Peregrino",
      link: "https://doi.org/10.1140/epjs/s11734-022-00675-7",
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=300&q=80"
    },
    {
      title: "Global optimization algorithms applied to solve a multi-variable inverse artificial neural network to improve the performance of an absorption heat transformer with energy recycling",
      journal: "Applied Soft Computing",
      year: "2019",
      authors: "JE Solís-Pérez, JF Gómez-Aguilar, JA Hernández, RF Escobar-Jiménez, E Viera-Martin",
      link: "https://doi.org/10.1016/j.asoc.2019.105801",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=300&q=80"
    }
  ];

  return (
    <section id="publications" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50 hero-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
          Selected Publications
        </h2>
        <div className="mt-12 space-y-8">
          {publications.map((pub, index) => (
            <div key={index} className="group">
              <div className="glass-card rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="md:flex">
                  <div className="md:flex-shrink-0">
                    <img className="h-48 w-full object-cover md:w-48" src={pub.image} alt="" />
                  </div>
                  <div className="p-8">
                    <a href={pub.link} className="block mt-1">
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {pub.title}
                      </h3>
                    </a>
                    <p className="mt-3 text-gray-600">{pub.authors}</p>
                    <div className="mt-3 flex items-center text-sm text-gray-500">
                      <span className="font-medium text-indigo-600">{pub.journal}</span>
                      <span className="mx-2">•</span>
                      <span>{pub.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}