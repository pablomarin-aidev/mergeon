import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">Política de Privacidad</h1>

        <div className="prose prose-invert max-w-none space-y-6 text-gray-300">
          <p className="text-lg">
            En Mergeon valoramos y protegemos tu privacidad. Esta política explica cómo recopilamos, usamos y protegemos tu información personal.
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Información que recopilamos</h2>
            <p>
              Podemos recopilar datos básicos de contacto (nombre, correo, número de teléfono) y datos técnicos necesarios para ofrecer nuestros servicios de automatización e inteligencia artificial.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Uso de la información</h2>
            <p>
              Los datos se utilizan únicamente para la prestación de servicios, soporte técnico, mejora de nuestros sistemas y comunicación con el cliente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Almacenamiento y seguridad</h2>
            <p>
              La información se almacena de forma segura en servidores protegidos y nunca se comparte con terceros sin tu consentimiento expreso.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Derechos del usuario</h2>
            <p>
              Puedes solicitar en cualquier momento la modificación o eliminación de tus datos enviando un correo a:<br />
              📧 <a href="mailto:mergeoncontact@gmail.com" className="text-blue-400 hover:text-blue-300">mergeoncontact@gmail.com</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Cambios a esta política</h2>
            <p>
              Nos reservamos el derecho de actualizar esta política. Las modificaciones se publicarán en esta página.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
