import React from 'react';
import { TrendingUp, Target, Users, DollarSign, BarChart3 } from 'lucide-react';

const Analytics: React.FC = () => {
  const metrics = [
    { icon: TrendingUp, label: 'Productos Más Vendidos', value: 'Top 10' },
    { icon: Users, label: 'Tendencias de Usuarios', value: 'Real-Time' },
    { icon: Target, label: 'Tasa de Conversión', value: '+45%' },
    { icon: DollarSign, label: 'Revenue Growth', value: '+150%' }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-slate-900 to-blue-950"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxNDcsIDUxLCAyMzQsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-slate-900/50 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/30 shadow-[0_0_50px_rgba(147,51,234,0.2)]">
              <img
                src="/analisis.webp"
                alt="Analytics Dashboard"
                className="rounded-xl shadow-2xl border border-purple-500/20"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-6">
              <BarChart3 className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 text-sm font-semibold">Datos Que Impulsan Decisiones</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Analítica que{' '}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Optimiza Resultados
              </span>
            </h2>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Rastrea productos top, tendencias de usuarios y tasas de conversión para optimizar tu negocio en tiempo real.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {metrics.map((metric, index) => {
                const IconComponent = metric.icon;
                return (
                  <div
                    key={index}
                    className="p-6 bg-slate-900/50 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(147,51,234,0.3)]"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(147,51,234,0.3)]">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                    <div className="text-sm text-gray-400">{metric.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
