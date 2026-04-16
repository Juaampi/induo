import { aboutContent } from '../lib/data';

export default function WhatWeDoSection() {
  return (
    <section id="aboutus" className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Visual */}
          <div className="relative">
            <div className="bg-white rounded-xl shadow-xl p-8">
              <div className="grid grid-cols-3 gap-4">
                {['⚽', '🏃', '💪'].map((emoji, i) => (
                  <div
                    key={i}
                    className="aspect-square bg-light rounded-lg flex items-center justify-center text-4xl"
                  >
                    {emoji}
                  </div>
                ))}
              </div>
              <div className="text-center mt-6">
                <p className="text-sm font-bold text-accent">+500 clientes satisfechos</p>
                <p className="text-xl font-black text-dark">Tu deporte, tu identidad</p>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <h2 className="section-title">{aboutContent.title}</h2>
            <p className="section-subtitle mt-4 text-base">{aboutContent.description}</p>

            <div className="mt-10 space-y-4">
              {aboutContent.points.map((point, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="text-primary text-2xl flex-shrink-0">✓</div>
                  <p className="text-dark font-medium">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
