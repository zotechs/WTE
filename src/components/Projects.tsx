import React from 'react';
import { ExternalLink, MapPin, Calendar, Users } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Plateforme E-commerce Globale',
      category: 'E-commerce',
      location: 'Europe',
      duration: '8 mois',
      team: '6 développeurs',
      description: 'Développement d\'une plateforme e-commerce multi-pays avec IA pour recommandations personnalisées.',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'TensorFlow'],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      results: ['500% d\'augmentation des ventes', '2M+ utilisateurs actifs', '99.9% de disponibilité']
    },
    {
      title: 'Application Fintech Mobile',
      category: 'Finance',
      location: 'Afrique de l\'Ouest',
      duration: '6 mois',
      team: '4 développeurs',
      description: 'Application mobile de paiement et transfert d\'argent pour les marchés émergents.',
      technologies: ['React Native', 'Python', 'PostgreSQL', 'Blockchain'],
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=600',
      results: ['1M+ téléchargements', '50K transactions/jour', 'Expansion dans 5 pays']
    },
    {
      title: 'Système IoT Industriel',
      category: 'IoT',
      location: 'Asie',
      duration: '12 mois',
      team: '8 développeurs',
      description: 'Plateforme IoT pour monitoring et optimisation de chaînes de production industrielles.',
      technologies: ['Vue.js', 'Python', 'InfluxDB', 'Docker', 'Kubernetes'],
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=600',
      results: ['30% d\'économies énergétiques', '10K+ capteurs connectés', '24/7 monitoring']
    },
    {
      title: 'Plateforme EdTech IA',
      category: 'Éducation',
      location: 'Amérique du Nord',
      duration: '10 mois',
      team: '7 développeurs',
      description: 'Plateforme d\'apprentissage adaptatif utilisant l\'IA pour personnaliser les parcours éducatifs.',
      technologies: ['Angular', 'Django', 'PostgreSQL', 'TensorFlow', 'GCP'],
      image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=600',
      results: ['100K+ étudiants', '85% de taux de réussite', '40+ institutions partenaires']
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'CTO, TechCorp Europe',
      content: 'World Talent Expertise a transformé notre vision en réalité. Leur expertise technique et leur approche collaborative ont dépassé nos attentes.',
      avatar: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      name: 'Ahmed Hassan',
      role: 'CEO, FinanceAfrica',
      content: 'Grâce à WTE, nous avons pu lancer notre application dans 5 pays en un temps record. Leur compréhension des marchés locaux est exceptionnelle.',
      avatar: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=100'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nos Projets & Références
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez quelques-unes de nos réalisations qui illustrent notre expertise 
            et notre capacité à livrer des solutions innovantes à travers le monde.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-700">
                  {project.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {project.location}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {project.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {project.team}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="space-y-2 mb-4">
                  <h4 className="font-semibold text-gray-900">Résultats clés :</h4>
                  <ul className="space-y-1">
                    {project.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="text-sm text-gray-600 flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors">
                  Voir le cas d'étude
                  <ExternalLink className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Ce que disent nos clients
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;