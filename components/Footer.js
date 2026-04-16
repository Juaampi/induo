import Image from 'next/image';
import { footerLinks, socialLinks } from '../lib/data';

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/images/logoinduo.jpg"
                alt="IN DUO Logo"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="font-black text-primary text-lg">IN DUO</span>
            </div>
            <p className="text-gray-400 text-sm">
              Indumentaria deportiva personalizada para clubes, equipos y eventos.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-white mb-4">Navegación</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              {footerLinks.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="font-bold text-white mb-4">Más</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              {footerLinks.slice(4).map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white mb-4">Contacto</h3>
            <div className="space-y-3">
              <a
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors text-sm"
              >
                <span>💬</span> WhatsApp
              </a>
              <a
                href={`mailto:${socialLinks.email}`}
                className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors text-sm"
              >
                <span>✉️</span> {socialLinks.email}
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors text-sm"
              >
                <span>📸</span> Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          {/* Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; 2026 IN DUO. Todos los derechos reservados.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary transition-colors">
                Privacidad
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Términos
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
