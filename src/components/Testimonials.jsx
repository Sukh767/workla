import React from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  
  const testimonials = [
    {
      name: 'Salma',
      location: 'Delhi',
      quote: 'Got hired in 2 days – very simple!',
      rating: 5,
      job: 'Delivery Executive'
    },
    {
      name: 'Rajesh',
      location: 'Mumbai',
      quote: 'No resume needed, just applied and got the job. Amazing!',
      rating: 5,
      job: 'Security Guard'
    },
    {
      name: 'Priya',
      location: 'Bangalore',
      quote: 'WhatsApp alerts helped me never miss an opportunity.',
      rating: 5,
      job: 'Sales Associate'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-primary to-primary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-blue-100">
            Real people, real success with Workla
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-2xl">
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-600">
                  {testimonials[currentSlide].name[0]}
                </span>
              </div>
              
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-2xl text-gray-900 dark:text-white font-medium mb-6">
                "{testimonials[currentSlide].quote}"
              </blockquote>
              
              <div className="text-gray-600 dark:text-gray-300">
                <p className="font-semibold text-lg">
                  {testimonials[currentSlide].name}, {testimonials[currentSlide].location}
                </p>
                <p className="text-sm">
                  {testimonials[currentSlide].job}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;