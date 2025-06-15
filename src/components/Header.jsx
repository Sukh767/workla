import React from 'react';
import { Download, Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header = ({ isDark, onThemeToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/WL-Logo.jpg" 
              alt="Workla" 
              className="w-8 h-8 rounded-lg"
            />
            <span className="text-xl font-bold text-primary dark:text-white">
              Workla
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#jobs" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors">
              Jobs
            </a>
            <a href="#how-it-works" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors">
              How It Works
            </a>
            <a href="#employers" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors">
              For Employers
            </a>
            <a href="#help" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors">
              Help
            </a>
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />
            <button className="hidden md:flex items-center space-x-2 bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg transition-colors">
              <Download className="w-4 h-4" />
              <span>Download App</span>
            </button>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 dark:text-gray-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            <nav className="flex flex-col space-y-4">
              <a href="#jobs" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors">
                Jobs
              </a>
              <a href="#how-it-works" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors">
                How It Works
              </a>
              <a href="#employers" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors">
                For Employers
              </a>
              <a href="#help" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors">
                Help
              </a>
              <button className="flex items-center justify-center space-x-2 bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg transition-colors w-full">
                <Download className="w-4 h-4" />
                <span>Download App</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;