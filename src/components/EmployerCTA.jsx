import React from 'react';
import { Briefcase, Users, TrendingUp } from 'lucide-react';

const EmployerCTA = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 md:p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Hiring for Your Business?
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Connect with thousands of verified job seekers across India
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Users className="w-8 h-8 text-white mx-auto mb-2" />
                <p className="text-indigo-100">50,000+ Active Users</p>
              </div>
              <div className="text-center">
                <Briefcase className="w-8 h-8 text-white mx-auto mb-2" />
                <p className="text-indigo-100">All Industries</p>
              </div>
              <div className="text-center">
                <TrendingUp className="w-8 h-8 text-white mx-auto mb-2" />
                <p className="text-indigo-100">Fast Hiring</p>
              </div>
            </div>
            
            <button className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Post Jobs for Free
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployerCTA;