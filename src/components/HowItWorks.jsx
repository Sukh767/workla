import React from 'react';
import { Download, User, Target } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: '1',
      icon: Download,
      title: 'Download the App',
      description: 'Get Workla from Google Play Store or download the APK directly.'
    },
    {
      number: '2',
      icon: User,
      title: 'Set Up Profile',
      description: 'Fill in your basic details - no resume required, just simple information.'
    },
    {
      number: '3',
      icon: Target,
      title: 'Start Applying',
      description: 'Browse jobs and apply with one click. Get hired faster than ever.'
    }
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get Started in 3 Easy Steps
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            From download to getting hired - it's that simple
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="text-center relative">
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary to-transparent transform translate-x-8 z-0"></div>
                )}
                
                <div className="relative z-10">
                  <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg">
                    {step.number}
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-800 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 -mt-10 pt-2">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;