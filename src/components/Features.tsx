import React from 'react';
import { Smartphone, CreditCard, FileText, MessageCircle, BarChart3, Zap } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Smartphone,
      title: 'Integración CRM',
      description: 'Conecta perfectamente con tu sistema actual',
      details: 'Sincroniza automáticamente con tu CRM existente. Actualiza leads, contactos y oportunidades en tiempo real sin intervención manual.'
    },
    {
      icon: CreditCard,
      title: 'Pagos Online',
      description: 'Procesa pagos seguros automáticamente',
      details: 'Integrado con pasarelas de pago líderes. Procesa tarjetas, transferencias y métodos locales con certificación PCI y encriptación completa.'
    },
    {
      icon: FileText,
      title: 'Facturación',
      description: 'Genera facturas y reportes al instante',
      details: 'Emite facturas electrónicas automáticamente tras cada venta. Cumple normativas fiscales y genera reportes contables en un clic.'
    },
    {
      icon: MessageCircle,
      title: 'Chat en Vivo',
      description: 'Soporte humano cuando lo necesites',
      details: 'La IA escala conversaciones complejas a tu equipo humano automáticamente. Transición fluida entre bot y agente sin perder contexto.'
    },
    {
      icon: BarChart3,
      title: 'Analítica Avanzada',
      description: 'Métricas detalladas de tu operación',
      details: 'Dashboards personalizables con KPIs clave: tasas de conversión, ticket promedio, rendimiento por producto y análisis de comportamiento del cliente.'
    },
    {
      icon: Zap,
      title: 'Automatización Total',
      description: 'Workflows personalizados para tu negocio',
      details: 'Diseña flujos de trabajo únicos para tu industria. Automatiza seguimientos, recordatorios, upsells y todo el ciclo de vida del cliente.'
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950"></div>
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[150px]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[150px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-6">
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 text-sm font-semibold">Construido Para Crecer Contigo</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Integraciones{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Empresariales
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Todo lo que necesitas para automatizar tu operación comercial en una sola plataforma.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const colors = [
              { gradient: 'from-blue-600 to-cyan-500', border: 'border-blue-500/20', glow: 'group-hover:shadow-[0_0_50px_rgba(59,130,246,0.6)]' },
              { gradient: 'from-purple-600 to-pink-500', border: 'border-purple-500/20', glow: 'group-hover:shadow-[0_0_50px_rgba(147,51,234,0.6)]' },
              { gradient: 'from-emerald-600 to-teal-500', border: 'border-emerald-500/20', glow: 'group-hover:shadow-[0_0_50px_rgba(16,185,129,0.6)]' },
              { gradient: 'from-orange-600 to-amber-500', border: 'border-orange-500/20', glow: 'group-hover:shadow-[0_0_50px_rgba(249,115,22,0.6)]' },
              { gradient: 'from-blue-600 to-indigo-600', border: 'border-blue-500/20', glow: 'group-hover:shadow-[0_0_50px_rgba(59,130,246,0.6)]' },
              { gradient: 'from-purple-600 to-violet-600', border: 'border-purple-500/20', glow: 'group-hover:shadow-[0_0_50px_rgba(147,51,234,0.6)]' }
            ];
            const color = colors[index % colors.length];

            return (
              <div
                key={index}
                className="group h-[280px]"
                style={{ perspective: '1000px' }}
              >
                <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
                  <div className={`absolute w-full h-full backface-hidden p-8 bg-slate-900/90 backdrop-blur-xl rounded-2xl border ${color.border} ${color.glow} transition-all duration-300`}>
                    <div className={`w-16 h-16 bg-gradient-to-br ${color.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                  </div>
                  <div className={`absolute w-full h-full backface-hidden rotate-y-180 p-8 bg-gradient-to-br ${color.gradient} rounded-2xl ${color.glow} transition-all duration-300 flex flex-col justify-center`}>
                    <p className="text-white leading-relaxed">{feature.details}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
