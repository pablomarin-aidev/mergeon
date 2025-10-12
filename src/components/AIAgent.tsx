import React from 'react';
import { MessageSquare, Zap, Brain } from 'lucide-react';

const AIAgent: React.FC = () => {
  return (
    <section id="ai-agent" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-950 to-slate-950"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxNDcsIDUxLCAyMzQsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-6">
              <Brain className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 text-sm font-semibold">Agente IA Conversacional</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              IA que Vende Por Ti
            </h2>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              El agente IA conversa con tus clientes, identifica leads, procesa pedidos y actualiza tu CRM automáticamente. Sin intervención humana.
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: MessageSquare,
                  text: 'Responde consultas 24/7 en WhatsApp',
                  detail: 'Atiende clientes sin pausa con respuestas instantáneas. Compatible con WhatsApp Business API para escalar sin límites.',
                  gradient: 'from-blue-600 to-cyan-500'
                },
                {
                  icon: Zap,
                  text: 'Califica leads y prioriza oportunidades',
                  detail: 'Scoring automático de leads basado en comportamiento e interés. Enruta los mejores prospectos directo a tu equipo de ventas.',
                  gradient: 'from-purple-600 to-pink-500'
                },
                {
                  icon: Brain,
                  text: 'Aprende de cada conversación para mejorar',
                  detail: 'Machine learning que optimiza respuestas continuamente. Mientras más vende, más inteligente se vuelve el sistema.',
                  gradient: 'from-indigo-600 to-violet-600'
                }
              ].map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    className="group h-[100px]"
                    style={{ perspective: '1000px' }}
                  >
                    <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
                      <div className="absolute w-full h-full backface-hidden flex items-start gap-4 p-4 bg-slate-900/50 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
                        <div className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-lg flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(59,130,246,0.3)]`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <p className="text-gray-200 text-lg pt-2">{feature.text}</p>
                      </div>
                      <div className={`absolute w-full h-full backface-hidden rotate-y-180 p-4 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center`}>
                        <p className="text-white text-sm leading-relaxed">{feature.detail}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-slate-900/50 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/30 shadow-[0_0_50px_rgba(59,130,246,0.2)]">
              <img
                src="/chat.webp"
                alt="AI Chat Interface"
                className="rounded-xl shadow-2xl border border-blue-500/20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAgent;
