import React from 'react';
import { TrendingUp, Clock, CheckCircle, Users } from 'lucide-react';

const Results: React.FC = () => {
  const results = [
    {
      icon: TrendingUp,
      metric: '+150%',
      label: 'Incremento Promedio en Ventas',
      description: 'En los primeros 3 meses'
    },
    {
      icon: Clock,
      metric: '80%',
      label: 'Respuesta Más Rápida',
      description: 'Tiempo de respuesta reducido'
    },
    {
      icon: CheckCircle,
      metric: '24/7',
      label: 'Disponibilidad Total',
      description: 'Sin pausas ni descansos'
    },
    {
      icon: Users,
      metric: '95%',
      label: 'Satisfacción del Cliente',
      description: 'Clientes más felices'
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-900 to-purple-950"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxNDcsIDUxLCAyMzQsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-6">
            <TrendingUp className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 text-sm font-semibold">Resultados Comprobados</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Impacto{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Medible y Real
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Empresas que confían en Mergeon Sales AI ven resultados transformadores desde el primer mes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {results.map((result, index) => {
            const IconComponent = result.icon;
            return (
              <div
                key={index}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative p-8 bg-slate-900/90 backdrop-blur-xl rounded-2xl border border-blue-500/30 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(59,130,246,0.4)]">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                    {result.metric}
                  </div>
                  <div className="text-lg font-semibold text-white mb-2">{result.label}</div>
                  <div className="text-sm text-gray-400">{result.description}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Results;
