import React from 'react';
import { Star, Target, Award, ArrowRight, CheckCircle } from 'lucide-react';

const Talents = () => {
  const requirements = [
    'Expertise technique prouvée (portfolio, certifications)',
    'Passion pour l\'innovation et l\'apprentissage continu',
    'Capacité à travailler en équipe internationale',
    'Autonomie et sens des responsabilités',
    'Communication claire et efficace'
  ];

  const benefits = [
    {
      icon: Star,
      title: 'Reconnaissance du talent',
      description: 'Système de ceintures basé sur les compétences réelles'
    },
    {
      icon: Target,
      title: 'Projets stimulants',
      description: 'Missions variées avec des clients internationaux'
    },
    {
      icon: Award,
      title: 'Rémunération équitable',
      description: 'Salaire basé sur la performance et l\'expertise'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Candidature',
      description: 'Soumettez votre portfolio et vos projets'
    },
    {
      step: '02',
      title: 'Évaluation technique',
      description: 'Test pratique dans votre domaine d\'expertise'
    },
    {
      step: '03',
      title: 'Entretien',
      description: 'Discussion sur vos motivations et objectifs'
    },
    {
      step: '04',
      title: 'Intégration',
      description: 'Onboarding et attribution de votre première ceinture'
    }
  ];

  return (
    <section id="talents" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Rejoignez nos Talents
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Vous êtes un développeur passionné ? Rejoignez notre réseau mondial de talents 
            et participez à des projets innovants avec une rémunération équitable.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Requirements */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Profil recherché
            </h3>
            <div className="space-y-4">
              {requirements.map((requirement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">{requirement}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">
              Pourquoi nous rejoindre ?
            </h3>
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Processus d'intégration
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-purple-200 transform -translate-x-8"></div>
                  )}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200">
            Devenir un Talent WTE
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Talents;