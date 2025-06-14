import React from 'react';
import { Play, Download, Smartphone } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Find Jobs Fast –{' '}
                <span className="text-primary">No Resume Needed</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Trusted by thousands across India for delivery, security, and technician jobs.
              </p>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center space-x-3 bg-primary hover:bg-primary-dark text-white px-6 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                <Play className="w-5 h-5" />
                <span className="font-semibold">GET IT ON</span>
              </button>
              <button className="flex items-center justify-center space-x-3 bg-gray-800 hover:bg-gray-700 text-white px-6 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                <Download className="w-5 h-5" />
                <span className="font-semibold">Download APK</span>
              </button>
            </div>

            <div className="flex items-center space-x-2 text-green-600 dark:text-green-400">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-medium">100% free, 100% verified jobs</span>
            </div>

            <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Start Job Search Now
            </button>
          </div>

          {/* Right Column - Phone Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-[500px] bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden">
                  <div className="bg-primary h-16 flex items-center justify-center">
                    <span className="text-white font-semibold">MyJobee Jobs</span>
                  </div>
                  <div className="p-4 space-y-3">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                      <div key={item} className="bg-gray-100 rounded-lg p-3 animate-pulse">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gray-300 rounded-lg"></div>
                          <div className="flex-1 space-y-2">
                            <div className="h-3 bg-gray-300 rounded w-3/4"></div>
                            <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
                <Smartphone className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;