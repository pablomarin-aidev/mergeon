// ConnectWhatsApp.tsx
import React, { useEffect, useState, useRef } from 'react';
import { Phone, Shield, FileCheck } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

declare global {
  interface Window {
    FB?: any;
    fbAsyncInit?: any;
  }
}

const APP_ID = '1129979435402896';
const REDIRECT_URI = 'https://mergeon-router.onrender.com/auth/callback';
const BACKEND_REGISTER = 'https://mergeon-router.onrender.com/auth/register';

const ConnectWhatsApp: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const [wabaId, setWabaId] = useState<string | null>(null);
  const [code, setCode] = useState<string | null>(null);
  const [status, setStatus] = useState<string>('');
  const popupRef = useRef<Window | null>(null);

  // Escuchar mensajes de Embedded Signup o popup OAuth
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      try {
        const data = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;

        if (data?.type === 'WA_EMBEDDED_SIGNUP' && data.event === 'FINISH' && data.data?.waba_id) {
          setWabaId(String(data.data.waba_id));
          return;
        }

        if (data?.type === 'FB_OAUTH_CODE' && data.code && data.waba_id) {
          setCode(String(data.code));
          setWabaId(String(data.waba_id));
          if (popupRef.current && !popupRef.current.closed) popupRef.current.close();
        }
      } catch {
        // Ignorar mensajes malformados
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  // Abrir popup para login
  const openAuthPopup = () => {
    const scope = encodeURIComponent('whatsapp_bussiness_messaging,whatsapp_business_management');
    const authUrl = `https://www.facebook.com/v24.0/dialog/oauth?client_id=${APP_ID}&redirect_uri=${encodeURIComponent(
      REDIRECT_URI,
    )}&response_type=code&scope=${scope}`;

    const width = 600;
    const height = 800;
    const left = window.screenX + (window.innerWidth - width) / 2;
    const top = window.screenY + (window.innerHeight - height) / 2;
    popupRef.current = window.open(authUrl, 'fb_oauth', `width=${width},height=${height},left=${left},top=${top}`);

    if (!popupRef.current) {
      setStatus('Popup bloqueado. Permite popups y vuelve a intentarlo.');
      return;
    }

    setStatus('Abriendo ventana de autenticación...');
  };

  // Cuando tenemos code y wabaId, enviar al backend
  useEffect(() => {
    const register = async () => {
      if (!code || !wabaId) return;
      setStatus('Registrando tu WhatsApp Business...');
      try {
        const res = await fetch(BACKEND_REGISTER, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ code, waba_id: wabaId, redirect_uri: REDIRECT_URI }),
        });
        if (!res.ok) throw new Error(await res.text());
        setStatus('¡Registro exitoso! Tu cuenta está conectada.');
      } catch (err: any) {
        setStatus(`Error en registro: ${err.message || String(err)}`);
      }
    };
    register();
  }, [code, wabaId]);

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
                  <div key={i} className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-xl border border-green-500/10">
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
              onClick={openAuthPopup}
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
