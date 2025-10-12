import React from 'react';
import { LayoutDashboard, ShoppingBag, Users, BarChart3 } from 'lucide-react';

const ManagerPlatform: React.FC = () => {
  const features = [
    {
      icon: ShoppingBag,
      title: 'Catálogo Digital',
      description: 'Gestiona productos con inventario en tiempo real',
      details: 'Subimos tu catálogo existente y como cobro adicional creamos una página de catálogo integrada al agente de IA para que tus clientes naveguen y compren directamente.'
    },
    {
      icon: Users,
      title: 'Control de Equipos',
      description: 'Monitorea el desempeño de tu equipo de ventas',
      details: 'Sistema jerarquizado con permisos personalizados: Admin con control total, Managers con acceso a reportes y Empleados con permisos específicos para sus funciones.'
    },
    {
      icon: LayoutDashboard,
      title: 'Dashboard Unificado',
      description: 'Toda tu operación en un solo lugar',
      details: 'Accede a análisis de datos, gestión de clientes, añadir pedidos, gestionar catálogo y más. Todo en una interfaz simple e intuitiva.'
    },
    {
      icon: BarChart3,
      title: 'Análisis Avanzado',
      description: 'Insights accionables para crecer más rápido',
      details: 'Productos más vendidos, métricas altamente personalizables y análisis del desempeño tanto de la IA como de tu negocio en tiempo real.'
    }
  ];

  return (
    <section id="manager" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-[200px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-6">
            <LayoutDashboard className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 text-sm font-semibold">Plataforma Mergeon Manager</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Todo Tu Negocio en{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Un Solo Dashboard
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Gestiona productos, rastrea pedidos, analiza rendimiento y monitorea tu equipo desde una plataforma inteligente.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-slate-900/50 backdrop-blur-xl rounded-2xl p-6 border border-blue-500/30 shadow-[0_0_50px_rgba(59,130,246,0.2)]">
              <img
                src="/catalogo_productos.webp"
                alt="Product Catalog"
                className="rounded-xl shadow-2xl border border-blue-500/20 mb-4"
              />
              <h3 className="text-xl font-bold text-white mb-2">Catálogo Inteligente</h3>
              <p className="text-gray-400">Control total de inventario y productos</p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-slate-900/50 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/30 shadow-[0_0_50px_rgba(147,51,234,0.2)]">
              <img
                src="/analisis.webp"
                alt="Analytics Dashboard"
                className="rounded-xl shadow-2xl border border-purple-500/20 mb-4"
              />
              <h3 className="text-xl font-bold text-white mb-2">Análisis en Tiempo Real</h3>
              <p className="text-gray-400">Métricas que impulsan decisiones inteligentes</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const colors = [
              { gradient: 'from-blue-600 to-cyan-500', border: 'border-blue-500/20', glow: 'group-hover:shadow-[0_0_50px_rgba(59,130,246,0.6)]' },
              { gradient: 'from-purple-600 to-pink-500', border: 'border-purple-500/20', glow: 'group-hover:shadow-[0_0_50px_rgba(147,51,234,0.6)]' },
              { gradient: 'from-blue-600 to-indigo-600', border: 'border-blue-500/20', glow: 'group-hover:shadow-[0_0_50px_rgba(59,130,246,0.6)]' },
              { gradient: 'from-purple-600 to-violet-600', border: 'border-purple-500/20', glow: 'group-hover:shadow-[0_0_50px_rgba(147,51,234,0.6)]' }
            ];
            const color = colors[index % colors.length];

            return (
              <div
                key={index}
                className="group h-[280px] perspective-1000"
                style={{ perspective: '1000px' }}
              >
                <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
                  <div className={`absolute w-full h-full backface-hidden p-6 bg-slate-900/90 backdrop-blur-xl rounded-2xl border ${color.border} ${color.glow} transition-all duration-300`}>
                    <div className={`w-16 h-16 bg-gradient-to-br ${color.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                  <div className={`absolute w-full h-full backface-hidden rotate-y-180 p-6 bg-gradient-to-br ${color.gradient} rounded-2xl ${color.glow} transition-all duration-300 flex flex-col justify-center`}>
                    <p className="text-white text-sm leading-relaxed">{feature.details}</p>
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

export default ManagerPlatform;
