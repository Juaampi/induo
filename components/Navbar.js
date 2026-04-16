import { useState } from 'react';
import Image from 'next/image';
import { siteContent, socialLinks } from '../lib/data';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Qué hacemos', href: '#aboutus' },
    { label: 'Productos', href: '#products' },
    { label: 'Categorías', href: '#categories' },
    { label: 'Trabajos', href: '#gallery' },
    { label: 'Proceso', href: '#process' },
    { label: 'Contacto', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#hero" className="flex items-center gap-2">
              <Image
                src="/images/logoinduo.jpg"
                alt="IN DUO Logo"
                width={48}
                height={48}
                className="w-12 h-12 rounded-full object-cover"
              />
              <span className="font-black text-primary text-lg hidden sm:block">IN DUO</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-dark hover:text-primary transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href={socialLinks.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="btn-primary text-sm"
            >
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-dark hover:bg-light rounded-lg transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={socialLinks.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="block btn-primary w-full text-center mt-4"
            >
              WhatsApp
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
