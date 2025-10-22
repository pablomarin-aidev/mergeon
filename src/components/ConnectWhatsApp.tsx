import React, { useState, useEffect } from 'react';
import { CheckCircle, Phone, Shield, FileCheck, AlertCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

declare global {
  interface Window {
    fbAsyncInit: () => void;
    FB: {
      init: (params: {
        appId: string;
        autoLogAppEvents: boolean;
        xfbml: boolean;
        version: string;
      }) => void;
      login: (
        callback: (response: {
          status: string;
          authResponse?: {
            accessToken: string;
            code?: string;
          };
        }) => void,
        options: { config_id: string; response_type: string; override_default_response_type: boolean }
      ) => void;
    };
  }
}

interface WhatsAppData {
  accessToken: string;
  phoneNumberId: string;
  wabaId: string;
  businessName: string;
}

const ConnectWhatsApp: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sdkLoaded, setSdkLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://connect.facebook.net/en_US/sdk.js';
    script.async = true;
    script.defer = true;
    script.crossOrigin = 'anonymous';

    script.onload = () => {
      window.fbAsyncInit = function() {
        window.FB.init({
          appId: '9153316638057244',
          autoLogAppEvents: true,
          xfbml: true,
          version: 'v21.0'
        });
        setSdkLoaded(true);
      };
    };

    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const handleConnectWhatsApp = () => {
    if (!sdkLoaded || !window.FB) {
      setError('El SDK de Facebook no está disponible. Por favor, recarga la página.');
      return;
    }

    setIsLoading(true);
    setError(null);

    window.FB.login(
      async (response) => {
        if (response.status === 'connected' && response.authResponse) {
          try {
            const accessToken = response.authResponse.accessToken;

            const backendUrl = import.meta.env.VITE_BACKEND_ROUTER_URL || 'http://localhost:8000/';
            const endpoint = `${backendUrl.replace(/\/$/, '')}/api/whatsapp/connect`;

            const whatsappData: WhatsAppData = {
              accessToken: accessToken,
              phoneNumberId: 'pending',
              wabaId: 'pending',
              businessName: 'pending'
            };

            const result = await fetch(endpoint, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(whatsappData),
            });

            if (result.ok) {
              setIsConnected(true);
              setIsLoading(false);
            } else {
              throw new Error('Error al conectar con el servidor');
            }
          } catch (err) {
            setError('Hubo un error al procesar la conexión. Por favor, intenta nuevamente.');
            setIsLoading(false);
          }
        } else {
          setError('No se pudo completar la conexión. Por favor, intenta nuevamente.');
          setIsLoading(false);
        }
      },
      {
        config_id: '1568007964127158',
        response_type: 'code',
        override_default_response_type: true,
      }
    );
  };

  const requirements = [
    {
      icon: Shield,
      text: 'Tener una cuenta de Facebook Business verificada',
    },
    {
      icon: Phone,
      text: 'Tener un número de WhatsApp disponible para conectar',
    },
    {
      icon: FileCheck,
      text: 'Aceptar los permisos de Meta durante el proceso',
    },
  ];

  if (isConnected) {
    return (
      <div className="min-h-screen bg-slate-950 pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-green-500/10 rounded-full mb-6 border-2 border-green-500/30">
              <CheckCircle className="w-12 h-12 text-green-400" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-6">
              ¡Conexión Exitosa!
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              ✅ Tu cuenta fue conectada correctamente. ¡Ya puedes comenzar a usar tu WhatsApp en la nube!
            </p>
            <button
              onClick={() => window.location.href = '/'}
              className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-[0_0_30px_rgba(34,197,94,0.5)]"
            >
              Volver al Inicio
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={elementRef} className={`scroll-reveal ${isVisible ? 'visible' : ''}`}>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-6">
              <Phone className="w-4 h-4 text-green-400" />
              <span className="text-green-300 text-sm font-semibold">WhatsApp Business</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Conecta tu WhatsApp Business{' '}
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                en minutos
              </span>
            </h1>

            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Al conectar tu cuenta, nos autorizas a integrarte con nuestra plataforma de automatización.
              Tu información está segura y solo se usará para configurar tu número en la nube de Meta
              (WhatsApp Cloud API).
            </p>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-xl rounded-2xl p-8 border border-green-500/20 mb-8 border-shine">
            <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
              <FileCheck className="w-6 h-6 text-green-400" />
              Requisitos Previos
            </h2>

            <div className="space-y-4">
              {requirements.map((req, index) => {
                const IconComponent = req.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-xl border border-green-500/10 hover:border-green-500/30 transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-gray-300 pt-2">{req.text}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 mb-8 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
              <p className="text-red-300">{error}</p>
            </div>
          )}

          <div className="text-center">
            <button
              onClick={handleConnectWhatsApp}
              disabled={isLoading || !sdkLoaded}
              className="group relative bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white px-12 py-5 rounded-xl font-semibold text-lg transition-all duration-300 shadow-[0_0_30px_rgba(34,197,94,0.5)] hover:shadow-[0_0_40px_rgba(34,197,94,0.6)] transform hover:-translate-y-0.5 border-shine"
            >
              {isLoading ? (
                <span className="flex items-center gap-3">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Conectando...
                </span>
              ) : !sdkLoaded ? (
                'Cargando...'
              ) : (
                <span className="flex items-center gap-3">
                  <Phone className="w-5 h-5" />
                  Conectar mi cuenta
                </span>
              )}
            </button>

            <p className="text-sm text-gray-400 mt-6">
              Al hacer clic, serás redirigido a Facebook para autorizar la conexión
            </p>
          </div>

          <div className="mt-12 p-6 bg-blue-500/5 border border-blue-500/20 rounded-xl">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-white font-semibold mb-2">Tu información está protegida</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Utilizamos las API oficiales de Meta para garantizar la seguridad de tus datos.
                  Nunca almacenamos información sensible y cumplimos con todas las políticas de privacidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectWhatsApp;
