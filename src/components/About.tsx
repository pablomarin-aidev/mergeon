import React from 'react';
import { Shield, Award, Users, Zap } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About: React.FC = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { elementRef: cardsRef, isVisible: cardsVisible } = useScrollAnimation();
  const { elementRef: contentRef, isVisible: contentVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-slate-900 to-blue-950"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxNDcsIDUxLCAyMzQsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" ref={titleRef}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-6">
            <Award className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 text-sm font-semibold">Sobre Mergeon</span>
          </div>

          <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight scroll-reveal ${titleVisible ? 'visible' : ''}`}>
            Tecnología Que{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Transforma Negocios
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Somos especialistas en automatización empresarial con IA. Nuestra misión es ayudar a empresas ambiciosas a escalar sus operaciones sin límites.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16" ref={cardsRef}>
          {[
            { icon: Users, label: 'Expertos en IA', value: 'Equipo Certificado' },
            { icon: Shield, label: 'Seguridad', value: 'Nivel Empresarial' },
            { icon: Zap, label: 'Rendimiento', value: '99.9% Uptime' },
            { icon: Award, label: 'Confianza', value: '30+ Automatizaciones' }
          ].map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className={`p-8 bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] text-center border-shine scroll-reveal ${cardsVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-[0_0_25px_rgba(59,130,246,0.4)]">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div className="text-xl font-bold text-white mb-2">{item.value}</div>
                <div className="text-sm text-gray-400">{item.label}</div>
              </div>
            );
          })}
        </div>

        <div className="relative" ref={contentRef}>
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-30"></div>
          <div className={`relative bg-slate-900/70 backdrop-blur-xl rounded-3xl p-12 border border-blue-500/30 border-shine-slow scroll-reveal ${contentVisible ? 'visible' : ''}`}>
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-6">
                Soluciones de Nivel Empresarial
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Mergeon combina inteligencia artificial avanzada con deep understanding de operaciones comerciales. Cada sistema que construimos está diseñado para escalar, asegurar tu información y entregar resultados medibles desde el día uno.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;