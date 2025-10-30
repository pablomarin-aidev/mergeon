import React, { useState, useEffect } from "react";

// Importar iconos usados (ejemplo, ajustar según librería de iconos que uses)
import { FileCheck, AlertCircle, Phone, Shield } from "react-feather";

interface Requirement {
  icon: React.ComponentType;
  text: string;
}

const requirements: Requirement[] = [
  { icon: FileCheck, text: "Tener una cuenta de Facebook Business activa." },
  { icon: FileCheck, text: "Tener un usuario con permisos para administrar Business Manager." },
  { icon: FileCheck, text: "Registrar una aplicación en Meta para integración." },
  // Agrega más requisitos aquí según necesidad
];

const ConnectWhatsApp: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sdkLoaded, setSdkLoaded] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [sessionInfo, setSessionInfo] = useState<{ waba_id?: string } | null>(null);

  // Escuchar mensajes para Embedded Signup desde orígenes permitidos
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const allowedOrigins = [
        "https://www.facebook.com",
        "https://web.facebook.com",
        "https://business.facebook.com",
        "https://apps.facebook.com",
        "https://www.messenger.com",
      ];
      if (!allowedOrigins.includes(event.origin)) return;

      try {
        const data = typeof event.data === "string" ? JSON.parse(event.data) : event.data;
        if (data?.type === "WA_EMBEDDED_SIGNUP" && data.event === "FINISH") {
          console.log("[Meta] Registro finalizado:", data.data);
          setSessionInfo({ waba_id: data.data?.waba_id });
          setIsConnected(true);
          alert("✅ Conexión completada con éxito. Esperando activación del backend.");
        }
      } catch {
        // Ignorar mensajes no JSON válidos
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  // Callback login Facebook SDK
  const fbLoginCallback = (response: any) => {
    console.log("[FB Login Response]", response);
    // Aquí puedes manejar errores o confirmar estado
  };

  // Lanzar flujo Embedded Signup
  const launchWhatsAppSignup = () => {
    if (!sdkLoaded || !window.FB) {
      setError("El SDK de Facebook no está disponible.");
      return;
    }
    setError(null);
    setIsLoading(true);
    window.FB.login(fbLoginCallback, {
      config_id: "1526038345083724", // Reemplazar con config_id real
      response_type: "code",
      override_default_response_type: true,
      redirect_uri: "https://mergeon-router.onrender.com/auth/callback",
    });
    setIsLoading(false);
  };

  // Carga el SDK de Facebook solo una vez
  useEffect(() => {
    if (document.getElementById("facebook-jssdk")) {
      setSdkLoaded(true);
      return;
    }

    (window as any).fbAsyncInit = function () {
      window.FB.init({
        appId: "1129979435402896", // Reemplazar con tu app id real
        autoLogAppEvents: true,
        xfbml: true,
        version: "v24.0",
      });
      setSdkLoaded(true);
    };

    const script = document.createElement("script");
    script.id = "facebook-jssdk";
    script.src = "https://connect.facebook.net/en_US/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center justify-center">
      <div className="max-w-4xl w-full">
        <div className="mb-8 text-center">
          <span className="text-green-300 text-sm font-semibold">WhatsApp Business</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Conecta tu WhatsApp Business{" "}
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              en minutos
            </span>
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Al conectar tu cuenta, nos autorizas a integrarte con nuestra plataforma de automatización. Tu
            información está segura y solo se usará para configurar tu número en la nube de Meta (WhatsApp Cloud API).
          </p>
        </div>

        {/* Requisitos */}
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

        {/* Mensajes de error */}
        {error && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 mb-8 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
            <p className="text-red-300">{error}</p>
          </div>
        )}

        {/* Botón signup */}
        <div className="flex flex-col items-center justify-center gap-6 mt-8">
          {!isConnected ? (
            <button
              onClick={launchWhatsAppSignup}
              disabled={isLoading || !sdkLoaded}
              className="group relative bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white px-12 py-5 rounded-xl font-semibold text-lg transition-all duration-300 shadow-[0_0_30px_rgba(34,197,94,0.5)] hover:shadow-[0_0_40px_rgba(34,197,94,0.6)] transform hover:-translate-y-0.5 border-shine"
            >
              {isLoading ? (
                <span className="flex items-center gap-3">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Iniciando registro embebido...
                </span>
              ) : !sdkLoaded ? (
                "Cargando SDK de Meta..."
              ) : (
                <span className="flex items-center gap-3">
                  <Phone className="w-5 h-5" />
                  Registrar WhatsApp Business
                </span>
              )}
            </button>
          ) : (
            <div className="w-full max-w-xl bg-slate-900/80 rounded-xl p-4 mt-4 border border-green-500/20 text-center">
              <h3 className="text-green-400 font-bold mb-2">¡Conexión exitosa!</h3>
              <p className="text-gray-200 text-base">
                Tu cuenta de WhatsApp Business fue conectada correctamente (WABA: {sessionInfo?.waba_id})
              </p>
            </div>
          )}
        </div>

        {/* Información de privacidad */}
        <div className="mt-12 p-6 bg-blue-500/5 border border-blue-500/20 rounded-xl">
          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-white font-semibold mb-2">Tu información está protegida</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Utilizamos las API oficiales de Meta para garantizar la seguridad de tus datos. Nunca almacenamos
                información sensible y cumplimos con todas las políticas de privacidad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectWhatsApp;
