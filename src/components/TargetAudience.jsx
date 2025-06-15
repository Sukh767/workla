import React from 'react';
import { Users, Shield, Leaf } from 'lucide-react';

const TargetAudience = () => {
  const audiences = [
    {
      icon: Users,
      title: 'Blue-Collar',
      description: 'Drivers, Cleaners, Factory Workers',
      color: 'bg-blue-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      icon: Shield,
      title: 'Grey-Collar',
      description: 'Field Sales, Security, Supervisors',
      color: 'bg-gray-500',
      bgColor: 'bg-gray-50 dark:bg-gray-900/20'
    },
    {
      icon: Leaf,
      title: 'Green-Collar',
      description: 'EV Techs, Solar Workers',
      color: 'bg-green-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20'
    }
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Who is it for?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Workla connects job seekers across all industries
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => {
            const IconComponent = audience.icon;
            return (
              <div
                key={index}
                className={`${audience.bgColor} rounded-2xl p-8 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg border border-gray-200 dark:border-gray-700`}
              >
                <div className={`${audience.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {audience.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg">
                  {audience.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;