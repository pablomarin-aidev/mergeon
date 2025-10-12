import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden flex items-center justify-center pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxNDcsIDUxLCAyMzQsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>

      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-600/30 rounded-full blur-[128px]"></div>
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-purple-600/30 rounded-full blur-[128px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
            Automatiza Ventas. Cierra Deals.{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent animate-pulse">
              Crece Sin Límites.
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Mergeon Sales AI conecta tu WhatsApp, CRM y tienda en un sistema inteligente que vende por ti 24/7.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={() => scrollToSection('contact')}
              className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center gap-2 shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:shadow-[0_0_40px_rgba(147,51,234,0.6)] transform hover:-translate-y-0.5"
            >
              Reserva un Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            <button
              onClick={() => scrollToSection('manager')}
              className="group bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transform hover:-translate-y-0.5"
            >
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              Ver Cómo Funciona
            </button>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-3xl p-8 backdrop-blur-xl border border-blue-500/20 shadow-[0_0_50px_rgba(59,130,246,0.2)]">
              <img
                src="/panel_general_users.webp"
                alt="Mergeon Manager Dashboard"
                className="rounded-2xl shadow-2xl mb-8 border border-blue-500/30"
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="text-center p-6 bg-slate-900/50 rounded-2xl backdrop-blur-sm border border-blue-500/20">
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent mb-2">+150%</div>
                  <div className="text-gray-300 font-medium">Incremento en Ventas</div>
                </div>
                <div className="text-center p-6 bg-slate-900/50 rounded-2xl backdrop-blur-sm border border-purple-500/20">
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent mb-2">24/7</div>
                  <div className="text-gray-300 font-medium">Disponibilidad</div>
                </div>
                <div className="text-center p-6 bg-slate-900/50 rounded-2xl backdrop-blur-sm border border-blue-500/20">
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent mb-2">80%</div>
                  <div className="text-gray-300 font-medium">Respuesta Más Rápida</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;