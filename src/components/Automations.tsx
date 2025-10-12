import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MessageCircle, Smartphone, Database, Globe, Workflow, Headphones, ArrowRight } from 'lucide-react';
import { automations } from '../data/automations';
import { automationDetails } from '../data/automationDetails';
import AutomationModal from './AutomationModal';

const iconMap = {
  MessageCircle,
  Smartphone,
  Database,
  Globe,
  Workflow,
  Headphones,
};

const Automations: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [selectedAutomation, setSelectedAutomation] = useState<string | null>(null);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % automations.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % automations.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + automations.length) % automations.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const openModal = (automationId: string) => {
    setSelectedAutomation(automationId);
  };

  const closeModal = () => {
    setSelectedAutomation(null);
  };

  const selectedAutomationDetail = selectedAutomation 
    ? automationDetails.find(detail => detail.id === selectedAutomation)
    : null;

  return (
    <>
      <section id="automations" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            AI Automation <span className="text-blue-600 dark:text-blue-400">Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover our comprehensive suite of AI-powered automation solutions designed to transform your business operations.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {automations.map((automation, index) => {
                const IconComponent = iconMap[automation.icon as keyof typeof iconMap];
                return (
                  <div key={automation.id} className="w-full flex-shrink-0">
                    <div className="bg-white dark:bg-gray-900 p-8 sm:p-12 lg:p-16 mx-4">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                          <div className="bg-gradient-to-br from-blue-600 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                            <IconComponent className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                            {automation.title}
                          </h3>
                          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                            {automation.description}
                          </p>
                          <button 
                            onClick={() => openModal(automation.id)}
                            className="group bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                          >
                            Learn More
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                          </button>
                        </div>
                        <div>
                          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8">
                            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Key Features</h4>
                            <ul className="space-y-4">
                              {automation.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-3">
                                  <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {automations.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-blue-600 dark:bg-blue-400 w-8'
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      </section>

      <AutomationModal
        automation={selectedAutomationDetail}
        isOpen={selectedAutomation !== null}
        onClose={closeModal}
      />
    </>
  );
};

export default Automations;