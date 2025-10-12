import React from 'react';
import { Mail, Linkedin, Twitter, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/company/mergeon', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/mergeon', label: 'Twitter' },
    { icon: Github, href: 'https://github.com/mergeon', label: 'GitHub' },
    { icon: Mail, href: 'mailto:mergeoncontact@gmail.com', label: 'Email' }
  ];

  const footerLinks = [
    {
      title: 'Solutions',
      links: [
        { name: 'AI Chatbots', action: () => scrollToSection('automations') },
        { name: 'WhatsApp Automation', action: () => scrollToSection('automations') },
        { name: 'Workflow Automation', action: () => scrollToSection('automations') },
        { name: 'Custom Solutions', action: () => scrollToSection('contact') }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', action: () => scrollToSection('about') },
        { name: 'Testimonials', action: () => scrollToSection('testimonials') },
        { name: 'Contact', action: () => scrollToSection('contact') },
        { name: 'Blog', action: () => {} }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', action: () => {} },
        { name: 'Terms & Conditions', action: () => {} },
        { name: 'Cookie Policy', action: () => {} },
        { name: 'Data Protection', action: () => {} }
      ]
    }
  ];

  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">MERGEON</div>
            <p className="text-gray-300 mb-8 leading-relaxed max-w-md">
              Transformando negocios con automatización inteligente de IA.
              Ayudamos a empresas a optimizar operaciones, aumentar eficiencia y acelerar crecimiento.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="bg-slate-800 border border-blue-500/20 hover:border-blue-500/40 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] p-3 rounded-xl transition-all duration-300 hover:scale-110"
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Soluciones</h3>
            <ul className="space-y-4">
              <li><button onClick={() => scrollToSection('ai-agent')} className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-left">Agente IA</button></li>
              <li><button onClick={() => scrollToSection('manager')} className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-left">Plataforma Manager</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-left">Soluciones Custom</button></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Empresa</h3>
            <ul className="space-y-4">
              <li><button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-left">Nosotros</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-left">Contacto</button></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-blue-500/20 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} MERGEON. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200">
                Política de Privacidad
              </button>
              <button className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200">
                Términos y Condiciones
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;