import React from 'react';

const TermsConditions: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">Términos y Condiciones de Uso</h1>

        <div className="prose prose-invert max-w-none space-y-6 text-gray-300">
          <p className="text-lg">
            Bienvenido a Mergeon. Al acceder o utilizar nuestros servicios, aceptas cumplir con los presentes Términos y Condiciones.
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Descripción del servicio</h2>
            <p>
              Mergeon ofrece soluciones de automatización e inteligencia artificial para empresas y emprendedores.
              El uso de nuestros servicios implica la aceptación de estos términos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Uso permitido</h2>
            <p>
              No se permite utilizar nuestros servicios para actividades ilegales, fraudulentas o que infrinjan derechos de terceros.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Propiedad intelectual</h2>
            <p>
              Todo el contenido, marca y material incluido en nuestros servicios es propiedad de Mergeon o de sus respectivos titulares.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Responsabilidad</h2>
            <p>
              Mergeon no se hace responsable por daños derivados del uso indebido de las herramientas o de la interpretación de los resultados.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Modificaciones</h2>
            <p>
              Podemos actualizar estos términos en cualquier momento. Las versiones actualizadas se publicarán en esta misma página.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">6. Contacto</h2>
            <p>
              Para consultas sobre estos Términos, contáctanos en:<br />
              📧 <a href="mailto:mergeoncontact@gmail.com" className="text-blue-400 hover:text-blue-300">mergeoncontact@gmail.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
