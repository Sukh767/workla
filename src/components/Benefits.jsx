import React from 'react';
import { CheckCircle, MessageCircle, Globe, Shield } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: CheckCircle,
      title: 'Apply Without Resume',
      description: 'No need for lengthy resumes. Just fill basic details and start applying.',
      color: 'text-green-500'
    },
    {
      icon: MessageCircle,
      title: 'Get Alerts via WhatsApp',
      description: 'Receive job notifications directly on WhatsApp for instant updates.',
      color: 'text-blue-500'
    },
    {
      icon: Globe,
      title: 'Use in Your Language',
      description: 'Available in multiple Indian languages for your convenience.',
      color: 'text-purple-500'
    },
    {
      icon: Shield,
      title: 'Verified Jobs Only',
      description: 'All jobs are verified and legitimate. No fake postings or scams.',
      color: 'text-orange-500'
    }
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why MyJobee Works for You
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Everything you need to find your next job, simplified
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="mb-4">
                  <IconComponent className={`w-12 h-12 ${benefit.color} mx-auto`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;