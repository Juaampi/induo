import { socialLinks } from '../lib/data';

export default function CategoryCard({ category }) {
  const consultMessage = `Hola, quiero consultar indumentaria deportiva personalizada para ${category.name}.`;
  const whatsappLink = `https://wa.me/${socialLinks.whatsapp.split('?')[1].split('=')[1].split('%20')[0]}?text=${encodeURIComponent(consultMessage)}`;

  return (
    <div className="card p-8 h-full flex flex-col hover:scale-105 transition-transform duration-300">
      {/* Icon */}
      <div className="text-5xl mb-4">{category.icon}</div>

      {/* Title */}
      <h3 className="text-2xl font-black text-dark mb-3">{category.name}</h3>

      {/* Description */}
      <p className="text-accent text-sm mb-6 flex-grow">{category.description}</p>

      {/* Benefits */}
      <div className="mb-6 space-y-2">
        {category.benefits.slice(0, 2).map((benefit, idx) => (
          <div key={idx} className="flex gap-2 text-sm">
            <span className="text-primary font-bold">•</span>
            <span className="text-dark">{benefit}</span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <button className="btn-primary w-full">
        Consultar por {category.name}
      </button>
    </div>
  );
}
