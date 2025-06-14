import React from 'react';
import { Download, Play, QrCode } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Ready to Find Your Next Job?
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Download the Free App – Used by 50,000+ Job Seekers
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex items-center justify-center space-x-3 bg-primary hover:bg-primary-dark text-white px-6 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
              <Play className="w-5 h-5" />
              <div className="text-left">
                <div className="text-xs">GET IT ON</div>
                <div className="font-semibold">Google Play</div>
              </div>
            </button>
            <button className="flex items-center justify-center space-x-3 bg-gray-800 hover:bg-gray-700 text-white px-6 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
              <Download className="w-5 h-5" />
              <div className="text-left">
                <div className="text-xs">DIRECT</div>
                <div className="font-semibold">Download APK</div>
              </div>
            </button>
          </div>
          
          {/* QR Code */}
          <div className="text-center">
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl inline-block mb-2">
              <QrCode className="w-24 h-24 text-gray-600 dark:text-gray-400" />
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Scan to Download
            </p>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600 dark:text-gray-400">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>100% Free</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>Verified Jobs</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span>No Resume Required</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <span>WhatsApp Alerts</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;