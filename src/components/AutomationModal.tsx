import React from 'react';
import { X, Check, ArrowRight } from 'lucide-react';
import { AutomationDetail } from '../types';

interface AutomationModalProps {
  automation: AutomationDetail | null;
  isOpen: boolean;
  onClose: () => void;
}

const AutomationModal: React.FC<AutomationModalProps> = ({ automation, isOpen, onClose }) => {
  if (!isOpen || !automation) return null;

  const scrollToContact = () => {
    onClose();
    setTimeout(() => {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        {/* Backdrop */}
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
          onClick={onClose}
        />

        {/* Modal */}
        <div className="inline-block align-bottom bg-white dark:bg-gray-900 rounded-3xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">
                {automation.title}
              </h2>
              <button
                onClick={onClose}
                className="text-white hover:text-gray-200 transition-colors duration-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="px-6 py-8 max-h-[70vh] overflow-y-auto">
            <div className="space-y-8">
              {/* Description */}
              <div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {automation.detailedDescription}
                </p>
              </div>

              {/* Capabilities */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Capabilities
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {automation.capabilities.map((capability, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{capability}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Use Cases */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Use Cases
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {automation.useCases.map((useCase, index) => (
                    <div key={index} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                        <span className="text-gray-700 dark:text-gray-300 font-medium">{useCase}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Pricing Plans
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {automation.pricing.map((tier, index) => {
                    // Identificar si es enterprise o más costoso (excepto RAG)
                    const isEnterpriseOrExpensive = tier.name.toLowerCase().includes('enterprise') || tier.price.toLowerCase().includes('cotizar') || tier.price.toLowerCase().includes('contactar');
                    const isRAG = tier.name.toLowerCase().includes('rag');
                    return (
                      <div
                        key={index}
                        className={`relative p-6 rounded-2xl border-2 transition-all duration-300 hover:shadow-lg ${
                          index === 1
                            ? 'border-blue-600 dark:border-blue-400 bg-blue-50 dark:bg-blue-900/20'
                            : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800'
                        }`}
                      >
                        {/* Overlay "Coming soon" para enterprise/expensive excepto RAG */}
                        {isEnterpriseOrExpensive && !isRAG && (
                          <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center rounded-2xl z-10">
                            <span className="text-white text-xl font-bold">Coming soon</span>
                          </div>
                        )}
                        {index === 1 && (
                          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                            <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                              Most Popular
                            </span>
                          </div>
                        )}
                        <div className="text-center relative z-0">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            {tier.name}
                          </h4>
                          <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                            {tier.price}
                          </div>
                          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                            {/* En el primer plan, especificar integración en web page */}
                            {index === 0
                              ? `${tier.description} (Componente para integrar en la web page que ya tengan)`
                              : tier.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 dark:bg-gray-800 px-6 py-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-end">
              <button
                onClick={onClose}
                className="px-6 py-3 border border-gray-300 dark:border-grxay-600 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                Close
              </button>
              <button
                onClick={scrollToContact}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            {/* Integración en web, WhatsApp y otras plataformas */}
            <div className="mt-6 text-center">
              <span className="text-base text-gray-700 dark:text-gray-300 font-medium">
                Integración del chatbot en web, WhatsApp y otras plataformas deseadas.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomationModal;