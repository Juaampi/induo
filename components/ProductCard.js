import { socialLinks, whatsappNumber } from '../lib/data';

export default function ProductCard({ product }) {
  const consultMessage = `Hola, quiero consultar por ${product.name}. Necesito ${product.category}.`;
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(consultMessage)}`;

  return (
    <div className="card p-6 h-full flex flex-col">
      {/* Placeholder Image */}
      <div className="aspect-square bg-gradient-to-br from-primary to-red-600 rounded-lg mb-6 flex items-center justify-center text-6xl">
        👕
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-dark mb-2">{product.name}</h3>
      <p className="text-primary font-bold text-lg mb-3">{product.price}</p>
      <p className="text-accent text-sm mb-4 flex-grow">{product.description}</p>

      {/* Category Badge */}
      <div className="mb-6">
        <span className="inline-block bg-primary bg-opacity-10 text-primary px-3 py-1 rounded-full text-xs font-bold">
          {product.category}
        </span>
      </div>

      {/* CTA */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="btn-primary w-full text-center"
      >
        Consultar
      </a>
    </div>
  );
}
