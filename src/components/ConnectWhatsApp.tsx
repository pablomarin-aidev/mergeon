// ConnectWhatsApp.tsx
import React, { useState } from 'react';
import { Phone, Shield, FileCheck } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const WHATSAPP_ONBOARD_URL =
  'https://business.facebook.com/messaging/whatsapp/onboard/?app_id=1129979435402896&config_id=1526038345083724&extras=%7B%22featureType%22%3A%22whatsapp_business_app_onboarding%22%2C%22sessionInfoVersion%22%3A%223%22%2C%22version%22%3A%22v3%22%7D';

const ConnectWhatsApp: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const [status, setStatus] = useState<string>('');

  const openWhatsAppOnboard = () => {
  setStatus('Abriendo registro de WhatsApp Business...');

  const width = window.screen.availWidth;
  const height = window.screen.availHeight;
  const left = 0;
  const top = 0;

  const popup = window.open(
    WHATSAPP_ONBOARD_URL,
    'wa_onboard',
    `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes`
  );

  if (!popup) {
    setStatus('Popup bloqueado. Permite popups y vuelve a intentarlo.');
    console.error('Popup bloqueado');
    return;
  }

  setStatus('Ventana abierta. Completa el registro en el popup.');
};

  const requirements = [
    { icon: Shield, text: 'Tener una cuenta de Facebook Business verificada' },
    { icon: Phone, text: 'Tener un número de WhatsApp disponible para conectar' },
    { icon: FileCheck, text: 'Aceptar los permisos de Meta durante el proceso' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={elementRef} className={`scroll-reveal ${isVisible ? 'visible' : ''}`}>
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Conecta tu WhatsApp Business{' '}
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                en minutos
              </span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Al conectar tu cuenta, nos autorizas a integrarte con nuestra plataforma de automatización.
            </p>
          </div>

          <div className="bg-slate-900/50 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
              <FileCheck className="w-6 h-6 text-green-400" />
              Requisitos Previos
            </h2>
            <div className="space-y-4">
              {requirements.map((req, i) => {
                const Icon = req.icon;
                return (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-xl border border-green-500/10"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-gray-300 pt-2">{req.text}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col items-center gap-6 mt-8">
            <button
              onClick={openWhatsAppOnboard}
              className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-12 py-5 rounded-xl font-semibold text-lg"
            >
              <span className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                Registrar WhatsApp Business
              </span>
            </button>
            {status && (
              <div className="w-full max-w-xl bg-slate-900/80 rounded-xl p-4 mt-4 text-center border border-green-500/20">
                <h3 className="text-green-400 font-bold mb-2">{status}</h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectWhatsApp;
