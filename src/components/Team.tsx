import React from 'react';
import { MapPin, Award, Code, Users } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Alex Chen',
      role: 'Lead Developer',
      specialty: 'Full-Stack & AI',
      level: 'Ceinture Noire',
      location: 'Singapore',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      skills: ['React', 'Python', 'TensorFlow', 'AWS']
    },
    {
      name: 'Sarah Johnson',
      role: 'Cloud Architect',
      specialty: 'DevOps & Infrastructure',
      level: 'Ceinture Noire',
      location: 'London',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
      skills: ['Kubernetes', 'Terraform', 'Azure', 'Docker']
    },
    {
      name: 'Mamadou Diallo',
      role: 'Mobile Expert',
      specialty: 'React Native & Flutter',
      level: 'Ceinture Marron',
      location: 'Dakar',
      image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=400',
      skills: ['Flutter', 'React Native', 'Firebase', 'GraphQL']
    },
    {
      name: 'Elena Rodriguez',
      role: 'Security Expert',
      specialty: 'Cybersécurité',
      level: 'Ceinture Noire',
      location: 'Madrid',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      skills: ['Pentesting', 'OWASP', 'Compliance', 'Forensics']
    },
    {
      name: 'Raj Patel',
      role: 'Data Scientist',
      specialty: 'Machine Learning',
      level: 'Ceinture Marron',
      location: 'Mumbai',
      image: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=400',
      skills: ['Python', 'PyTorch', 'Spark', 'MLOps']
    },
    {
      name: 'Marie Dubois',
      role: 'UX/UI Designer',
      specialty: 'Design & Frontend',
      level: 'Ceinture Marron',
      location: 'Paris',
      image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400',
      skills: ['Figma', 'React', 'Design Systems', 'Prototyping']
    }
  ];

  const getBeltColor = (level: string) => {
    switch (level) {
      case 'Ceinture Noire': return 'bg-gray-900 text-white';
      case 'Ceinture Marron': return 'bg-amber-700 text-white';
      case 'Ceinture Bleue': return 'bg-blue-600 text-white';
      default: return 'bg-gray-600 text-white';
    }
  };

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Notre Équipe
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Des talents exceptionnels du monde entier, unis par la passion de l'excellence technologique. 
            Notre système de ceintures reflète l'expertise et l'expérience de chaque membre.
          </p>
          
          {/* Philosophy Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl">
              <Award className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Talent avant tout</h3>
              <p className="text-sm text-gray-600">Nous privilégions les compétences et la passion plutôt que les diplômes</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-xl">
              <Users className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Organisation collégiale</h3>
              <p className="text-sm text-gray-600">Pas de hiérarchie rigide, collaboration et respect mutuel</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl">
              <Code className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Excellence technique</h3>
              <p className="text-sm text-gray-600">Formation continue et montée en compétences permanente</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${getBeltColor(member.level)}`}>
                  {member.level}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-semibold mb-2">
                  {member.role}
                </p>
                <p className="text-gray-600 mb-3">
                  {member.specialty}
                </p>
                
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  {member.location}
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;