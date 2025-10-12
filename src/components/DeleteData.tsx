import React from 'react';
import { Mail } from 'lucide-react';

const DeleteData: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">Eliminación de Datos Personales</h1>

        <div className="prose prose-invert max-w-none space-y-6 text-gray-300">
          <p className="text-lg">
            Si deseas eliminar los datos que Mergeon tiene sobre ti, puedes solicitarlo en cualquier momento enviando un correo a:
          </p>

          <div className="bg-slate-900 border border-blue-500/20 rounded-lg p-6 my-8">
            <div className="flex items-center gap-3 text-blue-400 text-xl">
              <Mail className="w-6 h-6" />
              <a href="mailto:mergeoncontact@gmail.com" className="hover:text-blue-300 transition-colors">
                mergeoncontact@gmail.com
              </a>
            </div>
          </div>

          <section>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Por favor incluye en el correo:</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Tu nombre completo</li>
              <li>El servicio o aplicación de Mergeon que estás utilizando</li>
              <li>Una breve descripción de la solicitud de eliminación</li>
            </ul>
          </section>

          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6 mt-8">
            <p className="text-white font-medium">
              Una vez recibida tu solicitud, confirmaremos la eliminación de tus datos en un plazo máximo de <span className="text-blue-400">5 días hábiles</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteData;
