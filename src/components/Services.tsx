import React from 'react';
import { Code, Brain, Cloud, Shield, Settings, TrendingUp } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Développement Web / Mobile',
      description: 'Applications web et mobiles modernes avec les dernières technologies',
      features: ['React, Vue, Angular', 'React Native, Flutter', 'Node.js, Python, Java', 'API REST & GraphQL'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Brain,
      title: 'Intelligence Artificielle',
      description: 'Solutions IA personnalisées pour automatiser et optimiser vos processus',
      features: ['Machine Learning', 'Deep Learning', 'NLP & Computer Vision', 'Data Analytics'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Infrastructure cloud scalable et processus de déploiement automatisés',
      features: ['AWS, Azure, GCP', 'Docker & Kubernetes', 'CI/CD Pipelines', 'Monitoring & Logging'],
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Shield,
      title: 'Cybersécurité',
      description: 'Protection complète de vos systèmes et données sensibles',
      features: ['Audit de sécurité', 'Pentesting', 'Conformité RGPD', 'Formation équipes'],
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Settings,
      title: 'Conseil IT & Stratégie',
      description: 'Accompagnement stratégique pour votre transformation digitale',
      features: ['Architecture système', 'Roadmap technique', 'Optimisation processus', 'Formation équipes'],
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: TrendingUp,
      title: 'Maintenance & Évolution',
      description: 'Support continu et amélioration de vos solutions existantes',
      features: ['Support 24/7', 'Monitoring proactif', 'Mises à jour sécurité', 'Optimisation performance'],
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nos Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des solutions technologiques complètes pour accompagner votre croissance, 
            de la conception à la maintenance, avec une expertise mondiale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="mt-6 w-full py-3 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 font-semibold rounded-xl hover:from-blue-50 hover:to-purple-50 hover:text-blue-700 transition-all duration-200">
                En savoir plus
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;