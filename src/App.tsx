import React from 'react';
import { Tent, Recycle, Wind, Mountain, Weight, PenTool as Tool, ChevronDown } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1533240332313-0db49b459ad6?auto=format&fit=crop&q=80"
            alt="Paysage de montagne"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Le Paratante
            <span className="block text-2xl md:text-3xl mt-4 font-normal">
              La Première Tente-Sac à Dos Modulaire au Monde
            </span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mb-8">
            Née des voiles de parapente, conçue pour l'aventure. Un abri révolutionnaire qui se transforme d'un sac à dos en votre refuge dans la nature.
          </p>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full text-lg font-medium w-fit transition-all">
            Précommander Maintenant
          </button>
          
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">L'Innovation Rencontre la Durabilité</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Recycle className="w-8 h-8 text-emerald-600" />,
                title: "Conception Écologique",
                description: "Fabriquée à partir de voiles de parapente recyclées, donnant une nouvelle vie à des matériaux haute performance"
              },
              {
                icon: <Tool className="w-8 h-8 text-emerald-600" />,
                title: "Système Modulaire",
                description: "Se transforme facilement d'un sac à dos confortable en un abri robuste en quelques minutes"
              },
              {
                icon: <Weight className="w-8 h-8 text-emerald-600" />,
                title: "Ultra-Légère",
                description: "Conçue pour être 40% plus légère que les combinaisons tente-sac à dos traditionnelles"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm">
                {feature.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product Showcase */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1445308394109-4ec2920981b1?auto=format&fit=crop&q=80"
                alt="Tente dans la nature"
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Conçue pour l'Aventure</h2>
              <div className="space-y-6">
                {[
                  {
                    icon: <Mountain className="w-6 h-6 text-emerald-600" />,
                    title: "Adaptabilité Tout-Terrain",
                    description: "Base et structure spécialement conçues pour s'adapter à toutes les surfaces"
                  },
                  {
                    icon: <Wind className="w-6 h-6 text-emerald-600" />,
                    title: "Résistante aux Intempéries",
                    description: "Testée dans des conditions extrêmes, vous protégeant du vent, de la pluie et du soleil"
                  },
                  {
                    icon: <Tent className="w-6 h-6 text-emerald-600" />,
                    title: "Installation Rapide",
                    description: "Design révolutionnaire permettant une installation en moins de 3 minutes"
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="mt-1">{feature.icon}</div>
                    <div>
                      <h3 className="font-semibold text-lg">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-24 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Histoires d'Aventures</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "Le Paratante a révolutionné mon expérience de randonnée. Le design modulaire signifie que je suis toujours préparée sans le poids supplémentaire.",
                author: "Marie C.",
                title: "Randonneuse Professionnelle"
              },
              {
                quote: "En tant que parapentiste, j'adore que mes anciennes voiles soient transformées en quelque chose d'aussi innovant. C'est le mélange parfait entre durabilité et fonctionnalité.",
                author: "Cléa P.",
                title: "Instructeur de Parapente"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-stone-800 p-8 rounded-2xl">
                <p className="text-lg mb-6">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-emerald-400">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Faites Partie de la Révolution</h2>
          <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
            Rejoignez la liste d'attente pour être parmi les premiers lors du lancement de Le Paratante. Premier lot disponible en quantité limitée.
          </p>
          <div className="max-w-md mx-auto">
            <input
              type="email"
              placeholder="Entrez votre email"
              className="w-full px-6 py-4 rounded-full mb-4 text-gray-900"
            />
            <button className="bg-stone-900 hover:bg-stone-800 text-white px-8 py-4 rounded-full text-lg font-medium w-full transition-all">
              Rejoindre la Liste d'Attente
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
