import { processSteps } from '../lib/data';

export default function ProcessTimeline() {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Nuestro proceso</h2>
          <p className="section-subtitle">4 pasos simple para tu pedido personalizado</p>
        </div>

        {/* Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {processSteps.map((item, idx) => (
            <div key={item.step} className="relative">
              {/* Card */}
              <div className="card p-8 text-center h-full">
                {/* Icon */}
                <div className="text-6xl mb-4">{item.icon}</div>

                {/* Step Number */}
                <div className="inline-block w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-black mb-4">
                  {item.step}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-dark mb-3">{item.title}</h3>

                {/* Description */}
                <p className="text-accent text-sm">{item.description}</p>
              </div>

              {/* Connector Line */}
              {idx < processSteps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-1 bg-primary transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
