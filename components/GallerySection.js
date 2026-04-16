import { workExamples } from '../lib/data';

export default function GallerySection() {
  return (
    <section id="gallery" className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Galería de trabajos</h2>
          <p className="section-subtitle">Algunos de nuestros proyectos realizados</p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workExamples.map((work) => (
            <div key={work.id} className="card overflow-hidden group cursor-pointer">
              {/* Image Placeholder */}
              <div className="aspect-square bg-gradient-to-br from-primary to-red-600 flex items-center justify-center text-8xl group-hover:scale-110 transition-transform duration-300">
                {work.category === 'Fútbol' && '⚽'}
                {work.category === 'Running' && '🏃'}
                {work.category === 'Eventos' && '🎉'}
                {work.category === 'Entrenamiento' && '💪'}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-xs font-bold text-primary bg-primary bg-opacity-10 px-3 py-1 rounded-full">
                    {work.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-dark mb-2">{work.title}</h3>
                <p className="text-accent text-sm">{work.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
