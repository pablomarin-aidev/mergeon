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


const ConnectWhatsApp: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sdkLoaded, setSdkLoaded] = useState(false);
  const [sessionInfo, setSessionInfo] = useState<any>(null);
  const [sdkResponse, setSdkResponse] = useState<any>(null);
  // Escuchar el evento 'message' para Embedded Signup
 useEffect(() => {
  const handleMessage = async (event: MessageEvent) => {
    // Dominios válidos desde los que Meta puede enviar mensajes
    const allowedOrigins = [
      "https://www.facebook.com",
      "https://web.facebook.com",
      "https://business.facebook.com",
      "https://apps.facebook.com",
      "https://www.messenger.com",
    ];

    // Ignorar mensajes de otros orígenes
    if (!allowedOrigins.includes(event.origin)) return;

    // Intentar parsear el mensaje
    let data: any;
    try {
      data = typeof event.data === "string" ? JSON.parse(event.data) : event.data;
    } catch {
      return; // ignorar mensajes no JSON
    }

    // Verificar que sea el evento correcto
    if (data?.type !== "WA_EMBEDDED_SIGNUP") return;

    try {
      switch (data.event) {
        case "FINISH": {
          setIsConnected(true);
          setSessionInfo(data.data);
          setIsLoading(true);

          const code = data.data?.code;
          const waba_id = data.data?.waba_id;

          if (!code || !waba_id) {
            setError("Faltan datos en la respuesta de Meta.");
            setIsLoading(false);
            return;
          }

          // Enviar datos al backend
          try {
            const backendUrl = import.meta.env.VITE_REGISTER_URL;
            const apiKey = import.meta.env.VITE_API_KEY_AUTH;

            const res = await fetch(backendUrl, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "api-key-auth": apiKey,
              },
              body: JSON.stringify({ code, waba_id }),
            });

            if (!res.ok) throw new Error("Error al comunicar con el backend.");

            // Log controlado: visible solo en éxito
            console.info("✅ Registro exitoso:", {
              waba_id,
              codeFragment: code.substring(0, 6),
            });
          } catch (err) {
            console.error("❌ Error enviando al backend:", err);
            setError("No se pudo enviar la activación al backend.");
          } finally {
            setIsLoading(false);
          }
          break;
        }

        case "CANCEL":
          setError(`Registro cancelado en el paso: ${data.data?.current_step || "desconocido"}`);
          break;

        case "ERROR":
          setError(`Error durante el registro: ${data.data?.error_message || "desconocido"}`);
          break;

        default:
          break;
      }
    } catch (err) {
      console.error("❌ Error procesando evento de Meta:", err);
    }
  };

  window.addEventListener("message", handleMessage);
  return () => window.removeEventListener("message", handleMessage);
}, []);

  // Callback de login de Facebook
  const fbLoginCallback = (response: any) => {
    setSdkResponse(response);
    if (response.authResponse) {
      // Aquí puedes enviar el código al backend para obtener el access token
      // const code = response.authResponse.code;
    }
  };

  // Lanzar Embedded Signup
  const launchWhatsAppSignup = () => {
    if (!sdkLoaded || !window.FB) {
      setError('El SDK de Facebook no está disponible.');
      return;
    }
    setIsLoading(true);
    setError(null);
    window.FB.login(fbLoginCallback, {
      config_id: '1526038345083724', // Reemplaza con tu config_id real
      response_type: 'code',
      override_default_response_type: true,
    });
    setIsLoading(false);
  };

  // Cargar el SDK de Facebook solo una vez
  useEffect(() => {
    // Evitar cargar el script varias veces
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

          <div className="flex flex-col items-center justify-center gap-6 mt-8">
            {/* Botón Embedded Signup WhatsApp/Meta */}
            <button
              onClick={launchWhatsAppSignup}
              disabled={isLoading || !sdkLoaded}
              className="group relative bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white px-12 py-5 rounded-xl font-semibold text-lg transition-all duration-300 shadow-[0_0_30px_rgba(34,197,94,0.5)] hover:shadow-[0_0_40px_rgba(34,197,94,0.6)] transform hover:-translate-y-0.5 border-shine"
            >
              {isLoading ? (
                <span className="flex items-center gap-3">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Iniciando registro embebido...
                </span>
              ) : !sdkLoaded ? (
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
            {/* Mostrar solo el estado relevante al usuario */}
            {isConnected && sessionInfo && (
              <div className="w-full max-w-xl bg-slate-900/80 rounded-xl p-4 mt-4 border border-green-500/20 text-center">
                <h3 className="text-green-400 font-bold mb-2">¡Conexión exitosa!</h3>
                <p className="text-gray-200 text-base">Tu cuenta de WhatsApp Business fue conectada correctamente.</p>
              </div>
            )}
            {error && (
              <div className="w-full max-w-xl bg-red-900/80 rounded-xl p-4 mt-4 border border-red-500/20 text-center">
                <h3 className="text-red-400 font-bold mb-2">Hubo un problema</h3>
                <p className="text-gray-200 text-base">{error}</p>
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
