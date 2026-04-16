import { socialLinks } from '../lib/data';

export default function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-red-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl md:text-6xl font-black mb-6">
          Hacemos tu indumentaria a medida
        </h2>
        <p className="text-xl text-gray-100 mb-10 max-w-3xl mx-auto">
          Diseño único, calidad garantizada, entregas en tiempo. Tu identidad deportiva comienza aquí.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="btn-white">
            Solicitar presupuesto
          </a>
          <a
            href={socialLinks.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 bg-white bg-opacity-20 border-2 border-white text-white font-bold rounded-lg hover:bg-opacity-30 transition-all duration-300 inline-block"
          >
            WhatsApp directo
          </a>
        </div>
      </div>
    </section>
  );
}
