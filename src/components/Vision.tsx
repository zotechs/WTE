import React from 'react';
import { Lightbulb, Globe, Heart, TrendingUp } from 'lucide-react';

const Vision = () => {
  const articles = [
    {
      icon: Lightbulb,
      title: 'Notre Philosophie de Travail',
      date: '15 Janvier 2025',
      excerpt: 'Comment nous révolutionnons le développement logiciel en privilégiant le talent et la collaboration.',
      category: 'Philosophie',
      readTime: '5 min',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: TrendingUp,
      title: 'Le Système de Ceintures en IT',
      date: '10 Janvier 2025',
      excerpt: 'Découvrez notre approche unique d\'évaluation des compétences inspirée des arts martiaux.',
      category: 'Innovation',
      readTime: '7 min',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Heart,
      title: 'Impact Social en Afrique',
      date: '5 Janvier 2025',
      excerpt: 'Comment nos projets contribuent au développement technologique du continent africain.',
      category: 'Impact',
      readTime: '6 min',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Globe,
      title: 'L\'Avenir de l\'IT Mondial',
      date: '1 Janvier 2025',
      excerpt: 'Nos réflexions sur les tendances technologiques qui façonneront demain.',
      category: 'Tendances',
      readTime: '8 min',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const values = [
    {
      title: 'Excellence Technique',
      description: 'Nous visons toujours la perfection dans nos réalisations',
      icon: '🎯'
    },
    {
      title: 'Collaboration Globale',
      description: 'Unir les talents du monde entier pour créer ensemble',
      icon: '🌍'
    },
    {
      title: 'Innovation Continue',
      description: 'Rester à la pointe des technologies émergentes',
      icon: '🚀'
    },
    {
      title: 'Impact Positif',
      description: 'Contribuer au développement technologique mondial',
      icon: '💡'
    }
  ];

  return (
    <section id="vision" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Notre Vision & Actualités
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez notre philosophie, nos réflexions sur l'industrie IT 
            et notre vision pour l'avenir du développement technologique.
          </p>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Articles */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Derniers Articles & Réflexions
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {articles.map((article, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
              >
                <div className={`h-2 bg-gradient-to-r ${article.color}`}></div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                      {article.category}
                    </span>
                    <span className="text-sm text-gray-500">
                      {article.readTime}
                    </span>
                  </div>
                  
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${article.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <article.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {article.title}
                      </h4>
                      <p className="text-sm text-gray-500 mb-2">
                        {article.date}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  
                  <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors">
                    Lire la suite →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Restez informé de nos actualités
          </h3>
          <p className="mb-6 opacity-90">
            Recevez nos dernières réflexions et actualités directement dans votre boîte mail
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              S'abonner
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;