import { siteContent, socialLinks } from '../lib/data';

export default function Hero() {
  return (
    <section id="hero" className="pt-28 pb-20 bg-gradient-to-br from-dark via-gray-900 to-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="text-white">
            <div className="inline-block bg-primary bg-opacity-20 px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-bold text-primary">Bienvenido a IN DUO</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">
              {siteContent.heroTitle}
            </h1>
            
            <p className="text-xl text-gray-300 mb-8">
              {siteContent.heroSubtitle}
            </p>

            <p className="text-lg text-gray-400 mb-10">
              {siteContent.heroDescription}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary">
                {siteContent.heroCTA}
              </a>
              <a
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="btn-white"
              >
                {siteContent.heroCTA2}
              </a>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary to-red-600 rounded-2xl flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-8xl mb-4">👕</div>
                <p className="text-2xl font-black">PERSONALIZA TU ESTILO</p>
                <p className="text-sm mt-2 text-gray-100">Diseño, color, logo, nombres</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
