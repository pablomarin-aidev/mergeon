import React, { useState, useEffect } from 'react';
import { Phone, Shield, FileCheck } from 'lucide-react';
// Declaración global para FB y fbAsyncInit
declare global {
  interface Window {
    FB: any;
    fbAsyncInit: any;
  }
}
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ConnectWhatsApp: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const [code, setCode] = useState<string | null>(null);
  const [wabaId, setWabaId] = useState<string | null>(null);
  const [sdkLoaded, setSdkLoaded] = useState(false);
  const [status, setStatus] = useState<string>("");
  // Escuchar el evento 'message' para Embedded Signup
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      let data: any;
      try {
        data = typeof event.data === "string" ? JSON.parse(event.data) : event.data;
      } catch {
        data = event.data;
      }
      if (data?.type === "WA_EMBEDDED_SIGNUP" && data.event === "FINISH" && data.data?.waba_id) {
        setWabaId(data.data.waba_id);
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);


  // Meta callback
  const fbLoginCallback = (response: any) => {
    if (response?.authResponse?.code) {
      setCode(response.authResponse.code);
    }
  };

  const launchWhatsAppSignup = () => {
    if (!sdkLoaded || !window.FB) return;
    window.FB.login(fbLoginCallback, {
      config_id: "1526038345083724",
      response_type: "code",
      override_default_response_type: true,
    });
  };

  useEffect(() => {
    if (document.getElementById('facebook-jssdk')) {
      setSdkLoaded(true);
      return;
    }
    window.fbAsyncInit = function() {
      window.FB.init({
        appId: '1129979435402896',
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v24.0',
      });
      setSdkLoaded(true);
    };
    const script = document.createElement('script');
    script.id = 'facebook-jssdk';
    script.src = 'https://connect.facebook.net/en_US/sdk.js';
    script.async = true;
    script.defer = true;
    script.crossOrigin = 'anonymous';
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);


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

  useEffect(() => {
    if (code && wabaId) {
      console.log("Enviando a /auth/register:", { code, waba_id: wabaId, redirect_uri: window.location.href });

      fetch("https://mergeon-router.onrender.com/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code, waba_id: wabaId, redirect_uri: window.location.href}),
      })
        .then((res) => res.json())
        .then(() => {
          setStatus("¡Registro exitoso!");
        })
        .catch(() => {
          setStatus("Error en el registro");
        });
    }
  }, [code, wabaId]);

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
          <div className="flex flex-col items-center justify-center gap-6 mt-8">
            <button
              onClick={launchWhatsAppSignup}
              disabled={!sdkLoaded}
              className="group relative bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white px-12 py-5 rounded-xl font-semibold text-lg transition-all duration-300 shadow-[0_0_30px_rgba(34,197,94,0.5)] hover:shadow-[0_0_40px_rgba(34,197,94,0.6)] transform hover:-translate-y-0.5 border-shine"
            >
              {!sdkLoaded ? (
                'Cargando SDK de Meta...'
              ) : (
                <span className="flex items-center gap-3">
                  <Phone className="w-5 h-5" />
                  Registrar WhatsApp Business
                </span>
              )}
            </button>
            <p className="text-sm text-gray-400 text-center max-w-md">
              Al hacer clic, se abrirá el registro embebido de WhatsApp Business vía Meta/Facebook.
            </p>
            {status && (
              <div className="w-full max-w-xl bg-slate-900/80 rounded-xl p-4 mt-4 border border-green-500/20 text-center">
                <h3 className="text-green-400 font-bold mb-2">{status}</h3>
                <p className="text-gray-200 text-base">Tu cuenta de WhatsApp Business fue conectada correctamente.</p>
              </div>
            )}
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
