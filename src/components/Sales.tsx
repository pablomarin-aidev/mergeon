import React from 'react';
import { TrendingUp, Target, Zap, BarChart3 } from 'lucide-react';

const Sales: React.FC = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Revenue Growth',
      description: 'Increase sales by automating lead qualification and customer engagement processes.'
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'AI-driven insights help identify and convert high-value prospects with greater accuracy.'
    },
    {
      icon: Zap,
      title: 'Faster Processes',
      description: 'Reduce response times and accelerate your sales cycle with intelligent automation.'
    },
    {
      icon: BarChart3,
      title: 'Data-Driven Decisions',
      description: 'Make informed business decisions with real-time analytics and performance metrics.'
    }
  ];

  return (
    <section id="sales" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
              Boost your sales with{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                intelligent automation
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
              MERGEON helps companies increase revenue by automating repetitive tasks, 
              improving customer experience, and optimizing processes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div
                    key={index}
                    className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="bg-gradient-to-br from-blue-600 to-purple-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-3xl p-8 backdrop-blur-sm">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl"></div>
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
                  <div className="text-center">
                    <div className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                      150%
                    </div>
                    <div className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Average Sales Increase
                    </div>
                    <div className="text-gray-600 dark:text-gray-300">
                      Companies see significant growth within 3 months
                    </div>
                  </div>
                  
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">80%</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Faster Response</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                      <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">95%</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Customer Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sales;